import FooterNav from "@/ui/components/Footer/components/FooterNav";

const FooterNavSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xs font-bold">Mon portfolio</h2>
      <FooterNav />
    </section>
  );
};

export default FooterNavSection;
