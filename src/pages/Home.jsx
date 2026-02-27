import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/marketing/Hero';
import CTASection from '../components/marketing/CTASection';
import Metrics from '../components/marketing/Metrics';
import PricingSection from '../components/pricing/PricingSection';
import TrustedBy from '../components/marketing/TrustedBy';
import ComparisonTable from '../components/pricing/ComparisonTable';

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="pt-20">
                <CTASection />
                <Hero />
                <Metrics />
                <PricingSection />
                <TrustedBy />
                <ComparisonTable />
            </main>
            <Footer />
        </div>
    );
}
