import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.model';
import { TokenStorageService } from '../auth/token-storage.service';
import { FriendService } from '../friend-profile/friend.service';
import { PetService } from '../pet/pet.service';
import { Friend } from '../friend-profile/friend.model';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.css']
})
export class FriendRequestComponent implements OnInit {

  users: User[];

  info: any;

  
  userId = this.token.getId();

  constructor(private token: TokenStorageService, private friendService: FriendService, private petService:PetService) { }

  ngOnInit() {
    this.info = {
      
      
      id: this.token.getId(),
      
    }
    this.getUsersId();
  }

  getUsersId(): void {



    this.petService.getUserRequests(this.userId)
    .subscribe(users => this.users = users);

    console.log(this.users);
  
}

friend: any;



  accept(friendId: number){

    // this.friendService.getFriendship(this.userId, friendId).subscribe((response) =>{
    //   this.friend = response;
    //   console.log(response)
      
    // });
    

    
    this.friendService.acceptRequest(this.userId, friendId).subscribe((friend) =>{
      this.friend = friend
    });
     
   


  }

  delete(friendId: number){

    this.friendService.deleteRequest(this.userId, friendId).subscribe((response) => {
      console.log(response);
    });



    


  }

}
