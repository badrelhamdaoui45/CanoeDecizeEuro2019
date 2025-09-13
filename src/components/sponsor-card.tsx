'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { type Sponsor, getImageById } from '@/lib/data';
import { generateSponsorDescription } from '@/ai/flows/generate-sponsor-description';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from '@/hooks/use-toast';

interface SponsorCardProps {
  sponsor: Sponsor;
}

export default function SponsorCard({ sponsor }: SponsorCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const logo = getImageById(sponsor.logoId);

  const handleGenerateDescription = async () => {
    setIsDialogOpen(true);
    if (description) return; 

    setIsLoading(true);
    try {
      const result = await generateSponsorDescription({
        sponsorName: sponsor.name,
        sponsorActivity: sponsor.activity,
      });
      setDescription(result.description);
    } catch (error) {
      console.error('Failed to generate description:', error);
      toast({
        title: 'Error',
        description: 'Could not generate sponsor description.',
        variant: 'destructive',
      });
      setDescription('Information non disponible.');
    } finally {
      setIsLoading(false);
    }
  };

  const SponsorLogo = () => (
    logo && (
      <div className="relative h-24 w-full">
        <Image
          src={logo.imageUrl}
          alt={`${sponsor.name} logo`}
          fill
          className="object-contain"
          data-ai-hint={logo.imageHint}
        />
      </div>
    )
  );

  return (
    <>
      <Card className="flex flex-col items-center justify-between p-6 text-center bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
        <div className="flex-grow flex items-center">
            {sponsor.website ? (
            <Link href={sponsor.website} target="_blank" rel="noopener noreferrer" className="w-full">
                <SponsorLogo />
            </Link>
            ) : (
            <div className="cursor-pointer w-full" onClick={handleGenerateDescription}>
                <SponsorLogo />
            </div>
            )}
        </div>
        <CardContent className="p-0 mt-4 flex-shrink-0">
          <h3 className="font-headline text-xl font-semibold text-primary">{sponsor.name}</h3>
          {sponsor.website ? (
            <Button asChild variant="link" className="text-accent hover:text-primary">
              <Link href={sponsor.website} target="_blank" rel="noopener noreferrer">
                Visit Website
              </Link>
            </Button>
          ) : (
            <Button variant="secondary" className="mt-2 bg-accent/20 text-accent-foreground hover:bg-accent/30" onClick={handleGenerateDescription}>
              Learn More
            </Button>
          )}
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-headline text-2xl">{sponsor.name}</DialogTitle>
          </DialogHeader>
          <DialogDescription asChild>
            <div>
              {isLoading ? (
                <div className="space-y-2 mt-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ) : (
                <p className="mt-2 text-foreground/80">{description}</p>
              )}
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
}
