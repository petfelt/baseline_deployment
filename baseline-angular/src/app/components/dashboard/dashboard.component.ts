import { Component, OnInit } from '@angular/core';

import { User } from "../../user"

import { AuthService } from '../../services/auth.service';

import { BidOneService } from "../../services/bid-one.service";
import { BidTwoService } from "../../services/bid-two.service";
import { BidThreeService } from "../../services/bid-three.service";

import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  search_string1: string = ""
  search_string2: string = ""
  search_string3: string = ""

  user:User;

  bid1num: Number = 0;
  bid2num: Number = 0;
  bid3num: Number = 0;

  bid1: User = new User(0, "", this.bid1num);
  bid2: User = new User(0, "", this.bid2num);
  bid3: User = new User(0, "", this.bid3num);



  constructor(
    private authService:AuthService,
    private oneService: BidOneService,
    private twoService: BidTwoService,
    private threeService: BidThreeService,
    private router:Router,
    private flashMessage: FlashMessagesService,
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
      // console.log(profile.user._id.toString());
      this.bid1 = new User(profile.user._id, profile.user.name, this.bid1num);
      this.bid2 = new User(profile.user._id, profile.user.name, this.bid2num);
      this.bid3 = new User(profile.user._id, profile.user.name, this.bid3num);
    },
    err => {
      console.log(err);
      return false;
    });
  }

  onBidOneSubmit() {
    this.bid1 = new User(this.user._id, this.user.name, this.bid1num);
    this.flashMessage.show(this.oneService.create(this.bid1), {cssClass: 'alert-danger', timeout: 5000});
    this.bid1num = 0;
  }

  onBidTwoSubmit() {
    this.bid2 = new User(this.user._id, this.user.name, this.bid2num);
    this.flashMessage.show(this.twoService.create(this.bid2), {cssClass: 'alert-danger', timeout: 5000});
    this.bid2num = 0;
  }

  onBidThreeSubmit() {
    this.bid3 = new User(this.user._id, this.user.name, this.bid3num);
    this.flashMessage.show(this.threeService.create(this.bid3), {cssClass: 'alert-danger', timeout: 5000});
    this.bid3num = 0;
  }

  BidInProgress(){
    return this.oneService.bidStatus;
  }

  endBid(){
    let count = 0;
    if(this.oneService.hasBids() && this.twoService.hasBids() && this.threeService.hasBids()){
      this.oneService.bidStatus = false;
    } else {
      if(!this.oneService.hasBids()){
        count++;
      }
      if(!this.twoService.hasBids()){
        count++;
      }
      if(!this.threeService.hasBids()){
        count++;
      }
      this.flashMessage.show("Cannot end the bid. "+count+" products do not have any bids yet.", {cssClass: 'alert-danger', timeout: 5000});
    }
  }

  startBid(){
    this.oneService.reset();
    this.twoService.reset();
    this.threeService.reset();
    this.oneService.bidStatus = true;
  }

}
