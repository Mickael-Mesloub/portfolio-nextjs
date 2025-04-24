import FooterCopyrights from "@/ui/components/Footer/components/FooterCopyrights";
import FooterNavSection from "@/ui/components/Footer/components/FooterNavSection";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col py-8 px-4">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:px-4">
        <FooterNavSection />
      </div>
      <FooterCopyrights />
    </footer>
  );
};

export default Footer;
