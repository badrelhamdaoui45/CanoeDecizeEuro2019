import Image from 'next/image';

export default function NewPartnerSection() {
  return (
    <section id="new-partner" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
              Nouveau Partenariat Excitant!
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
              Nous sommes ravis d'annoncer que nous avons signé un contrat avec un nouveau partenaire. Ce partenariat nous aidera à obtenir de nouveaux équipements et vêtements pour nos jeunes athlètes!
            </p>
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-xl">
            <Image
              src="/CN111.png"
              alt="New partnership announcement"
              fill
              className="object-cover"
              data-ai-hint="team celebration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
