import React from "react";
import tw from "twin.macro";

const Newsletter = () => (
    <Container>
        <Section>
            <InfoLayout>
                <Title>Не упусти возможность сэкономить</Title>
                <Description>и получать лучшие предложения</Description>
            </InfoLayout>
            <FormLayout>
                <Form>
                    <Label htmlFor="emailAddress">Email address</Label>
                    <Input
                        id="emailAddress"
                        name="emailAddress"
                        type="email"
                        autocomplete="email"
                        placeholder="Введите ваш email"
                    />
                    <ButtonLayout>
                        <Button type="submit">Подписаться</Button>
                    </ButtonLayout>
                </Form>
                <FormText>
                    Мы заботимся о защите Ваших данных. Ознакомьтесь с нашей{" "}
                    <FormLink href="#">Политикой Конфиденциальности.</FormLink>
                </FormText>
            </FormLayout>
        </Section>
    </Container>
);

const Container = tw("div")`bg-yellow-300`;
const Section = tw("section")`
    max-w-7xl
    mx-auto
    py-12 px-4
    sm:px-6
    lg:py-16
    lg:px-8
    lg:flex
    lg:items-center
`;

const InfoLayout = tw("aside")`lg:w-0 lg:flex-1`;
const Title = tw("h2")`
    text-3xl
    font-extrabold
    tracking-tight
    text-white
    sm:text-4xl
    text-gray-800
`;
const Description = tw("p")`mt-3 max-w-3xl text-lg leading-6 text-gray-600`;

const FormLayout = tw("aside")`mt-8 lg:mt-0 lg:ml-8`;
const Form = tw("form")`sm:flex`;
const Label = tw("label")`sr-only`;
const Input = tw("input")`
    w-full
    px-5
    py-3
    border
    border-transparent
    rounded-md
    focus:border-indigo-500
    placeholder-gray-500
    sm:max-w-xs
`;
const ButtonLayout = tw("div")`
    mt-3
    rounded-md
    shadow
    sm:mt-0
    sm:ml-3
    sm:flex-shrink-0
`;
const Button = tw("button")`
    w-full
    flex
    items-center
    justify-center
    px-5
    py-3
    border
    border-transparent
    text-base
    font-medium
    rounded-md
    text-white
    bg-indigo-500
    hover:bg-indigo-600
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    focus:ring-offset-gray-800
    focus:ring-indigo-500
`;
const FormText = tw("p")`mt-3 text-sm text-gray-600`;
const FormLink = tw("a")`text-white font-medium underline text-gray-600`;

export { Newsletter };
