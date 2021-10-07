/* eslint-disable complexity */
import React from "react";
import tw from "twin.macro";

const Pagination = ({ page, totalCount, onChangePage }) => {
    const pageComponents = [];

    for (let i = 1; i < totalCount; i++) {
        if (page !== i) {
            pageComponents.push(
                <PageNumber
                    value={i}
                    onClick={(e) => onChangePage(e)}
                    key={`page${i}`}
                >
                    {i}
                </PageNumber>
            );
            continue;
        }
        pageComponents.push(
            <PageNumberActive
                value={i}
                onClick={(e) => onChangePage(e)}
                key={`page${i}`}
            >
                {i}
            </PageNumberActive>
        );
    }

    return (
        <NavigationBlock>
            <PrevBlock>
                <Arrow href="/">
                    <ArrowSvg
                        data-todo-x-description="Heroicon name: solid/arrow-narrow-left"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                            clipRule="evenodd"
                        ></path>
                    </ArrowSvg>
                    Previous
                </Arrow>
            </PrevBlock>
            <Pages>
                {pageComponents}

                {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}

                {/* <Delimiter>
                    ...
                </Delimiter> */}
            </Pages>
            <NextBlock>
                <Arrow href="/">
                    Next
                    <ArrowSvg
                        data-todo-x-description="Heroicon name: solid/arrow-narrow-right"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </ArrowSvg>
                </Arrow>
            </NextBlock>
        </NavigationBlock>
    );
};

const NavigationBlock = tw("nav")`
    border-t border-gray-200 py-8 px-4 flex items-center justify-between sm:px-0
`;
const Pages = tw("div")`
    hidden md:-mt-px md:flex
`;
const PageNumber = tw("button")`
    border-transparent border-0 text-gray-500
    hover:text-gray-700 hover:border-gray-300
    pt-4 px-4 inline-flex items-center text-sm font-medium
    cursor-pointer bg-transparent outline-none hover:outline-none
`;
const PageNumberActive = tw("button")`
    border-transparent border-0 text-gray-700
    border-gray-300 border-t-2
    hover:border-gray-300 border-t-2
    pt-4 px-4 inline-flex items-center text-sm font-medium
    cursor-pointer bg-transparent outline-none hover:outline-none
`;
// const Delimiter = tw("span")`
//     border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium
// `;
const PrevBlock = tw("div")`
    -mt-px w-0 flex-1 flex
`;
const NextBlock = tw("div")`
    -mt-px w-0 flex-1 flex justify-end
`;
const Arrow = tw("a")`
    border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300
`;
const ArrowSvg = tw("svg")`
    mr-3 h-5 w-5 text-gray-400
`;

export default Pagination;
