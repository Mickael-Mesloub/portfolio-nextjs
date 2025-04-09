import FooterCopyrights from "@/ui/components/Footer/components/FooterCopyrights";
import FooterNavSection from "@/ui/components/Footer/components/FooterNavSection";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col py-8 px-4">
      <FooterNavSection />
      <FooterCopyrights />
    </footer>
  );
};

export default Footer;
