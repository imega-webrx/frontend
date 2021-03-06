import tw from "twin.macro";

const Default = tw(
    "a"
)`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`;

const Active = tw(
    "a"
)`bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium`;

export { Default, Active };
