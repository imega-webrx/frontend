import React from "react";
import tw from "twin.macro";

const Team = () => (
    <Container>
        <Section>
            <GridLayout>
                <TextLayout>
                    <Title>Meet our leadership</Title>
                    <Description>
                        Libero fames augue nisl porttitor nisi, quis. Id ac elit
                        odio vitae elementum enim vitae ullamcorper suspendisse.
                        Vivamus fringilla.
                    </Description>
                </TextLayout>
                <TeamLayout>
                    <TeamList>
                        <ListMembers />
                    </TeamList>
                </TeamLayout>
            </GridLayout>
        </Section>
    </Container>
);

const members = [
    {
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        name: "Leslie Alexander",
        position: "Co-Founder / CEO",
    },
    {
        img: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        name: "Michael Foster",
        position: "Co-Founder / CTO",
    },
    {
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        name: "Dries Vincent",
        position: "Manager, Business Relations",
    },
    {
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        name: "Lindsay Walton",
        position: "Front-end Developer",
    },
    {
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        name: "Courtney Henry",
        position: "Designer",
    },
    {
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        name: "Tom Cook",
        position: "Director, Product Development",
    },
];
const ListMembers = () =>
    members.map((member) => (
        <TeamMember key={member.name}>
            <Member>
                <Img src={member.img} />
                <MemberInfo>
                    <MemberName>{member.name}</MemberName>
                    <Position>{member.position}</Position>
                </MemberInfo>
            </Member>
        </TeamMember>
    ));
const Container = tw("div")`bg-white`;
const Section = tw(
    "div"
)`mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24`;
const GridLayout = tw("div")`grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8`;
const TextLayout = tw("div")`space-y-5 sm:space-y-4`;
const Title = tw("h2")`text-3xl font-extrabold tracking-tight sm:text-4xl`;
const Description = tw("p")`text-xl text-gray-500`;
const TeamLayout = tw("div")`lg:col-span-2`;
const TeamList = tw(
    "ul"
)`space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8`;
const TeamMember = tw("li")``;
const Member = tw("div")`flex items-center space-x-4 lg:space-x-6`;
const Img = tw("img")`w-16 h-16 rounded-full lg:w-20 lg:h-20`;
const MemberInfo = tw("div")`font-medium text-lg leading-6 space-y-1`;
const MemberName = tw("h3")``;
const Position = tw("p")`text-indigo-600`;

export { Team };
