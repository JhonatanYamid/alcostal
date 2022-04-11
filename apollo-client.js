import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    ssrMode: true,
    uri: "https://alcostal-back.herokuapp.com/graphql",
    cache: new InMemoryCache(),
    headers: {
        'Authorization':'Bearer 204|PzocRGBPLp6xEVnzKCnaX6WmEhL1jxH2dDCidbCi'
    }
});

export default client;