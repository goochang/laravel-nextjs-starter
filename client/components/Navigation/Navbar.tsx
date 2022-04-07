/*
|--------------------------------------------------------------------------
| A collection of navbar components.
|--------------------------------------------------------------------------
|
| Use any one you like. Once you decided for one, you might want to consider
| deleting the others to keep you javascript bundle size as small as possible.
|
*/
import Link from "next/link";
import {ReactElement, useState} from "react";
import PropTypes from "prop-types";
import { PrimaryButton } from "../Button/Button";

/**
 * The default nabvar.
 */
export function Navbar(): ReactElement {
    const [showSidebar, toggleSidebar] = useState<boolean>(false);

    const toggleNavbar = (): void => {
        toggleSidebar(!showSidebar);
    };

    const sidebarOffset: string = `${
        showSidebar
            ? "right-0"
            : "-right-full md:-right-1/2 lg:-right-1/3 xl:-right-1/4"
    }`;

    // Return statement.
    return (
        <>
            {/* The Menu Bar that the horizontal bar at the top of the screen that is shown on all breakpoints. It includes the logo als well as the Burger Menu */}
            <MenuBar onClick={toggleNavbar} />
            <div
                className={`h-screen w-full md:w-1/2 lg:w-1/3 xl:w-1/4 fixed top-0 right-0 transition-all bg-purple-50 ${sidebarOffset} flex flex-col items-center justiy-start z-50 shadow-lg pt-8 pb-16 px-10`}
            >
                <div
                    className="flex justify-end w-full pb-8 cursor-pointer"
                    onClick={toggleNavbar}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-full w-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <NavbarMenuLink title="Home" link="/" onClick={toggleNavbar} />
                <NavbarMenuLink
                    title="Documentation"
                    link="/docs"
                    onClick={toggleNavbar}
                />
                <NavbarMenuLink
                    title="Blog"
                    link="/blog"
                    onClick={toggleNavbar}
                />
                <NavbarMenuLink
                    title="Contact"
                    link="/contact"
                    onClick={toggleNavbar}
                />
            </div>
        </>
    );
}

/**
 * A Mega Menu that takes the full witdth and height of the screen.
 */
export function MegaMenu(): ReactElement {
    const [showSidebar, toggleSidebar] = useState<boolean>(false);

    const toggleNavbar = (): void => {
        toggleSidebar(!showSidebar);
    };

    const sidebarOffset: string = `${showSidebar ? "right-0" : "-right-full"}`;

    // Return statement.
    return (
        <>
            {/* The Menu Bar that the horizontal bar at the top of the screen that is shown on all breakpoints. It includes the logo als well as the Burger Menu */}
            <MenuBar onClick={toggleNavbar} />
            <div
                className={`h-screen w-screen fixed top-0 right-0 transition-all bg-purple-50 ${sidebarOffset} flex flex-col items-center justiy-start z-50 shadow-lg pt-8 pb-16 px-10`}
            >
                <div
                    className="flex justify-end w-full pb-8 cursor-pointer"
                    onClick={toggleNavbar}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-full w-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <NavbarMenuLink title="Home" link="/" onClick={toggleNavbar} />
                <NavbarMenuLink
                    title="Documentation"
                    link="/docs"
                    onClick={toggleNavbar}
                />
                <NavbarMenuLink
                    title="Blog"
                    link="/blog"
                    onClick={toggleNavbar}
                />
                <NavbarMenuLink
                    title="Contact"
                    link="/contact"
                    onClick={toggleNavbar}
                />
            </div>
        </>
    );
}

/**
 * A Link that can be displayed in the menu.
 * @param {object} props
 */
export function NavbarMenuLink({ title, link, onClick }): ReactElement {
    return (
        <Link href={link}>
            <h4
                onClick={onClick}
                className="cursor-pointer text-2xl mb-8 hover:text-purple-700 transition-all"
            >
                {title}
            </h4>
        </Link>
    );
}
NavbarMenuLink.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

// The horizontal menu bar.
export function MenuBar(
    // { onClick }
    ): ReactElement {
    const [hovered, setHovered] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState("");
    const [hoveredSecondMenu, setHoveredSecondMenu] = useState("");
    const toggleEnter = (e) => {
        e.preventDefault;
        const name = e.target.dataset.name;
        setHoveredMenu(name);
        setHoveredSecondMenu("");
        if(!hovered){
            setHovered(!hovered)
        }
    };
    const toggleSecondEnter = (e) => {
        e.preventDefault;
        const name = e.target.dataset.name;
        setHoveredSecondMenu(name);
    };
    const toggleLeave = (e) => {
        // 임시
        if(e.clientY>=580){
            setHovered(!hovered)
            setHoveredMenu("");
            setHoveredSecondMenu("");
        }
    };
    return (
        <>
        <nav className={`w-screen py-40 px-60 flex fixed top-0 items-center justify-between z-40 ${hovered ? 'hover' : ''} `}
        >
            <Link href="/">
                <a className="logo mr-40">NUSEUM</a>
            </Link>
            
            <div className="center_menu nav_menu">
                <ul className="flex">
                   <li className="one-dep">
                        <a onMouseEnter={toggleEnter} data-name={"about"} className={`one-link ${hoveredMenu == "about" ? 'red-line' : '' }`}
                        >ABOUT NIA</a>
                        <ul className={`two-dep ${hoveredMenu == "about" ? 'show' : '' }`}>
                            <li>
                                <a onMouseEnter={toggleSecondEnter} className="two-link" data-name={"introduce"}>소개 인삿말</a>
                                <ul className={`thr-dep ${hoveredSecondMenu == "introduce" ? 'show' : '' }`}>
                                    <li>
                                        <a className="thr-link">니아 코퍼레이션 소개</a>
                                    </li>
                                    <li>
                                        <a className="thr-link">경영진 소개</a>
                                    </li>
                                    <li>
                                        <a className="thr-link">회사 조직도</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a onMouseEnter={toggleSecondEnter} className="two-link" data-name={"vision"}>비전과 목표</a>
                            </li>
                            <li>
                                <a onMouseEnter={toggleSecondEnter} className="two-link" data-name={"management"}>지속가능한 경영</a>
                            </li>
                            <li>
                                <a onMouseEnter={toggleSecondEnter} className="two-link" data-name={"ci"}>CI 소개</a>
                            </li>
                        </ul>
                    </li> 
                    <li>
                        <a onMouseEnter={toggleEnter} data-name={"brand"} className={`one-link ${hoveredMenu == "brand" ? 'red-line' : '' }`}
                        >OUR BRAND</a>
                        <ul className={`two-dep ${hoveredMenu == "brand" ? 'show' : '' }`}>
                            <li>
                                <a onMouseEnter={toggleSecondEnter} className="two-link" data-name={"brand"}>계열사 소개</a>
                                <ul className={`thr-dep ${hoveredSecondMenu == "brand" ? 'show' : '' }`}>
                                    <li>
                                        <a className="thr-link">소개 인삿말</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a onMouseEnter={toggleSecondEnter} className="two-link" data-name={"team"}>니아 팀 문화</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a onMouseEnter={toggleEnter} data-name={"project"} className={`one-link ${hoveredMenu == "project" ? 'red-line' : '' }`}
                        >PROJECT</a>
                    </li>
                    <li>
                        <a onMouseEnter={toggleEnter} data-name={"contact"} className={`one-link ${hoveredMenu == "contact" ? 'red-line' : '' }`}
                        >CONTACT US</a>
                    </li>
                </ul>
            </div>

            <div className="side_menu nav_menu">
                <a>회사 안내</a>
                <a>KOR</a>
            </div>

            
            <div className={`nav-bg ${hovered ? 'show' : ''}`} onMouseLeave={toggleLeave} ></div>
        </nav>
        <div className="dimd-nav-bg"></div>
        </>
    );
}
MenuBar.propTypes = {
    onClick: PropTypes.func.isRequired
};
