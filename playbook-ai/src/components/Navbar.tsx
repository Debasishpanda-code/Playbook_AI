import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Founder Stories', path: '/founder-stories' },
        { name: 'Playbooks', path: '/playbooks' },
        { name: 'Newsletter', path: '/newsletter' },
    ];

    return (
        <>
            <nav
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
                    isScrolled ? 'bg-cream/80 backdrop-blur-md border-gray-200 py-4' : 'bg-transparent py-6'
                )}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <Link to="/" className="font-serif text-2xl font-bold tracking-tight z-50 relative">
                        PlaybookAI
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-sm font-medium text-charcoal/80 hover:text-charcoal transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="btn-primary">
                            Subscribe
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden z-50 relative p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    'fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out',
                    isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                )}
            >
                <div className="flex flex-col items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="font-serif text-4xl text-charcoal hover:text-gold transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="btn-primary mt-8 text-lg px-8 py-4">
                        Subscribe
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
