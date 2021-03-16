import React from "react";
import tw from "twin.macro";

const Team = () => (
    <Container>
        <Section>
            <GridLayout>
                <TextLayout>
                    <Title>
                        Meet our leadership
                    </Title>
                    <Description>
                        Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse. Vivamus fringilla.
                    </Description>
                </TextLayout>
                <TeamLayout>
                    <TeamList>
                        <TeamMember>
                            <Member>
                                <Img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" />
                                <MemberInfo>
                                    <MemberName>
                                        Leslie Alexander
                                    </MemberName>
                                    <Position>
                                        Co-Founder / CEO
                                    </Position>
                                </MemberInfo>
                            </Member>
                            <Member>
                                <Img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" />
                                <MemberInfo>
                                    <MemberName>
                                        Michael Foster
                                    </MemberName>
                                    <Position>
                                        Co-Founder / CTO
                                    </Position>
                                </MemberInfo>
                            </Member>
                            <Member>
                                <Img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" />
                                <MemberInfo>
                                    <MemberName>
                                        Dries Vincent
                                    </MemberName>
                                    <Position>
                                        Manager, Business Relations
                                    </Position>
                                </MemberInfo>
                            </Member>
                            <Member>
                                <Img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" />
                                <MemberInfo>
                                    <MemberName>
                                        Lindsay Walton
                                    </MemberName>
                                    <Position>
                                        Front-end Developer
                                    </Position>
                                </MemberInfo>
                            </Member>
                            <Member>
                                <Img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" />
                                <MemberInfo>
                                    <MemberName>
                                        Courtney Henry
                                    </MemberName>
                                    <Position>
                                        Designer
                                    </Position>
                                </MemberInfo>
                            </Member>
                            <Member>
                                <Img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" />
                                <MemberInfo>
                                    <MemberName>
                                        Tom Cook
                                    </MemberName>
                                    <Position>
                                        Director, Product Development
                                    </Position>
                                </MemberInfo>
                            </Member>
                        </TeamMember>
                    </TeamList>
                </TeamLayout>
            </GridLayout>
        </Section>
    </Container>
);

const Container = tw("div")`bg-yellow-300`;
const Section = tw("section")`mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24`;
const GridLayout = tw("grid")`grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8`;
const TextLayout = tw("div")`space-y-5 sm:space-y-4`;
const Title = tw("h2")`text-3xl font-extrabold tracking-tight sm:text-4xl`;
const Description = tw("p")`text-xl text-gray-500`;
const TeamLayout = tw("div")`lg:col-span-2`;
const TeamList = tw("ul")`space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8`;
const TeamMember = tw("li")``;
const Member = tw("div")`flex items-center space-x-4 lg:space-x-6`;
const Img = tw("img")`w-16 h-16 rounded-full lg:w-20 lg:h-20`;
const MemberInfo = tw("div")`font-medium text-lg leading-6 space-y-1`;
const MemberName = tw("h3")``;
const Position = tw("p")`text-indigo-600`;

export { Team };
