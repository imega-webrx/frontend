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
                    PharmWorldService реализован для использования любым
                    желающим БЕСПЛАТНО
                </Title>
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
        higherText: "Людям",
        higherTextLight: "которые ценят свое время и хотят сэкономить",
        downText:
            "Покажем самую низкую цену на лекарства в вашем городе и аптеку, где оно есть в наличии.",
    },
    {
        icon: <SecondIcon />,
        higherText: "Аптекам",
        higherTextLight: "которые хотят попасть в большую семью",
        downText:
            "Направьте нам актуальный прайс-лист лекарств, чтобы посетители видели вашу аптеку и приобретали лекарства",
    },
    {
        icon: <ThirdIcon />,
        higherText: "Ветеринарным клиникам",
        higherTextLight: "которые планируют увеличить свою клиентскую базу",
        downText:
            "Помогаем сравнить не только лекарства для людей, но и для животных",
    },
    {
        icon: <FourthIcon />,
        higherText: "Врачам",
        higherTextLight:
            "которые смогут на месте указать пациенту аптеку с необходимым препаратом",
        downText:
            "Поможем подобрать аналоги за считанные секунды, в том числе по ценовому диапазону",
    },
    {
        icon: <FourthIcon />,
        higherText: "Путешественникам",
        higherTextLight:
            "которые хотят ориентироваться и достать нужные препараты",
        downText:
            "Покажем, где находится аналог необходимого лекарства, и где купить по выгодной цене",
    },
    {
        icon: <FourthIcon />,
        higherText: "Мигрантам",
        higherTextLight: "которые переехали в другую страну",
        downText: "Поможем найти аптеки и лекарства недалеко от нового дома",
    },
];
const Features = () =>
    features.map((feature, id) => (
        <FlexBlock key={id}>
            <IconBlock>
                <Icon>{feature.icon}</Icon>
            </IconBlock>
            <TextBlockIcon>
                <div>
                    <HigherText>{feature.higherText}</HigherText>
                    {", "}{" "}
                    <HigherTextLight>{feature.higherTextLight}</HigherTextLight>
                </div>
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
   inline
   text-lg
   leading-6
   font-medium
   text-gray-900
`;

const HigherTextLight = tw("dt")`
   inline
   text-lg
   leading-6
   font-medium
   text-gray-500
`;
const DownText = tw("dd")`
   mt-2
   text-base
   text-gray-500
`;

export { Feature };
