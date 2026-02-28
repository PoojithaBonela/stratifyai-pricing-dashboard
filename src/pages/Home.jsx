import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/marketing/Hero';
import CTASection from '../components/marketing/CTASection';
import Metrics from '../components/marketing/Metrics';
import AIInsightSection from '../components/marketing/AIInsightSection';
import FeaturesSection from '../components/marketing/FeaturesSection';
import PricingSection from '../components/pricing/PricingSection';
import TrustedBy from '../components/marketing/TrustedBy';
import ComparisonTable from '../components/pricing/ComparisonTable';
import RiskVisualizationSection from '../components/marketing/RiskVisualizationSection';
import FAQSection from '../components/pricing/FAQSection';

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="pt-20">
                <Hero />
                <Metrics />
                <PricingSection />
                <TrustedBy />
                <ComparisonTable />
                <FeaturesSection />
                <AIInsightSection />
                <RiskVisualizationSection />
                <CTASection />
                <FAQSection />
            </main>
            <Footer />
        </div>
    );
}
