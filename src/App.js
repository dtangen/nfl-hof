import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import players from "./players.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    players
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const players = this.state.players.filter(player => player.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ players });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.players.map(player => (
          <FriendCard
            removePlayer={this.removePlayer}
            id={player.id}
            key={player.id}
            name={player.name}
            image={player.image}
            position={player.position}
            team={player.team}
            years={player.years}
            class={player.class}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
