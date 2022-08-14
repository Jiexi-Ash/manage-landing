import Features from "components/Features/Features";
import Hero from "components/Hero/Hero";
import MainLayout from "components/UI/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Features />
    </MainLayout>
  );
}
