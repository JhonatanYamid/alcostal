import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    ssrMode: true,
    uri: "https://alcostal-back.herokuapp.com/graphql",
    cache: new InMemoryCache(),
    headers: {
        'Authorization':'Bearer 204|PzocRGBPLp6xEVnzKCnaX6WmEhL1jxH2dDCidbCi',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        'Accept': 'application/json',
    }
});

export default client;