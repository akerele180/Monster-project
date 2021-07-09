import React, { Component } from 'react';
import './App.css';
import { CardList } from './Components/Card-list/card-list.component';
import { SearchBox } from './Components/Searchbox/Search-box.component';

class App extends Component {

  constructor (){
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url) 
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state; //This is the same as writing: 
    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;

    //PERFORMING THE FILTERING OPERATION NOW.
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return ( 
      <div className="App">
      <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder="Search Monsters" 
          handleChange = { this.handleChange }  
        /> 
        <CardList monsters={ filteredMonsters }/>
      </div>
    )
  }
}

export default App; 