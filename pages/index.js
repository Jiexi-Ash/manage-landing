import CTA from "components/CTA/CTA";
import Features from "components/Features/Features";
import Hero from "components/Hero/Hero";
import Testimonials from "components/Testimonials/Testimonials";
import MainLayout from "components/UI/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </MainLayout>
  );
}
