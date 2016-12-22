var cards = {
  suit: ['C', 'D', 'J', 'S'],
  rank: {
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
  }
};

class Card {
  constructor(rank, suit){
    this.rank = rank;
    this.suit = suit;
  }

  buildDeck(){
    var suit = ['C', 'D', 'H', 'S'];
    var rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 , 14];
    var deck = [];
    for (var i=0; i < rank.length; i++){
      for (var k=0; k < suit.length; k++){
        deck.push(rank[i] + suit[k])
      }
    };
    console.log(deck.length);
  }
}

buildDeck();
