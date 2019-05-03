import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_BOOKS = gql`
  {
    books {
      _id
      title
      author
    }
  }
`;

render() {
  return (
    <Query pollInterval={500} query={GET_BOOKS}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
  
        return (
          <div className="container">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  LIST OF BOOKS
                </h3>
                <h4><Link to="/create">Add Book</Link></h4>
              </div>
              <div className="panel-body">
                <table className="table table-stripe">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Author</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.books.map((book, index) => (
                      <tr key={index}>
                        <td><Link to={`/show/${book._id}`}>{book.title}</Link></td>
                        <td>{book.title}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;