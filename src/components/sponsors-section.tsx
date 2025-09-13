import { sponsors } from '@/lib/data';
import SponsorCard from './sponsor-card';
import { Button } from './ui/button';
import Link from 'next/link';

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
        <div className="mt-16 text-center bg-background p-8 rounded-lg shadow-inner">
          <h3 className="font-headline text-2xl font-bold text-primary">Devenez notre nouveau partenaire!</h3>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Nous recherchons un nouveau sponsor pour nous aider à fournir de nouveaux équipements et vêtements à nos jeunes athlètes. Rejoignez-nous dans notre mission de soutien à la prochaine génération de champions de canoë!
          </p>
          <Button asChild size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#contact">Contactez-nous</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
