import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
import CharactersContainer from './components/CharactersContainer';
import { connect } from 'react-redux'

class App extends Component{

  state = {
    characters: []
  }

  componentDidMount(){
    fetch("https://rickandmortyapi.com/api/character/")
    .then(response => response.json())
    .then(({results}) => this.props.setCharacters(results))
  }

  render(){
    return (
      <div className="App">
        <CharactersContainer characters={this.state.characters} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCharacters: (characters) => dispatch({type: 'SET_CHARACTERS', payload: characters})
  }
}

export default connect(null, mapDispatchToProps)(App);
