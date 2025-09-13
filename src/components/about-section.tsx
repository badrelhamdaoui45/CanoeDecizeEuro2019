import { Building, Info, User, Calendar } from 'lucide-react';
import { associationInfo } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  const infoCards = [
    {
      icon: <Info className="h-8 w-8 text-accent" />,
      title: 'Objectif',
      content: associationInfo.object,
    },
    {
      icon: <Building className="h-8 w-8 text-accent" />,
      title: 'Adresse',
      content: associationInfo.address,
    },
    {
      icon: <User className="h-8 w-8 text-accent" />,
      title: 'Dirigeant',
      content: associationInfo.leader,
    },
    {
      icon: <Calendar className="h-8 w-8 text-accent" />,
      title: 'Création',
      content: associationInfo.foundingDate,
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
            À Propos de l&apos;Association
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            {associationInfo.name}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {infoCards.map((card, index) => (
            <Card key={index} className="text-center bg-background border-2 border-transparent hover:border-accent transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2">
              <CardHeader className="items-center">
                {card.icon}
                <CardTitle className="font-headline text-2xl mt-4">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{card.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
