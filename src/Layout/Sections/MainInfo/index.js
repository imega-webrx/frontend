import React, { useState } from "react";
import tw from "twin.macro";
import firstImage from "./images/car-technician-with-stethoscope-car-showroom.jpg";
import secondImage from "./images/delivery-man-holds-bag-with-medicines-pink-background.jpg";
import thirdImage from "./images/doctor-using-modern-computer.jpg";

const imageSrc = [firstImage, secondImage, thirdImage];
const delay = 3000;

const MainInfo = () => {
    const [index, setIndex] = useState(0);
    React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === imageSrc.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <Container>
            <TesxtWrap>
                <Title>
                    PharmWorldService — строим новаторский мост между вами и
                    аптекой для вашего здоровья
                </Title>
                <MainText>
                    Быстрый поиск, показ низких цен и доступность в любой точки
                    мира Сервис помогает каждому, кто заботится о себе и своих
                    близких Также доступен поиск и сравнение цен на ветеринарные
                    препараты
                </MainText>
                <Text>
                    В результате — полная информация о любом интересующем вас
                    препарате в любой точке мира
                </Text>
            </TesxtWrap>
            <Slider>
                <Slide
                    // eslint-disable-next-line no-magic-numbers
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {imageSrc.map((src, i) => (
                        <Image key={i} src={src} alt=""></Image>
                    ))}
                </Slide>
                <SlideDots>
                    {imageSrc.map((_, idx) => (
                        <SlideDot
                            key={idx}
                            style={
                                index === idx
                                    ? { backgroundColor: "indigo" }
                                    : {}
                            }
                            onClick={() => {
                                setIndex(idx);
                            }}
                        ></SlideDot>
                    ))}
                </SlideDots>
            </Slider>
        </Container>
    );
};

const Container = tw("div")`md:flex bg-white p-20 px-8 mx-auto`;
const TesxtWrap = tw("div")`
    bg-white
    flex
    flex-col
    justify-between
    gap-4
    lg:w-full
    mr-4
    pb-4
    `;
const Title = tw("h2")`
    text-xl
    font-extrabold
    text-gray-900
    sm:text-2xl
    `;
const MainText = tw("p")`text-gray-900 md:text-xl`;
const Text = tw("p")`text-gray-900`;
const Slider = tw("div")`overflow-hidden w-full max-w-sm mx-auto`;
const Slide = tw("div")`
    mx-auto
    whitespace-nowrap
    transition
    ease
    delay-200
    max-h-96
    max-w-sm
    `;
const Image = tw("img")`
    inline-block
    w-full
    h-full
    rounded-2xl
    max-h-96
    max-w-sm
    object-cover
    `;
const SlideDots = tw("div")`text-center`;
const SlideDot = tw("div")`
    inline-block
    h-3 w-3 mx-2 mt-4
    rounded-full
    cursor-pointer
    bg-gray-300
    transition
    ease
    delay-200
    `;

export { MainInfo };
