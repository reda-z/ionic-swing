import { Injectable } from '@angular/core';

/*
  Generated class for the UtilsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilsProvider {

  constructor() {
    console.log('Hello UtilsProvider Provider');
  }



  buildCards() {
    let cards = []

    let firstCard = {
      name: "Redondo Girl",
      picture: "images/profile.jpeg",
      age: 21,
      country: "Morocco",
      city: "Casablanca",
      phone: "0633919277"
    }

    let secondCard = {
      name: "disha",
      picture: "images/disha.jpg",
      age: 18,
      country: "Morocco",
      city: "Casablanca",
      phone: "0633919277"
    }

    let thirdCard = {
      name: "huma",
      picture: "images/huma.jpg",
      age: 19,
      country: "Morocco",
      city: "Casablanca",
      phone: "0633919277"
    }

    let fourthCard = {
      name: "madh",
      picture: "images/madh.jpg",
      age: 33,
      country: "Morocco",
      city: "Casablanca",
      phone: "0633919277"
    }

    cards.push(firstCard)
    cards.push(secondCard)
    cards.push(thirdCard)
    cards.push(fourthCard)

    return cards

  }

}
