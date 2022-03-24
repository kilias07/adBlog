import Link from "next/link";
import {useState, useRef, useEffect} from "react";
import {GiHamburgerMenu} from "react-icons/gi";

const NavbarMenu = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const ref = useRef(null);

    useOnClickOutside(ref, () => setModalOpen(false));

    function closeHamburger() {
        setModalOpen(prev => !prev);
    }

    function useOnClickOutside(ref, handler) {
        useEffect(
            () => {
                const listener = (event) => {
                    // Do nothing if clicking ref's element or descendent elements
                    if (!ref.current || ref.current.contains(event.target)) {
                        return;
                    }
                    handler(event);
                };
                document.addEventListener("mousedown", listener);
                document.addEventListener("touchstart", listener);
                return () => {
                    document.removeEventListener("mousedown", listener);
                    document.removeEventListener("touchstart", listener);
                };
            },
            [ref, handler]
        );
    }

    const menuItems = [
        {
            link: "/biografia",
            title: "Biografia",
        },
        {
            link: "/portfolio",
            title: "Portfolio",
        },
        {
            link: "/blog",
            title: "Blog",
        },
        {
            link: "/kontakt",
            title: "Kontakt",
        },
    ];
    return (
            <nav ref={ref} className="flex flex-wrap items-center justify-between px-2 py-3 bg-gray-100"
                 >
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link href="/">
                            <a
                                className="text-lg rounded-lg border-black font-normal tracking-widest inline-block mr-4 py-1 px-4 border-2">
                                Andrzej Dromert
                            </a>
                        </Link>
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={closeHamburger}
                        >
                            <GiHamburgerMenu/>
                        </button>
                    </div>
                    <div className={"lg:flex flex-grow items-center" + (isModalOpen ? " flex" : " hidden")}>
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            {menuItems.map((item,index) => (
                                <li
                                    key={index}
                                    className="nav-item">
                                    <Link href={item.link}>
                                        <a
                                            onClick={closeHamburger}
                                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">{item.title}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default NavbarMenu;