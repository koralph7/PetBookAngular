import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Friend } from './friend.model';
import { RequestOptions, Headers} from '@angular/http';

@Injectable()
export class FriendService{


    constructor(private httpService: HttpClient){
      
    }


    checkIfFriends(userId: number, friendId: number):Observable<boolean>{

        // getPets(): {
  
  
  
        return this.httpService.get<boolean>("http://localhost:8080/checkIfFriends/"+ userId+ "/"+ friendId);
        
        
    }

    checkIfRequested(userId: number, friendId: number):Observable<boolean>{

        // getPets(): {
  
  
  
        return this.httpService.get<boolean>("http://localhost:8080/checkIfRequested/"+ userId+ "/"+ friendId);
        
        
    }

    getUserRequests(id: number) : Observable<any>{

        return this.httpService.get("http://localhost:8080/friendsRequest/"+ id );

    }


    addRequest( friend: Friend){
        let body = JSON.stringify(friend);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        
         return this.httpService.post("http://localhost:8080/friends/", friend);
        
    }

    acceptRequest(userId: string, friendId: number ){

        let body = JSON.stringify(null);
        
return this.httpService.put("http://localhost:8080/acceptRequest/" + userId + "/" + friendId, {});


    }

    getFriendship(userid: string, friendId: number) : Observable<any>{

        return this.httpService.get("http://localhost:8080/helperForAccepting/"+ userid + "/" + friendId );

    }




    deleteRequest(userId: string, friendId: number){

        return this.httpService.delete("http://localhost:8080/deleteFriend/" + userId + "/" + friendId );

    }

}

