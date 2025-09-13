import { sponsors } from '@/lib/data';
import SponsorCard from './sponsor-card';

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
            Nos Sponsors
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Un grand merci à nos partenaires pour leur soutien.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.name} sponsor={sponsor} />
          ))}
        </div>
      </div>
    </section>
  );
}
