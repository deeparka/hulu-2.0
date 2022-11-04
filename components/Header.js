import Image from "next/image";

function Header() {
    return (
        <header className="">
            <Image
                src="https://links.papareact.com/ua6"
                width={200}
                height={100}
                alt=""
                className="object-contain"
            />
        </header>
    );
}

export default Header;
