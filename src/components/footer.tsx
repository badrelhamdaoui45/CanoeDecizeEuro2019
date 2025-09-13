import Link from 'next/link';
import { relatedLinks } from '@/lib/data';
import CanoeIcon from './icons/canoe-icon';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <CanoeIcon className="h-6 w-6 text-accent" />
            <span className="font-headline text-lg font-bold">Canoe Decize 2019</span>
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <span className="font-semibold">Liens Utiles:</span>
            <div className='flex gap-4'>
            {relatedLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-accent transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} CEMCD2019. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
