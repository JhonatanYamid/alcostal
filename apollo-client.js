// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://alcostal-back.herokuapp.com/graphql",
    cache: new InMemoryCache(),
    headers: {
        'Authorization':'Bearer 174|BDDEhWYvvpolT4WUfPkBoqcDd4mfcWeVeT9Xn2Tr'
    }
});

export default client;