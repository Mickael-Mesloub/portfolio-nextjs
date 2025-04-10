import FooterNav from "@/ui/components/Footer/components/FooterNav";
import FooterNavSectionTitle from "@/ui/components/Footer/components/FooterNavSectionTitle";

const FooterNavSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-2">
      <FooterNavSectionTitle />
      <FooterNav />
    </section>
  );
};

export default FooterNavSection;
