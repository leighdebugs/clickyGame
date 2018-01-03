import React, { Component } from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cardtraits from "./cardtraits.json";
import "./App.css";

class App extends Component {
  // set this.state.cards to json array
  state = {
    cardtraits,
    score : 0,
    highScore : 0,
    clicked: [],
    msg : "Click on an image to begin!",
    color: "#ffffff"
  };

  clicked = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.setState({ msg: "Correct!", color: "#ffffff" });
      const newScore = this.state.score + 1;
      this.setState({ score: newScore, clicked: this.state.clicked.concat(id) });
      if (newScore >= this.state.highScore) {
        this.setState({ topScore: newScore });
      };
    }else{
      this.setState({ score: 0, clicked: [], msg: "Sorry, that is incorrect!", color: "#ffffff" });
    };

    const newCards = this.state.cardtraits
    for (var i in newCards) {
      newCards[i].random = Math.random()
    };

    newCards.sort(function(a, b) {
      return a.random - b.random;
    });
    this.setState({ cardtraits : newCards })
  };

  render() {
    return (
      <Wrapper>

      <Title msg = {this.state.msg} color = {this.state.color} score = {this.state.score} highScore = {this.state.highScore} />
      {this.state.cardtraits.map(cardtrait => (
        <Cards
          clicked={this.clicked}
          id={cardtrait.id}
          key={cardtrait.id}
          image={cardtrait.image}
          />

          ))}
      </Wrapper>
      );
  }

}



export default App;
