import React, { Component } from 'react';
import Card from './Card';
import Navbar from './Navbar';
import './App.css';
import shuffle from 'shuffle-array';

const CardState = {
  HIDING : 0,
  SHOWING : 1,
  MATCHING :2
}
 export default class App extends Component {
  constructor(props){
    super(props);
    let cards = [
      {id: 0, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 1, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 2, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 3, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 4, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 5, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 6, cardState: CardState.HIDING, backgroundColor: 'yellow'},
      {id: 7, cardState: CardState.HIDING, backgroundColor: 'yellow'},
      {id: 8, cardState: CardState.HIDING, backgroundColor: 'black'},
      {id: 9, cardState: CardState.HIDING, backgroundColor: 'black'},
      {id: 10, cardState: CardState.HIDING, backgroundColor: 'purple'},
      {id: 11, cardState: CardState.HIDING, backgroundColor: 'purple'},
      {id: 12, cardState: CardState.HIDING, backgroundColor: 'pink'},
      {id: 13, cardState: CardState.HIDING, backgroundColor: 'pink'},
      {id: 14, cardState: CardState.HIDING, backgroundColor: 'lightgreen'},
      {id: 15, cardState: CardState.HIDING, backgroundColor: 'lightgreen'}
    ];
    cards = shuffle(cards);
    this.handleClick = this.handleClick.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
    this.state = {cards,noClick : false}
  }
  handleNewGame(e){
    let cards = this.state.cards.map(c => ({
      ...c,
      cardState : CardState.HIDING
    }));
    cards = shuffle(cards)
    this.setState({cards})
  }
  handleClick(id) {
    const changeCard = (cards,idToChange,newCardState) => {
      return cards.map(c => {
        if(idToChange.includes(c.id)){
          return {
            ...c,
            cardState : newCardState
          }
        } return c;
      })
    }
    const foundCard = this.state.cards.find(c => c.id === id);
    if(this.state.noClick || foundCard.cardState !== CardState.HIDING){
      return;
    }
    let noClick = false;
    let cards = changeCard(this.state.cards,[id],CardState.SHOWING);
    const showingCards = cards.filter(c => c.cardState === CardState.SHOWING);
    const ids = showingCards.map(c => c.id);
    if(showingCards.length === 2 &&
      showingCards[0].backgroundColor === showingCards[1].backgroundColor){
      cards = changeCard(cards,ids,CardState.MATCHING);
    } else if(showingCards.length === 2){
      noClick = true;
      const hidingCards = changeCard(cards,ids,CardState.HIDING);
      this.setState({cards,noClick},() => {
        setTimeout(() => {
          this.setState({cards:hidingCards,noClick:false})
        },1300)
      })
      return ;
    } 
    this.setState({cards,noClick})
  }
  render() {
    const cards = this.state.cards.map((card) => (
      <Card 
        key={card.id} 
        showing={card.cardState !== CardState.HIDING} 
        backgroundColor={card.backgroundColor} 
        id={card.id}
        onClick={this.handleClick}
      />
    ))
    return (
      <div className="App">
      <Navbar onNewGame={this.handleNewGame}/>
        {cards}
      </div>
    );
  }
}


