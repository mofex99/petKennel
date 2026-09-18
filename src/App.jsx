import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import { initialData } from './data';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: initialData
    };
  }

  handleUpdate = (id) => {
    const updatedCharacters = this.state.characters.map((character) => {
      if (character.id === id) {
        const nextIndex = (character.imageIndex + 1) % character.images.length;

        return {
          ...character,
          imageIndex: nextIndex,
          status: nextIndex === 0 ? 'Hungry' : 'Happy',
        };
      }
      return character;
    });

    this.setState({ characters: updatedCharacters });
  }

  render() {
    return (
      <div className="app-container" style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Parent Component (Class-Based)</h1>
        
        <div className="children-container" style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          {this.state.characters.map((character) => (
            <ChildComponent
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.images[character.imageIndex]}
              status={character.status}
              onAction={this.handleUpdate}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
