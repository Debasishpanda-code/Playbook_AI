import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
    category: string;
    title: string;
    description: string;
    slug: string;
    className?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ category, title, description, slug, className }) => {
    return (
        <Link
            to={`/case-studies/${slug}`}
            className={`group block p-8 bg-white border border-gray-200 hover:border-gold/50 transition-all duration-500 hover:shadow-lg hover:shadow-gold/5 ${className}`}
        >
            <div className="flex flex-col h-full justify-between">
                <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-gold mb-4 block">
                        {category}
                    </span>
                    <h3 className="font-serif text-2xl mb-4 group-hover:text-charcoal transition-colors">
                        {title}
                    </h3>
                    <p className="text-charcoal/70 text-sm leading-relaxed mb-8 font-light">
                        {description}
                    </p>
                </div>

                <div className="flex items-center text-xs font-bold tracking-widest uppercase text-charcoal group-hover:text-gold transition-colors">
                    Read Analysis
                    <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    );
};

export default CaseStudyCard;
