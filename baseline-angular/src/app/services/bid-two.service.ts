import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from "../user";
import 'rxjs/add/operator/map';

@Injectable()
export class BidTwoService {
  BIDS: User[] = [];
  GreatestBid: User = new User(0,"",0);

  constructor(private http:Http) { }

  create(user){
    for(var bid=0; bid < this.BIDS.length; bid++){
      if(this.BIDS[bid]._id == user._id){
        // Update greatest bid if you can
        if(user.bid > this.GreatestBid.bid){
          this.GreatestBid = user;
        }
        // Update your bid
        if(this.BIDS[bid].bid < user.bid){
          this.BIDS[bid] = new User(user._id, user.name, user.bid);
          return "You updated your bid!";
        } else {
          return "To update your bid, place a bid higher than your last bid.";
        }
      } else if(user.bid > this.GreatestBid.bid && this.BIDS[bid]._id == user._id){
        this.GreatestBid = user;
        this.BIDS.push(new User(user._id, user.name, user.bid));
        return "You posted a new bid.";
      } else if(user.bid <= this.GreatestBid.bid) {
        return "Your bid is not big enough to enter! You must place a bid larger than the greatest bid to enter.";
      }
    }
    if(user.bid > this.GreatestBid.bid) {
      this.GreatestBid = user;
      this.BIDS.push(new User(user._id, user.name, user.bid));
      return "You posted a new bid.";
    } else {
      return "Your bid is not big enough to enter! You must place a bid larger than the greatest bid to enter.";
    }
  }

  reset(){
    this.BIDS = [];
    this.GreatestBid = new User(0,"",0);
  }

  hasBids(){
    if(this.BIDS.length > 0){
      return true;
    }
    return false;
  }

}
