import React from "react";
import tw from "twin.macro";

const Ready = () => (
    <Container>
        <Section>
            <Title>
                <Question>
                    Нужна бесплатная консультация провизора или ветеринарного врача?
                </Question>
                <Todo>
                    Напиши в чат.
                </Todo>
            </Title>
            <ButtonArea>
                <GetStartedBlock>
                    <GetStartedLink href="#">
                        Написать
                    </GetStartedLink>
                </GetStartedBlock>
                <LearnMoreBlock>
                    <LearnMoreLink href="#">
                        Узнать больше
                    </LearnMoreLink>
                </LearnMoreBlock>
            </ButtonArea>
        </Section>
    </Container>
);

const Container = tw("div")`bg-gray-50`;
const Section = tw("div")`max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between`;
const Title = tw("h2")`text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl`;
const Question = tw("span")`block`;
const Todo = tw("span")`block text-indigo-600`;
const ButtonArea = tw("div")`mt-8 flex lg:mt-0 lg:flex-shrink-0`;
const GetStartedBlock = tw("div")`inline-flex rounded-md shadow`;
const GetStartedLink = tw("a")`inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700`;
const LearnMoreBlock = tw("div")`ml-3 inline-flex rounded-md shadow`;
const LearnMoreLink = tw("a")`inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50`;

export { Ready };
