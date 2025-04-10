import { NavbarLink } from "@/types/navbarLinks";
import NavigationLink from "@/ui/components/Link/NavigationLink";

interface NavbarLinksProps {
  links: NavbarLink[];
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({ links }) => {
  return (
    <>
      {links.map((link, i) => (
        <NavigationLink key={i} href={link.href}>
          {link.title}
        </NavigationLink>
      ))}
    </>
  );
};

export default NavbarLinks;
