'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import CanoeIcon from './icons/canoe-icon';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

export default function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = () => (
    <>
      {navLinks.map((link) => (
        <Button key={link.href} asChild variant="link" className="text-sm font-bold tracking-wider uppercase text-primary-foreground hover:text-accent transition-colors duration-300">
          <Link href={link.href}>{link.label}</Link>
        </Button>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-primary/90 shadow-md backdrop-blur-sm'
          : 'bg-primary'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <CanoeIcon className="h-8 w-8 text-accent" />
          <span className="font-headline text-xl font-bold text-primary-foreground hidden sm:inline">
            Canoe Decize 2019
          </span>
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          <NavLinks />
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary-foreground" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary text-primary-foreground">
              <div className="flex flex-col items-center justify-center h-full gap-6">
                {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                        <Link href={link.href} className="text-2xl font-headline hover:text-accent transition-colors duration-300">
                            {link.label}
                        </Link>
                    </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
