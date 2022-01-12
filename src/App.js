import Header from './components/Header';
import Form from './components/Form';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;
