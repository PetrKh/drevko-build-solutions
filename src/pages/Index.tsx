
import { Helmet } from "react-helmet-async";
import NewHero from "@/components/NewHero";
import ServicesSection from "@/components/ServicesSection";
import InteractiveServicesSection from "@/components/InteractiveServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ReviewsSection from "@/components/ReviewsSection";
import AboutSection from "@/components/AboutSection";
import LeadForm from "@/components/LeadForm";
import ParallaxBackground from "@/components/ParallaxBackground";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Drevko - Строим каркасные дома, бани и хозблоки в Крыму за 21-45 дней</title>
        <meta name="description" content="Строим каркасные дома, бани и хозблоки в Крыму за 21–45 дней. Фиксированная цена. Гарантия 3 года. Звоните!" />
      </Helmet>
      
      <ParallaxBackground />
      <NewHero />
      <InteractiveServicesSection />
      <ServicesSection />
      <PortfolioSection />
      <ReviewsSection />
      <AboutSection />
      <LeadForm />
    </>
  );
};

export default Index;
