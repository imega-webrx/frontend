import { InMemoryCache } from "@apollo/client";
import { searchValueVar } from "./localStore";

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                searchValue: {
                    read() {
                        return searchValueVar();
                    },
                },
            },
        },
    },
});
