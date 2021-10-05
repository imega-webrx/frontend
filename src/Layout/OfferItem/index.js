/* eslint-disable react/prop-types */
/* eslint-disable complexity */
import React, { useState } from "react";
import tw from "twin.macro";

const OfferItem = (props) => {
    const {
        title,
        img = "https://edutorg.ru/image/cache/catalog/МАТЕМАТИКАПП/9/ge-catalog-matematikapp-06-700x700.jpg",
        price,
        pharmacyName = "Какая-то аптека",
        pharmacyLink,
    } = props.offer;

    const [isOpen, setIsOpen] = useState(false);

    const [isOpenBlock, setIsOpenBlock] = useState({
        condition: false,
        contraindication: false,
        creator: false,
        description: false,
        dosage: false,
        farmAction: false,
        forms: false,
        indication: false,
        intName: false,
        modeOfApp: false,
        packing: false,
        withCareful: false,
    });

    const onClickHandler = (event) => {
        let name = event.target.name;

        setIsOpenBlock((prev) => ({ ...prev, [name]: !prev[name] }));
    };

    return (
        <Card>
            <CardReduced>
                <ImgContainer>
                    <CardImg src={img} alt="cardImg" />
                </ImgContainer>
                <RightBlock>
                    <OfferName>{title}</OfferName>

                    <BuyBlock>
                        <PharmacyLink href={pharmacyLink}>
                            {pharmacyName}
                        </PharmacyLink>
                        <Price>{price} руб.</Price>
                        <BtnBuy type="button">Купить</BtnBuy>
                    </BuyBlock>

                    {isOpen ? (
                        <BtnRoll onClick={() => setIsOpen(false)}>
                            Свернуть
                        </BtnRoll>
                    ) : (
                        <BtnRoll onClick={() => setIsOpen(true)}>
                            Характеристики
                        </BtnRoll>
                    )}
                </RightBlock>
            </CardReduced>

            <div>
                {isOpen ? (
                    <Specifications>
                        <Title
                            name="condition"
                            onClick={(event) => onClickHandler(event)}
                        >
                            Условия отпуска
                        </Title>
                        <TextBlock
                            style={{
                                display: isOpenBlock["condition"]
                                    ? "block"
                                    : "none",
                            }}
                        >
                            <Paragraph>свободный</Paragraph>
                        </TextBlock>
                        <Title
                            name="packing"
                            onClick={(event) => onClickHandler(event)}
                        >
                            Фасовка
                        </Title>
                        <TextBlock
                            style={{
                                display: isOpenBlock["packing"]
                                    ? "block"
                                    : "none",
                            }}
                        >
                            <Paragraph>таблетки</Paragraph>
                        </TextBlock>
                        <Title
                            name="description"
                            onClick={(event) => onClickHandler(event)}
                        >
                            Описание
                        </Title>
                        <TextBlock
                            style={{
                                display: isOpenBlock["description"]
                                    ? "block"
                                    : "none",
                            }}
                        >
                            <Paragraph>
                                Нестероидный противовоспалительный препарат
                                (НПВП).
                            </Paragraph>
                        </TextBlock>
                        <Title
                            name="dosage"
                            onClick={(event) => onClickHandler(event)}
                        >
                            Дозировка
                        </Title>
                        <TextBlock
                            style={{
                                display: isOpenBlock["dosage"]
                                    ? "block"
                                    : "none",
                            }}
                        >
                            <Paragraph>
                                Внутрь, запивая водой. Взрослым и детям старше
                                12 лет — по 1 табл., но не более 3 табл. в
                                течение 24 ч. Максимальная суточная доза для
                                взрослых — 1200 мг; для детей 12–17 лет — 1000
                                мг. Если при приеме в течение 2–3 дней симптомы
                                сохраняются, следует прекратить прием и
                                обратиться к врачу.
                            </Paragraph>
                        </TextBlock>
                        <Title
                            name="forms"
                            onClick={(event) => onClickHandler(event)}
                        >
                            Лекарственные формы
                        </Title>
                        <TextBlock
                            style={{
                                display: isOpenBlock["forms"]
                                    ? "block"
                                    : "none",
                            }}
                        >
                            <Paragraph>
                                Круглые двояковыпуклые таблетки, покрытые
                                сахарной оболочкой белого цвета с надпечаткой
                                красного цвета «Nurofen 400» на одной стороне
                                таблетки.
                            </Paragraph>
                        </TextBlock>
                        <Title
                            name="intName"
                            onClick={(event) => onClickHandler(event)}
                        >
                            Международное непатентованное название
                        </Title>
                        <TextBlock
                            style={{
                                display: isOpenBlock["intName"]
                                    ? "block"
                                    : "none",
                            }}
                        >
                            Nurofen forte
                        </TextBlock>
                        <Title
                            name="farmAction"
                            onClick={(event) => onClickHandler(event)}
                        >
                            Фармакологическое действие
                        </Title>
                        <TextBlock
                            style={{
                                display: isOpenBlock["farmAction"]
                                    ? "block"
                                    : "none",
                            }}
                        >
                            <ul>
                                <Li>жаропонижающее</Li>
                                <Li>обезболивающее</Li>
                                <Li>противовоспалительное</Li>
                            </ul>
                        </TextBlock>
                        <Title
                            name="indication"
                            onClick={(event) => onClickHandler(event)}
                        >
                            Показание
                        </Title>
                        <TextBlock
                            style={{
                                display: isOpenBlock["indication"]
                                    ? "block"
                                    : "none",
                            }}
                        >
                            <ul>
                                <Li>головная и зубная боль;</Li>
                                <Li>мигрень;</Li>
                                <Li>болезненные менструации;</Li>
                                <Li>невралгия;</Li>
                                <Li>
                                    боль в спине, мышечные, ревматические и
                                    другие виды боли;
                                </Li>
                                <Li>
                                    лихорадочные состояния при гриппе и
                                    простудных заболеваниях.
                                </Li>
                            </ul>
                        </TextBlock>
                        <Title
                            name="contraindication"
                            onClick={(event) => onClickHandler(event)}
                        >
                            Противопоказании
                        </Title>
                        <TextBlock
                            style={{
                                display: isOpenBlock["contraindication"]
                                    ? "block"
                                    : "none",
                            }}
                        >
                            <ul>
                                <Li>
                                    гиперчувствительность к любому из
                                    ингредиентов, входящих в состав препарата;
                                </Li>
                                <Li>
                                    гиперчувствительность к ацетилсалициловой
                                    кислоте или другим НПВС в анамнезе (в т.ч.
                                    анамнестические данные о бронхообструкции,
                                    рините, крапивнице после приема
                                    ацетилсалициловой кислоты или иного НПВС);
                                    полный или неполный синдром непереносимости
                                    ацетилсалициловой кислоты (риносинусит,
                                    крапивница, полипы слизистой носа,
                                    бронхиальная астма);
                                </Li>
                                <Li>
                                    эрозивно-язвенные заболевания органов
                                    желудочно-кишечного тракта в стадии
                                    обострения (в т.ч. язвенная болезнь желудка
                                    и двенадцатиперстной кишки, болезнь Крона,
                                    неспецифический язвенный колит);
                                </Li>
                                <Li>
                                    гемофилия и другие нарушения свертываемости
                                    крови (в т.ч. гипокоагуляция),
                                    геморрагические диатезы;
                                </Li>
                                <Li>
                                    период после проведения аортокоронарного
                                    шунтирования;
                                </Li>
                                <Li>
                                    желудочно-кишечные кровотечения и
                                    внутричерепные кровоизлияния;
                                </Li>
                                <Li>
                                    выраженная печеночная недостаточность или
                                    активное заболевание печени;
                                </Li>
                                <Li>выраженная почечная недостаточность;</Li>
                                <Li>подтвержденная гиперкалиемия;</Li>
                                <Li>беременность;</Li>
                                <Li>детский возраст до 12 лет.</Li>
                            </ul>
                        </TextBlock>
                        <Title
                            name="withCareful"
                            onClick={(event) => onClickHandler(event)}
                        >
                            С осторожностью
                        </Title>
                        <TextBlock
                            style={{
                                display: isOpenBlock["withCareful"]
                                    ? "block"
                                    : "none",
                            }}
                        >
                            <Paragraph>
                                пожилой возраст, сердечная недостаточность,
                                артериальная гипертензия, ИБС,
                                цереброваскулярные заболевания, дислипидемия,
                                сахарный диабет, заболевания периферических
                                артерий, цирроз печени с портальной
                                гипертензией, печеночная и/или почечная
                                недостаточность, нефротический синдром,
                                гипербилирубинемия, язвенная болезнь желудка и
                                двенадцатиперстной кишки (в анамнезе), гастрит,
                                энтерит, колит, заболевания крови неясной
                                этиологии (лейкопения и анемия), период
                                лактации, тяжелые соматические заболевания;
                                курение, частое употребление алкоголя;
                                длительное использование НПВС, одновременный
                                прием пероральных ГКС (в т.ч. преднизолона),
                                антикоагулянтов (в т.ч. варфарина),
                                антиагрегантов (в т.ч. ацетилсалициловой
                                кислоты, клопидогрела), селективных ингибиторов
                                обратного захвата серотонина (в т.ч.
                                циталопрама, флуоксетина, пароксетина,
                                сертралина).
                            </Paragraph>
                        </TextBlock>
                        <Title
                            name="modeOfApp"
                            onClick={(event) => onClickHandler(event)}
                        >
                            Способ применения
                        </Title>
                        <TextBlock
                            style={{
                                display: isOpenBlock["modeOfApp"]
                                    ? "block"
                                    : "none",
                            }}
                        >
                            <Paragraph>
                                Внутрь, запивая водой. Взрослым и детям старше
                                12 лет — по 1 табл., но не более 3 табл. в
                                течение 24 ч. Максимальная суточная доза для
                                взрослых — 1200 мг; для детей 12–17 лет — 1000
                                мг. Если при приеме в течение 2–3 дней симптомы
                                сохраняются, следует прекратить прием и
                                обратиться к врачу.
                            </Paragraph>
                        </TextBlock>
                        <Title
                            name="creator"
                            onClick={(event) => onClickHandler(event)}
                        >
                            Производитель
                        </Title>
                        <TextBlock
                            style={{
                                display: isOpenBlock["creator"]
                                    ? "block"
                                    : "none",
                            }}
                        >
                            <Paragraph>Великобритания</Paragraph>
                        </TextBlock>
                    </Specifications>
                ) : null}
            </div>
        </Card>
    );
};

const Card = tw("div")`
    px-3 py-4 border-gray-50 justify-between border-b-2
`;

const CardReduced = tw("div")`
    flex mb-5
`;

const ImgContainer = tw("div")`
     py-1 px-1 mr-4 sm:mr-6  flex items-start
`;

const CardImg = tw("img")`
    h-20 w-20 sm:h-32 sm:w-32 object-contain
`;

const RightBlock = tw("div")`
     w-full flex flex-col justify-between
`;

const OfferName = tw("h3")`
    text-sm sm:text-lg font-semibold mb-3
`;

const BuyBlock = tw("div")`
    flex items-center mb-3
`;

const PharmacyLink = tw("a")`
    underline
`;

const Price = tw("span")`
    mx-4
`;

const BtnBuy = tw("button")`
    inline-flex items-center px-2.5 py-1.5 border border-transparent
    text-xs font-medium rounded shadow-sm text-white bg-indigo-600
    hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
    cursor-pointer
`;

const BtnRoll = tw("button")`
    w-28 inline-flex items-center px-2.5 py-1.5 border-0
    text-xs text-gray-700 font-medium rounded shadow-sm
    cursor-pointer
`;

const Specifications = tw("div")`
    flex flex-col
`;

const Title = tw("button")`
    block uppercase
    text-base font-bold mt-1 mb-1 text-left border-0 bg-gray-100 p-0 cursor-pointer
    text-gray-800 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md
`;

const TextBlock = tw("div")`
    text-gray-600 mt-1 mb-2
`;

const Paragraph = tw("p")`
    leading-normal
`;

const Li = tw("li")`
    leading-normal
`;

export default OfferItem;
