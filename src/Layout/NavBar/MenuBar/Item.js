import tw from "twin.macro";

const DefaultItem = tw("a")`
    bg-transparent border-0 cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium
`;

const ActiveItem = tw("a")`
    border-0 cursor-pointer bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium
`;

export { DefaultItem, ActiveItem };
