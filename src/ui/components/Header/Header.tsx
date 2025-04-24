import AppLogo from "@/ui/components/Header/components/AppLogo";
import LocaleSwitcherButton from "@/ui/components/LocaleSwitcher/LocaleSwitcherButton";
import Navbar from "@/ui/components/Navbar/Navbar";
import ThemeSwitch from "@/ui/components/ThemeSwitch";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 min-h-6">
      <AppLogo />
      <div className="flex grow w-full min-w-12 items-center justify-center md:justify-end">
        <div className="flex gap-2">
          <ThemeSwitch />
          <LocaleSwitcherButton />
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
