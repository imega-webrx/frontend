import {
    ApolloClient,
    ApolloLink,
    HttpLink,
} from "@apollo/client";

import fetch from "cross-fetch";
import { cache } from "./cache";

// const QUERY = gql`
//   query getSearchValue {
//     searchValue @client
//   }
// `;

// const graphqlHost =
//     process.env.STORYBOOK_GRAPHQL_HOST || "http://localhost:4000/graphql";

const graphqlHost = "http://localhost:4000/graphql";

const httpLink = new HttpLink({
    fetch,
    uri: graphqlHost,
});

//const cache = new InMemoryCache();


// cache.writeQuery({
//     query: QUERY,
//     data: {
//         searchValue: "",
//     },
// });

const client = new ApolloClient({
    cache: cache,
    link: ApolloLink.from([httpLink]),
});

//const { data: currentData } = useQuery(QUERY);

// client.writeQuery({
//   query: QUERY,
//   data: {
//     searchValue: "client writeQuery: ",
//   },
// });

export default client;
