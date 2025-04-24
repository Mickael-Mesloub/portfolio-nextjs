import Image from "next/image";
import Link from "next/link";
import logo from "@/app/[locale]/icon0.svg";

const AppLogo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center min-w-[40px]">
      <Image src={logo} alt="App logo" width={40} height={40} priority />
    </Link>
  );
};

export default AppLogo;
