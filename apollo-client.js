// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://alcostal-back.herokuapp.com/graphql",
    cache: new InMemoryCache(),
    headers: {
        'Authorization':'Bearer 104|y8DTiubIeRo46hSHxwLD8vwL845YOwYLTnjriTBr'
    }
});

export default client;