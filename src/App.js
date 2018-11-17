import React, { Component } from "react";
// import ApolloClient, { createNetworkInterface } from "apollo-client";
// import { ApolloProvider } from "react-apollo";

import logo from "./logo.svg";
import "./App.sass";

// const networkInterface = createNetworkInterface({
//   uri: "https://api.github.com/graphql",
//   opts: {
//     headers: {
//       Authorization: `bearer ${process.env.GITHUB_API_TOKEN}`
//     }
//   }
// });

// const client = new ApolloClient({
//   networkInterface
// });

class App extends Component {
  render() {
    return (
      // <ApolloProvider client={client}>
        <div id="app">
          <p>Yo.</p>
        </div>
      // </ApolloProvider>
    );
  }
}

export default App;
