import React from "react";
import tw from "twin.macro";

const Footer = () => (
    <FooterLayout>
        <LogoGroup>
            <LogoLayout>
                <LogoLink href="https://www.rigla.ru/">
                    <Logo
                        src="https://pobedaplaza.ru/wp-content/uploads/2017/11/rigla-1024x358.png"
                        alt="Rigla"
                    ></Logo>
                </LogoLink>
            </LogoLayout>
            <LogoLayout>
                <LogoLink href="https://apteka.ru/">
                    <Logo
                        src="https://delta-medical.ru/wp-content/uploads/2019/01/logo_aptekaru-min-1.png"
                        alt="AptekaRu"
                    ></Logo>
                </LogoLink>
            </LogoLayout>
            <LogoLayout>
                <LogoLink href="https://366.ru/">
                    <Logo
                        src="https://tradernew.pro/wp-content/uploads/2020/03/1-46-768x300.png"
                        alt="36.6"
                    ></Logo>
                </LogoLink>
            </LogoLayout>
            <LogoLayout>
                <LogoLink href="https://zhivika.ru/">
                    <Logo
                        src="https://baby.neobiotic.ru/upload/iblock/da6/da62f53e293bfebeda18678de377ac57.png"
                        alt="Zhivika"
                    ></Logo>
                </LogoLink>
            </LogoLayout>
            <LogoLayout>
                <LogoLink href="https://zdravcity.ru/">
                    <Logo
                        src="https://urolesan.ru/images/logo4.png"
                        alt="Zdravcity"
                    ></Logo>
                </LogoLink>
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
const LogoLink = tw("a")``;
const Logo = tw("img")`h-12`;

export { Footer };
