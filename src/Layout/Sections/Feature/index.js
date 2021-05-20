import React from "react";
import tw from "twin.macro";

import FirstIcon from "./icons/first.svg";
import SecondIcon from "./icons/second.svg";
import ThirdIcon from "./icons/third.svg";
import FourthIcon from "./icons/fourth.svg";

const Feature = () => (
    <Container>
        <Section>
            <TextBlock>
                <Title>
                    Сервис поиска и сравнения цен WebRX реализован для:
                </Title>
                <TextUnderTitle>
                    Lorem ipsum dolor sit amet consect adipisicing elit.
                    Possimus magnam voluptatum cupiditate veritatis in accusamus
                    quisquam.
                </TextUnderTitle>
            </TextBlock>
            <FeatureBlock>
                <FeatureList>
                    <Features />
                </FeatureList>
            </FeatureBlock>
        </Section>
    </Container>
);
const features = [
    {
        icon: <FirstIcon />,
        higherText: "людей, которые ценят свое время и хотят сэкономить деньги",
        downText:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
        icon: <SecondIcon />,
        higherText: "аптеки, желающие увеличить узнаваемость и выручку",
        downText:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
        icon: <ThirdIcon />,
        higherText:
            "ветеринарные клиники, которые планируют увеличить свою клиентскую базу",
        downText:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
        icon: <FourthIcon />,
        higherText:
            "врачи, которые за считанные секунды смогут на месте подобрать пациенту аптеку с лучшими условиями на лекарства",
        downText:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
];
const Features = () =>
    features.map((feature, id) => (
        <FlexBlock key={id}>
            <IconBlock>
                <Icon>{feature.icon}</Icon>
            </IconBlock>
            <TextBlockIcon>
                <HigherText>{feature.higherText}</HigherText>
                <DownText>{feature.downText}</DownText>
            </TextBlockIcon>
        </FlexBlock>
    ));
const Container = tw("div")`
   py-12
   bg-white
`;
const Section = tw("div")`
   max-w-7xl
   mx-auto
   px-4
   sm:px-6
   lg:px-8
`;
const TextBlock = tw("div")`
   lg:text-center
`;
const Title = tw("h2")`
   mt-2
   text-3xl
   leading-8
   font-extrabold
   tracking-tight
   text-gray-900
   sm:text-4xl
`;
const TextUnderTitle = tw("p")`
   mt-4
   max-w-2xl
   text-xl
   text-gray-500
   lg:mx-auto
`;
const FeatureBlock = tw("div")`
   mt-10
`;
const FeatureList = tw("dl")`
   space-y-10
   md:space-y-0
   md:grid
   md:grid-cols-2
   md:gap-x-8
   md:gap-y-10
`;
const FlexBlock = tw("div")`
   flex
`;
const IconBlock = tw("div")`
   flex-shrink-0
`;
const Icon = tw("div")`
   flex
   items-center
   justify-center
   h-12
   w-12
   rounded-md
   bg-indigo-500
   text-white
`;
const TextBlockIcon = tw("div")`
   ml-4
`;
const HigherText = tw("dt")`
   text-lg
   leading-6
   font-medium
   text-gray-900
`;
const DownText = tw("dd")`
   mt-2
   text-base
   text-gray-500
`;

export { Feature };
