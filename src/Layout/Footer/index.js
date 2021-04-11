import React from "react";
import tw from "twin.macro";

// images
import images from "./img";
const {fb,dribble,twitter,github,inst,logo} = images;

const Footer = () => (
    <Container>
        <Section className="container">
            <SocialBlock>
                <Logo>
                    <Img src={logo}/>
                </Logo>
                <JustText>Making the world a better place through constructing elegant hierarchies.</JustText>
                <SocialLinks>
                    <SocialLinkItem>
                        <Link href="/">
                            <Img src={fb}/>
                        </Link>
                    </SocialLinkItem>
                    <SocialLinkItem>
                        <Link href="/">
                            <Img src={inst}/>
                        </Link>
                    </SocialLinkItem>
                    <SocialLinkItem>
                        <Link href="/">
                            <Img src={twitter}/>
                        </Link>
                    </SocialLinkItem>
                    <SocialLinkItem>
                        <Link href="/">
                            <Img src={github}/>
                        </Link>
                    </SocialLinkItem>
                    <SocialLinkItem>
                        <Link href="/">
                            <Img src={dribble}/>
                        </Link>
                    </SocialLinkItem>
                </SocialLinks>
            </SocialBlock>
                <PagesBlock>
                    <PagesBlockItem>
                        <PageListTitle>Solutions</PageListTitle>
                            <PagesList>
                                <PageListItem>
                                    <Link href="/">Marketing</Link>
                                </PageListItem>
                                <PageListItem>
                                    <Link href="/">Analytics</Link>
                                </PageListItem>
                                <PageListItem>
                                    <Link href="/">Commerce</Link>
                                </PageListItem>
                                <PageListItem>
                                    <Link href="/">Insights</Link>
                                </PageListItem>
                            </PagesList>
                    </PagesBlockItem>
                    <PagesBlockItem>
                        <PageListTitle>Support</PageListTitle>
                            <PagesList>
                                <PageListItem>
                                    <Link href="/">Pricing</Link>
                                </PageListItem>
                                <PageListItem>
                                    <Link href="/">Documentation</Link>
                                </PageListItem>
                                <PageListItem>
                                    <Link href="/">Guides</Link>
                                </PageListItem>
                                <PageListItem>
                                    <Link href="/">API Status</Link>
                                </PageListItem>
                            </PagesList>
                    </PagesBlockItem>
                    <PagesBlockItem>
                        <PageListTitle>Company</PageListTitle>
                            <PagesList>
                                <PageListItem>
                                    <Link href="/">About</Link>
                                </PageListItem>
                                <PageListItem>
                                    <Link href="/">Blog</Link>
                                </PageListItem>
                                <PageListItem>
                                    <Link href="/">Jobs</Link>
                                </PageListItem>
                                <PageListItem>
                                    <Link href="/">Press</Link>
                                </PageListItem>
                                <PageListItem>
                                    <Link href="/">Partners</Link>
                                </PageListItem>
                            </PagesList>
                    </PagesBlockItem>
                    <PagesBlockItem>
                        <PageListTitle>Legal</PageListTitle>
                            <PagesList>
                                <PageListItem>
                                    <Link href="/">Claim</Link>
                                </PageListItem>
                                <PageListItem>
                                    <Link href="/">Privacy</Link>
                                </PageListItem>
                                <PageListItem>
                                    <Link href="/">Terms</Link>
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
    flex
    mx-auto
    max-w-7xl
    pt-12
    px-4
    sm:pt-24
    sm:px-6
    lg:pt-16 pb-12
    border-b	
    border-gray-300	
    mb-4
    w-full
    flex-wrap
`;
const SocialBlock = tw("div")`
    flex
    flex-col
    text-gray-300
    max-w-sm
`;
const Logo = tw("div")`
    mb-8
    w-10
`;
const Img = tw("img")`
    max-w-full
`;
const JustText = tw("p")`
    mb-8
`;
const SocialLinks = tw("ul")`
    flex
    mb-8
`;
const SocialLinkItem = tw("li")`
    mr-6 last:mr-0
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
const PageListTitle = tw("h5")`
    font-bold
    uppercase
    text-gray-400
    mb-4
    text-sm	
`;
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