import Image from "next/image";
import Logo from "../public/assets/logo.png";

function Header() {
  return (
    <div>
      <Image src={Logo} alt="Logo" width={200} height={150} />
    </div>
  );
}

export default Header;
