import Image from "next/image";
import Link from "next/link";

//components
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-4 sm:px-8 lg:px-16 xl:px-0 xl:h-[50px] backdrop-filter backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 lg:gap-y-0 py-4 lg:py-8">
          <Link href={"/"}>
            <Image
              src={"logo.svg"}
              width={420}
              height={58}
              alt=""
              priority={true}
            />
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
