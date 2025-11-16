// @flow strict
"use client";

import Link from "next/link";
import { useTranslation } from "@/utils/i18n";
import LanguageSwitcher from "./language-switcher";

function Navbar() {
    const { t } = useTranslation();

    return (
        <nav
            className="fixed top-0 left-0 w-full z-[9999] bg-gradient-to-r from-[#0b0f1a] via-[#1a1440] to-[#150b24] shadow-md">
            <div className="flex items-center justify-between py-5 px-8">
                <div className="flex flex-shrink-0 items-center">
                    <Link
                        href="/"
                        className="text-[#16f2b3] text-3xl font-bold"
                    >
                        Thomas Martinez
                    </Link>
                </div>

                <ul
                    className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0
                 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1
                 md:border-0 md:opacity-100"
                    id="navbar-default"
                >
                    <li>
                        <Link
                            className="block px-4 py-2 no-underline outline-none hover:no-underline"
                            href="/#about"
                        >
                            <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                                {t.navbar.about}
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="block px-4 py-2 no-underline outline-none hover:no-underline"
                            href="/#experience"
                        >
                            <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                                {t.navbar.experience}
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="block px-4 py-2 no-underline outline-none hover:no-underline"
                            href="/#skills"
                        >
                            <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                                {t.navbar.skills}
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="block px-4 py-2 no-underline outline-none hover:no-underline"
                            href="/#projects"
                        >
                            <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                                {t.navbar.projects}
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="block px-4 py-2 no-underline outline-none hover:no-underline"
                            href="/#education"
                        >
                            <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                                {t.navbar.education}
                            </div>
                        </Link>
                    </li>
                    <li className="flex items-center px-4 py-2">
                        <LanguageSwitcher />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;