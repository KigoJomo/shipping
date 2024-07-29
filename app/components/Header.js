import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Header = () => {
    return (
      <header className="w-[95%] flex items-center justify-between fixed top-4 overflow-hidden rounded-2xl backdrop-blur-3xl border border-tertiary px-4 py-2">
        <Link href={"/"} className="logo flex items-center gap-4">
          <Image
            src={"/images/logo.png"}
            alt="logo"
            height={32}
            width={32}
            className="w-8 h-8"
          />
          <h3 className="space-grotesk">Consol cargo</h3>
        </Link>
        <div className="buttons flex items-center gap-8">
          <Button primary text="pricing" />
          <Button secondary text="get a quote" />
        </div>
      </header>
    );
}

export default Header;