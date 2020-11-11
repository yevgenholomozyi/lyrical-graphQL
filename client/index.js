import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from "react-apollo";
import './style/style.css';
import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
const cache = new InMemoryCache();

const link = new HttpLink({
 uri: 'http://localhost:4000/'
})
 
const client= new ApolloClient({
  dataIdFromObject: o => o.id, // supply every object that comes through appolo with an id
  cache,
  link
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history = {hashHistory}>
        <Route path="/" component = {App} > 
        <IndexRoute component = {SongList} />
        <Route path="/song/new" component = {SongCreate} /> 
        <Route path="song/:id" component = {SongDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);

