import React from "react";
import tw from "twin.macro";

const Hero = () => (
    <Container>
        <Section>
            <Main>
                <GridBlock>
                    <TextSection>
                        <Title>
                            <MainText>
                                <MainTextUp>Как работает WebRX?</MainTextUp>
                                <MainTextDown>
                                    Качественно, Легко и Быстро!
                                </MainTextDown>
                            </MainText>
                        </Title>
                        <JustText>
                            Просто введите название лекарства и сэкономьте свое время и деньги.
                        </JustText>
                        <NotifyBlock>
                            <NotifyBlockForm action="#" method="POST">
                                <NotifyBlockFormMailLabel htmlFor="email">
                                    Email
                                </NotifyBlockFormMailLabel>
                                <NotifyBlockFormMailInput
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Введите ваш email"
                                />
                                <NotifyBlockFormButton type="submit">
                                    Сообщите мне
                                </NotifyBlockFormButton>
                            </NotifyBlockForm>
                            <TextUnder>
                                Мы заботимся о безопасности Ваших данных.
                                <br />
                                Прочтите нашу &nbsp;
                                <TextUnderLink href="#">
                                    Политику конфиденциальности
                                </TextUnderLink>
                            </TextUnder>
                        </NotifyBlock>
                    </TextSection>
                    <Video>
                        <Preview>
                            <PreviewButton type="button">
                                <Img
                                    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&;auto=format&;fit=crop&amp;w=1350&;q=80"
                                    alt=""
                                />
                            </PreviewButton>
                        </Preview>
                    </Video>
                </GridBlock>
            </Main>
        </Section>
    </Container>
);
const Container = tw("div")`
    relative
    bg-white
    overflow-hidden
`;
const Section = tw("div")`
    relative
    pt-6
    pb-16
    sm:pb-24
    lg:pb-32
`;
const Main = tw("main")`
    mt-16
    mx-auto
    max-w-7xl
    px-4
    sm:mt-24
    sm:px-6
    lg:mt-32
`;
const GridBlock = tw("div")`
    lg:grid
    lg:grid-cols-12
    lg:gap-8
`;
const TextSection = tw("div")`
    sm:text-center
    md:max-w-2xl
    md:mx-auto
    lg:col-span-6
    lg:text-left
`;
const Title = tw("div")``;
// const SmallText = tw("span")`
//     block
//     text-sm
//     font-semibold
//     uppercase
//     tracking-wide
//     text-gray-500
//     sm:text-base
//     lg:text-sm
//     xl:text-base
// `;
const MainText = tw("div")`
    mt-1
    block
    text-4xl
    tracking-tight
    font-extrabold
    sm:text-5xl
    xl:text-6xl
`;
const MainTextUp = tw("h2")`
    block
    text-gray-900
`;
const MainTextDown = tw("h2")`
    text-indigo-600
`;
const JustText = tw("p")`
    mt-3
    text-base
    text-gray-500
    sm:mt-5
    sm:text-xl
    lg:text-lg
    xl:text-xl
`;
const NotifyBlock = tw("div")`
    mt-8
    sm:max-w-lg
    sm:mx-auto
    sm:text-center
    lg:text-left
    lg:mx-0
`;
// const NotifyBlockText = tw("p")`
//     text-base
//     font-medium
//     text-gray-900
// `;
const NotifyBlockForm = tw("form")`
    mt-3
    sm:flex
`;
const NotifyBlockFormMailLabel = tw("label")`
    sr-only
`;
const NotifyBlockFormMailInput = tw("input")`
    block
    w-full
    rounded-md
    py-3
    px-3
    text-base
    placeholder-gray-500
    shadow-sm
    focus:ring-indigo-500
    focus:border-indigo-500
    sm:flex-1
    border-gray-300
`;
const NotifyBlockFormButton = tw("button")`
    mt-3
    w-full
    px-6
    py-3
    border
    border-transparent
    text-base
    font-medium
    rounded-md
    text-white
    bg-gray-800
    shadow-sm
    hover:bg-gray-900
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    focus:ring-indigo-500
    sm:mt-0
    sm:ml-3
    sm:flex-shrink-0
    sm:inline-flex
    sm:items-center
    sm:w-auto
`;
const TextUnder = tw("p")`
    mt-3
    text-sm
    text-gray-500
`;
const TextUnderLink = tw("a")`
    font-medium
    text-gray-900
    underline
`;
const Video = tw("div")`
    mt-12
    relative
    sm:max-w-lg
    sm:mx-auto
    lg:mt-0
    lg:max-w-none
    lg:mx-0
    lg:col-span-6
    lg:flex
    lg:items-center
`;
const Preview = tw("div")`
   relative
   mx-auto
   w-full
   rounded-lg
   shadow-lg
   lg:max-w-md
`;
const PreviewButton = tw("button")`
   relative
   block
   w-full
   bg-white
   rounded-lg
   overflow-hidden
   focus:outline-none
   focus:ring-2
   focus:ring-offset-2
   focus:ring-indigo-500
`;
const Img = tw("img")`
   w-full
`;

export { Hero };
