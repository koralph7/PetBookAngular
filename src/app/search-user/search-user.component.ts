import { Component, OnInit, Injectable, ViewChild, ElementRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../user/user.model';
import { PostService } from '../my-profile/post.service';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Router } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';
import { FriendService } from '../friend-profile/friend.service';
import { Friend } from '../friend-profile/friend.model';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})


export class SearchUserComponent implements OnInit {

  info: any;
  users$: Observable<User[]>;
  private searchTerms = new Subject<string>();
  userId = this.token.getId();
  isFriend: boolean;
  popup = false;
  friend :Friend;

  @ViewChild('myModal') myModal:ElementRef;
  @ViewChild('mySecModal')mySecModal:ElementRef;
  @ViewChild('myAlreadySentModal')myAlreadySentModal:ElementRef;

  constructor( private postService: PostService, private friendService: FriendService,  private router: Router, private token: TokenStorageService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  


  searchOn(){

    jQuery(this.myModal.nativeElement).modal('show'); 
    // $("#exampleModal").modal('show');
   
   
   
    // this.popup=true;


    // console.log(this.popup);

    // console.log;{
    //   respo=>this.popup = respo};
  }

  ngOnInit(): void {
    this.users$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.postService.searchHeroes(term)),
    );
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
      email: this.token.getEmail(),
      
      id: this.token.getId(),
      
    }
  }


  methodIsFriends(x:number, y:number){

    if(x+y ==10 )
    {return true}

    else return false;


  }
  
  friendNumb: number;

  dothis(id:number){

    this.friendNumb = id;
    // const isfri;
    var userIdnum = +this.userId
    
    this.friendService.checkIfFriends(userIdnum, id).subscribe(resp =>{
      this.isFriend=resp;
      console.log(userIdnum);
      console.log(id);
      console.log(resp);

      if(resp == false){
          console.log("You are not friend");
          jQuery(this.myModal.nativeElement).modal('show'); 
      }

      else

      {this.router.navigate(['friendProfile/'+id]);}
    })



    
  }
  
  sendRequest(){

    var userIdnum = +this.userId

    this.friendService.checkIfRequested(userIdnum, this.friendNumb ).subscribe(resp =>{
      this.isFriend=resp;
      console.log(resp);


    if( resp == true){
    
      jQuery(this.myModal.nativeElement).modal('toggle'); 
        jQuery(this.myAlreadySentModal.nativeElement).modal('show'); 
    }

    else{

   
    
    // const friendId = 2285;
    
   this.friend = new Friend(this.friendNumb, userIdnum);

   this.friendService.addRequest(this.friend).subscribe((response) => {
    console.log(response);
  });

// this.friendService.addRequest(this.friend.userId= 7, this.friend.friendId = 5);

jQuery(this.myModal.nativeElement).modal('toggle'); 
jQuery(this.mySecModal.nativeElement).modal('show'); 

    }
  })


}

}