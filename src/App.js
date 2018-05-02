import React, { Component } from "react";
import ApolloClient, { createNetworkInterface } from "apollo-client";
import { ApolloProvider } from "react-apollo";

import GitHubConnector from "./components/GitHubConnector";

import logo from "./logo.svg";
import "./App.sass";

const networkInterface = createNetworkInterface({
  uri: "https://api.github.com/graphql",
  opts: {
    headers: {
      Authorization: `bearer ${process.env.GITHUB_API_TOKEN}`
    }
  }
});

const client = new ApolloClient({
  networkInterface
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <GitHubConnector />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
