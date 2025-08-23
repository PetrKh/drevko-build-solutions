
import Hero from "@/components/Hero";
import UTP from "@/components/UTP";
import InteractiveSection from "@/components/InteractiveSection";
import LeadForm from "@/components/LeadForm";
import Background3D from "@/components/Background3D";
import ErrorBoundary from "@/components/ErrorBoundary";

const Index = () => {
  return (
    <>
      <ErrorBoundary>
        <Background3D />
      </ErrorBoundary>
      <Hero />
      <UTP />
      <InteractiveSection />
      <LeadForm />
    </>
  );
};

export default Index;
