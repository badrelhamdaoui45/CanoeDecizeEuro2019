'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { enhancePhotoQuality } from '@/ai/flows/enhance-photo-quality';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from '@/hooks/use-toast';

interface ImageEnhancerProps {
  imageUrl: string;
  alt: string;
  imageHint: string;
}

export default function ImageEnhancer({ imageUrl, alt, imageHint }: ImageEnhancerProps) {
  const [enhancedImage, setEnhancedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    
    const enhanceImage = async () => {
      try {
        const response = await fetch(imageUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }
        const blob = await response.blob();
        
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = async () => {
          const base64data = reader.result as string;
          
          try {
            const result = await enhancePhotoQuality({ photoDataUri: base64data });
            if (isMounted) {
              setEnhancedImage(result.enhancedPhotoDataUri);
            }
          } catch(aiError) {
             console.error('AI enhancement failed, using original image.', aiError);
             if (isMounted) {
               setEnhancedImage(base64data);
             }
             toast({
                title: "AI Enhancement Failed",
                description: "Could not enhance image. Displaying original.",
                variant: "destructive",
            });
          }
        };
      } catch (error) {
        console.error('Error processing image:', error);
        if (isMounted) {
          setEnhancedImage(imageUrl); // Fallback to original URL on fetch fail
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    enhanceImage();

    return () => {
      isMounted = false;
    };
  }, [imageUrl]);

  if (isLoading || !enhancedImage) {
    return <Skeleton className="aspect-[4/3] w-full rounded-lg" />;
  }

  return (
    <Image
      src={enhancedImage}
      alt={alt}
      width={800}
      height={600}
      className="aspect-[4/3] w-full rounded-lg object-cover"
      data-ai-hint={imageHint}
    />
  );
}
