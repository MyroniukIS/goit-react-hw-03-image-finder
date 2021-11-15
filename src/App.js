import './App.css';
import { Component } from 'react';

import Searchbar from './components/Searchbar/Searchbar';

class App extends Component {
  state = {
    inputValue: '',
  };

  handleFormSubmit = inputValue => {
    this.setState({ inputValue });
  };

  render() {
    return (
      <>
        Hello world!
        <Searchbar forSubmit={this.handleFormSubmit} />
      </>
    );
  }
}
export default App;
