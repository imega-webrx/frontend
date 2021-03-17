import React from "react";
import tw from "twin.macro";

const Footer = () => (
    <FooterLayout>
        <LogoGroup>
            <LogoLayout>
                <Logo
                    src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                    alt="Tuple"
                ></Logo>
            </LogoLayout>
            <LogoLayout>
                <Logo
                    src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                    alt="Mirage"
                ></Logo>
            </LogoLayout>
            <LogoLayout>
                <Logo
                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                    alt="StaticKit"
                ></Logo>
            </LogoLayout>
            <LogoLayout>
                <Logo
                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                    alt="Transistor"
                ></Logo>
            </LogoLayout>
            <LogoLayout>
                <Logo
                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                    alt="Workcation"
                ></Logo>
            </LogoLayout>
        </LogoGroup>
    </FooterLayout>
);

const FooterLayout = tw("footer")`max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8`;
const LogoGroup = tw("section")`
    grid
    grid-cols-2
    gap-8
    md:grid-cols-6
    lg:grid-cols-5
`;
const LogoLayout = tw("div")`
    col-span-1
    flex
    justify-center
    md:col-span-2
    lg:col-span-1
`;
const Logo = tw("img")`h-12`;

export { Footer };
