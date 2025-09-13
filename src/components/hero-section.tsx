import Image from 'next/image';
import { heroImage } from '@/lib/data';

export default function HeroSection() {
  if (!heroImage) {
    return null;
  }

  return (
    <section className="relative h-[60dvh] min-h-[400px] w-full text-white">
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        fill
        className="object-cover"
        priority
        data-ai-hint={heroImage.imageHint}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div className="container px-4 md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Championnats d&apos;Europe Marathon
          </h1>
          <p className="mt-4 max-w-2xl mx-auto font-body text-lg text-gray-200 md:text-xl">
            Canoë Decize 2019
          </p>
        </div>
      </div>
    </section>
  );
}
