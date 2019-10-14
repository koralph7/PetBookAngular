

import{ Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/internal/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, of } from 'rxjs';
import { AddPetInfo } from '../pet-add/add-pet.info';
import { Post } from './post.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { User } from '../user/user.model';
import { tap, catchError } from 'rxjs/operators';






@Injectable()
export class PostService{

  

    constructor(private httpService: HttpClient){
      
    }

    getPosts(userId: string):Observable<any>{

       



        return this.httpService.get<any>("http://localhost:8080/post/"+ userId+ "/posts" );
        
        
    }

    getmyProfile(userId: number):Observable<any>{

      // getPets(): {



      return this.httpService.get<any>("http://localhost:8080/api/userpets/"+ userId+ "/myProfile" );
      
      
  }

    addPost(userId: string, post: Post){
        let body = JSON.stringify(post);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        
         return this.httpService.post("http://localhost:8080/post/"+ userId +"/post", post);
        
    }

    // search(terms: Observable<string>) {
    //     return terms.debounceTime(400)
    //       .distinctUntilChanged()
    //       .switchMap(term => this.searchEntries(term));
    //   }
    
    //   searchEntries(term): Observable<User[] >{
    //     return this.httpService.get<User[]>("http://localhost:8080/api/userpets/"+ term);
    //         // .get(this.baseUrl + this.queryUrl + term)
    //         // .map(res => res.json());
    //   }

    // search(terms: Observable<string>) {
    //     return terms.debounceTime(400)
    //       .distinctUntilChanged()
    //       .switchMap(term => this.searchEntries(term));
    //   }
    
    //   searchEntries(term) {
    //     return this.httpService.get("http://localhost:8080/api/userpets/" + term);

        // return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
        //     tap(_ => this.log(`found heroes matching "${term}"`)),
        //     catchError(this.handleError<Hero[]>('searchHeroes', []))
        //   );
            
    //   }

    private heroesUrl = 'http://localhost:8080/api/userpets';

    searchHeroes(term: string): Observable<User[]> {
        if (!term.trim()) {
          // if not search term, return empty hero array.
          return of([]);
        }
        return this.httpService.get<User[]>(`${this.heroesUrl}/?username=${term}`).pipe(
          tap(_ => this.log(`found heroes matching "${term}"`)),
          catchError(this.handleError<User[]>('searchHeroes', []))
        );
      }


      private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // TODO: better job of transforming error for user consumption
          this.log(`${operation} failed: ${error.message}`);
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }

message:string;
      private log(message: string) {
        console.log(message => this.message = message);
      }


}