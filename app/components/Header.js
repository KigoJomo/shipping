import Image from "next/image";

const Header = () => {
    return (
        <header className="w-[95%] flex items-center justify-center fixed top-8">
            <div className="logo">
                <Image
                    src={"/images/logo.png"}
                    alt="logo"
                    height={32}
                    width={32}
                    className="w-8 h-8"
                />
            </div>
        </header>
    )
}

export default Header;