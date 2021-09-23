import React from "react";
import tw from "twin.macro";

// images
import images from "./img";
const { fb, dribble, twitter, github, inst, logo } = images;

const Footer = () => (
    <Container>
        <Section className="container">
            <SocialBlock>
                <Logo>
                    <Img src={logo} />
                </Logo>
                {/* <JustText>
                    Making the world a better place through constructing elegant
                    hierarchies.
                </JustText> */}
                <SocialLinks>
                    <SocialLinkItem>
                        <Link href="/">
                            <Img src={fb} />
                        </Link>
                    </SocialLinkItem>
                    <SocialLinkItem>
                        <Link href="/">
                            <Img src={inst} />
                        </Link>
                    </SocialLinkItem>
                    <SocialLinkItem>
                        <Link href="/">
                            <Img src={twitter} />
                        </Link>
                    </SocialLinkItem>
                    <SocialLinkItem>
                        <Link href="/">
                            <Img src={github} />
                        </Link>
                    </SocialLinkItem>
                    <SocialLinkItem>
                        <Link href="/">
                            <Img src={dribble} />
                        </Link>
                    </SocialLinkItem>
                </SocialLinks>
            </SocialBlock>
            <PagesBlock>
                <PagesBlockItem>
                    {/* <PageListTitle>Solutions</PageListTitle> */}
                    <PagesList>
                        <PageListItem>
                            <Link href="/">Перечень услуг WebRx</Link>
                        </PageListItem>
                        <PageListItem>
                            <Link href="/">
                                Информация о скидках и инструментах
                            </Link>
                        </PageListItem>
                        <PageListItem>
                            <Link href="/">
                                Препараты по состоянию здоровья
                            </Link>
                        </PageListItem>
                        <PageListItem>
                            <Link href="/">
                                Препараты по системам организма
                            </Link>
                        </PageListItem>
                    </PagesList>
                </PagesBlockItem>
                <PagesBlockItem>
                    {/* <PageListTitle>Support</PageListTitle> */}
                    <PagesList>
                        <PageListItem>
                            <Link href="/">Классы препаратов</Link>
                        </PageListItem>
                        <PageListItem>
                            <Link href="/">О нас</Link>
                        </PageListItem>
                        <PageListItem>
                            <Link href="/">Оферта</Link>
                        </PageListItem>
                        <PageListItem>
                            <Link href="/">Политика конфиденциальности</Link>
                        </PageListItem>
                    </PagesList>
                </PagesBlockItem>
                <PagesBlockItem>
                    {/* <PageListTitle>Company</PageListTitle> */}
                    <PagesList>
                        <PageListItem>
                            <Link href="/">Последние новости</Link>
                        </PageListItem>
                        <PageListItem>
                            <Link href="/">Связь</Link>
                        </PageListItem>
                        <PageListItem>
                            <Link href="/">Помощь</Link>
                        </PageListItem>
                        <PageListItem>
                            <Link href="/">ДОБАВИТЬ КОМПАНИЮ ПАРТНЁР</Link>
                        </PageListItem>
                    </PagesList>
                </PagesBlockItem>
            </PagesBlock>
        </Section>
        <Copyright>
            <JustText>© 2020 Workflow, Inc. All rights reserved.</JustText>
        </Copyright>
    </Container>
);

const Container = tw("footer")`
    bg-gray-800
    flex
    flex-col
`;
const Section = tw("div")`

    mx-auto
    max-w-7xl
    pt-12
    px-4
    sm:pt-16
    sm:px-6
    lg:pt-16 pb-12
    border-b
    border-gray-300
    mb-4
    w-full
    flex-wrap
    justify-between
`;
const SocialBlock = tw("div")`
    flex
    items-center
    text-gray-300
    max-w-sm
    mb-6
`;
const Logo = tw("div")`
    w-10 mr-4
`;
const Img = tw("img")`
    max-w-full
`;
const JustText = tw("p")`
    mb-8
`;
const SocialLinks = tw("ul")`
    flex
    items-center
`;
const SocialLinkItem = tw("li")`
    mr-4 last:mr-0
`;
const Link = tw("a")`
    hover:text-gray-700 transition-all duration-300
`;
const PagesBlock = tw("div")`
    flex
    flex-wrap
`;
const PagesList = tw("ul")`
    flex
    flex-col
`;
// const PageListTitle = tw("h5")`
//     font-bold
//     uppercase
//     text-gray-400
//     mb-4
//     text-sm
// `;
const PagesBlockItem = tw("div")`
    flex
    flex-col
    mb-8
    sm:mr-10
    lg:mr-28
    mr-10
`;
const PageListItem = tw("li")`
    mb-4 last:mb-0
    text-gray-300
    text-base
`;

const Copyright = tw("div")`
    mx-auto
    mt-4
    mb-4
    w-full
    flex
    justify-center
    text-gray-300
`;
export default Footer;
