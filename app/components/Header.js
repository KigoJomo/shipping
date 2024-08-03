import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Header = ({openModal}) => {
    return (
      <header className="w-[95%] h-12 md:h-14 flex items-center justify-between fixed z-10 top-4 overflow-hidden rounded-2xl backdrop-blur-3xl border border-tertiary px-4 py-2 2xl:w-[85%]">
        <Link href={"/"} className="logo flex items-center gap-4">
          <Image
            src={"/images/logo.png"}
            alt="logo"
            height={100}
            width={80}
          />
        </Link>
        <div className="buttons flex items-center gap-8">
          <Button secondary text="get a quote" onClick={() => openModal("air")} />
        </div>
      </header>
    );
}

export default Header;