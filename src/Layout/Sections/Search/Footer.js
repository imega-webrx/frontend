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
    flex
    flex-wrap
    justify-around
    gap-8
    sm:gap-x-20
    sm:justify-center
    md:gap-x-40
    md:justify-evenly
    lg:gap-x-8
    lg:justify-between
`;
const LogoLayout = tw("div")`
    flex
    justify-center
`;
const Logo = tw("img")`h-12`;

export { Footer };
