import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { NavController } from 'ionic-angular';


import { UtilsProvider } from '../../providers/utils/utils'

import {
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  SwingStackDirective,
  SwingCardDirective
} from 'ionic-swing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // @ViewChild('myswing1') swingStack: SwingStackComponent;
  // @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

  @ViewChild('swingStack', {read: SwingStackDirective}) swingStack: SwingStackDirective;
  @ViewChildren('swingCards', {read: SwingCardDirective}) swingCards: QueryList<SwingCardDirective>;

  //@ViewChild('myswing1') swingStack: SwingStackDirective;
  //@ViewChildren('mycards1') swingCards: QueryList<SwingCardDirective>;

  cards: Array<any>;
  stackConfig: StackConfig;
  recentCard: string = '';

  constructor(private utils: UtilsProvider) {

    this.stackConfig = {
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.abs(offsetX) / (element.offsetWidth / 2), 1);
      },
      throwOutDistance: (d) => {
        return 800;
      }
    };
    this.cards = this.utils.buildCards()
  }


  ngAfterViewInit() {
    // Either subscribe in controller or set in HTML
    this.swingStack.throwin.subscribe((event: DragEvent) => {
      event.target.style.background = '#ffffff';
    });
  }


  // // Called whenever we drag an element
  // onItemMove(element, x, y, r) {
  //   var color = '';
  //   var abs = Math.abs(x);
  //   let min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
  //   let hexCode = this.decimalToHex(min, 2);

  //   if (x < 0) {
  //     color = '#FF' + hexCode + hexCode;
  //   } else {
  //     color = '#' + hexCode + 'FF' + hexCode;
  //   }
  //   console.log("toto")
  //   element.style.background = color;
  //   // element.style['transform'] = 'translate3d(0, 0, 0) translate('+x+'px, '+y+'px) rotate('+r+'deg)';
  // }

  // Connected through HTML
  voteUp(like: boolean) {
    let removedCard = this.cards.pop();
    if (like) {
      this.recentCard = 'You liked: ' + removedCard.name;
    } else {
      this.recentCard = 'You disliked: ' + removedCard.name;
    }
  }

  // http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
  decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
      hex = "0" + hex;
    }

    return hex;
  }

}
