import Footer from '@/components/footer';
import Header from '@/components/header';
import { galleryImages } from '@/lib/data';
import Image from 'next/image';

export default function GalleryPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
              Galerie d'Événements
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Revivez les moments forts des championnats 2019.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={800}
                  height={600}
                  className="aspect-[4/3] w-full object-cover transform hover:scale-105 transition-transform duration-300"
                  data-ai-hint={image.imageHint}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
