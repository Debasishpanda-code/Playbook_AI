import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getPageBySlug, type WPPost } from '../services/wordpress';

const DynamicPage = ({ slug, fallbackTitle, fallbackContent }: { slug: string, fallbackTitle: string, fallbackContent: React.ReactNode }) => {
    const [page, setPage] = useState<WPPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPage = async () => {
            const data = await getPageBySlug(slug);
            setPage(data);
            setLoading(false);
        };
        fetchPage();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-cream">
                <Navbar />
                <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto flex justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold"></div>
                </div>
                <Footer />
            </div>
        );
    }

    // Use WordPress content if available, otherwise fallback (for demo purposes)
    const title = page?.title.rendered || fallbackTitle;
    const content = page?.content.rendered ? (
        <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    ) : fallbackContent;

    return (
        <div className="min-h-screen bg-cream">
            <Navbar />
            <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
                <h1 className="font-serif text-4xl md:text-5xl mb-12" dangerouslySetInnerHTML={{ __html: title }} />
                <div className="prose prose-lg prose-headings:font-serif prose-p:font-light prose-p:leading-relaxed text-charcoal/80">
                    {content}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export const About = () => (
    <DynamicPage
        slug="about"
        fallbackTitle="About PlaybookAI"
        fallbackContent={
            <>
                <p>PlaybookAI is a digital publication dedicated to deconstructing the business models, strategies, and mental models of the world's most innovative companies.</p>
                <p>We believe that in a world drowning in content, insight is the only luxury. We don't chase news cycles. We chase first principles.</p>
                <h3>Our Mission</h3>
                <p>To provide the modern operator with the tools, frameworks, and case studies needed to build the businesses of tomorrow.</p>
            </>
        }
    />
);

export const Contact = () => (
    <DynamicPage
        slug="contact"
        fallbackTitle="Contact Us"
        fallbackContent={
            <>
                <p>We'd love to hear from you. Whether you have a tip, a correction, or just want to say hello, please email us at <a href="mailto:hello@playbookai.com" className="text-gold hover:text-charcoal transition-colors">hello@playbookai.com</a>.</p>
                <p>For partnership inquiries, please contact <a href="mailto:partners@playbookai.com" className="text-gold hover:text-charcoal transition-colors">partners@playbookai.com</a>.</p>
            </>
        }
    />
);

export const Privacy = () => (
    <DynamicPage
        slug="privacy-policy"
        fallbackTitle="Privacy Policy"
        fallbackContent={
            <>
                <p>Last updated: November 24, 2025</p>
                <p>Your privacy is important to us. It is PlaybookAI's policy to respect your privacy regarding any information we may collect from you across our website.</p>
                <h3>Information We Collect</h3>
                <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
            </>
        }
    />
);

export const Terms = () => (
    <DynamicPage
        slug="terms-of-service"
        fallbackTitle="Terms of Service"
        fallbackContent={
            <>
                <p>Last updated: November 24, 2025</p>
                <h3>1. Terms</h3>
                <p>By accessing the website at PlaybookAI, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
                <h3>2. Use License</h3>
                <p>Permission is granted to temporarily download one copy of the materials (information or software) on PlaybookAI's website for personal, non-commercial transitory viewing only.</p>
            </>
        }
    />
);
