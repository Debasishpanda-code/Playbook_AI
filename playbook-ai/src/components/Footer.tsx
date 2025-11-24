import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-cream border-t border-gray-200 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="font-serif text-3xl font-bold block mb-6">
                            PlaybookAI.
                        </Link>
                        <p className="text-charcoal/60 text-sm leading-relaxed">
                            Deconstructing the business of tomorrow.
                            <br />
                            Premium analysis for the modern operator.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-serif text-lg mb-6">Content</h4>
                        <ul className="space-y-4 text-sm text-charcoal/70">
                            <li><Link to="/case-studies" className="hover:text-gold transition-colors">Case Studies</Link></li>
                            <li><Link to="/founder-stories" className="hover:text-gold transition-colors">Founder Stories</Link></li>
                            <li><Link to="/playbooks" className="hover:text-gold transition-colors">Playbooks</Link></li>
                            <li><Link to="/newsletter" className="hover:text-gold transition-colors">Newsletter</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif text-lg mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-charcoal/70">
                            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
                            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
                            <li><Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif text-lg mb-6">Social</h4>
                        <ul className="space-y-4 text-sm text-charcoal/70">
                            <li><a href="#" className="hover:text-gold transition-colors">Twitter / X</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200/50 text-xs text-charcoal/40 uppercase tracking-widest">
                    <p>&copy; {new Date().getFullYear()} PlaybookAI Inc. All rights reserved.</p>
                    <p>Designed in India</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
