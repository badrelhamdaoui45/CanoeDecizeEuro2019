import { MapPin, Mail, Phone } from 'lucide-react';
import { associationInfo } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactSection() {
  const mapSrc = "https://maps.google.com/maps?q=10%20Quai%20de%20Medine,%2058000%20Nevers&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
            Contactez-Nous
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Retrouvez-nous et prenez contact.
          </p>
        </div>
        <Card className="overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="font-headline text-2xl font-bold text-primary">Nos Coordonnées</h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Adresse</h4>
                    <p className="text-muted-foreground">{associationInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-accent transition-colors">contact@example.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Téléphone</h4>
                    <p className="text-muted-foreground">+33 1 23 45 67 89</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-80 md:h-full w-full">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
