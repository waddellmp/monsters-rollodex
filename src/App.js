import React from 'react';
import './App.css';
import monstersClient from './api/monstersApi';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
class App extends React.Component {
    constructor() {
        super();
        // this.handleChange = this.handleChange.bind(this);
        this.state = { monsters: [], searchField: '' };
    }
    componentDidMount() {
        // Api call to set monsters
        monstersClient
            .get('/users')
            .then(response => this.setState({ monsters: response.data }))
            .catch(e => console.log('Error GETTING monsters'));
    }

    handleChange = e => {
        this.setState({ searchField: e.target.value });
    };

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className="App">
                <h1>Monsters Rollodex</h1>
                <SearchBox
                    placeholder="search monsters"
                    handleChange={this.handleChange}
                />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
