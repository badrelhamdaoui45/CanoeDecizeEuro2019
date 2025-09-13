import { galleryImages } from '@/lib/data';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function GallerySection() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
            Galerie d&apos;Événements
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Revivez les moments forts des championnats 2019.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {galleryImages.map((image) => (
              <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={800}
                    height={600}
                    className="aspect-[4/3] w-full rounded-lg object-cover"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary-foreground bg-primary/80 hover:bg-primary" />
          <CarouselNext className="text-primary-foreground bg-primary/80 hover:bg-primary" />
        </Carousel>
      </div>
    </section>
  );
}
