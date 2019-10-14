import { Pet } from './pet.model';

import{ Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/internal/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { AddPetInfo } from '../pet-add/add-pet.info';
import { LabResult } from './labResult.model';

@Injectable()
export class PetService{

    startedEditing= new Subject<number>();

    constructor(private httpService: HttpClient){
      
    }

    

    // pets: Pet [] = [
    //     new Pet(
    //         1, "Bluzia", 9, "cat", "https://www.koty.pl/wp-content/uploads/2008/05/cat-1435590_1920.jpg", 
                
    //     ),
    //     new Pet(
    //         2, "Holusiorek", 9, "cat", "http://www.siberiancats.pl/kornelia_big_11.jpg", 
              
    //     )
    // ]

    

    getPets(userId: string):Observable<any>{

        // getPets(): {



        return this.httpService.get<any>("http://localhost:8080/api/userpets/"+ userId+ "/pets" );
        
        
    }

    

    // getPetById(id:number) :Observable<Pet>{


        getPetById(id:number): Observable<any> {

            // return this.pets[id];
        return this.httpService.get("http://localhost:8080/api/pets/" + id);
       
    }

    getLabById(id:number) : Observable<any> {


        return this.httpService.get("http://localhost:8080/labResult/" + id);


    }

    getUserPets(id: number) : Observable<any>{

        return this.httpService.get("http://localhost:8080/api/userpets/"+ id +"/pets");

    }

    getUserRequests(id:string): Observable<any>{

        return this.httpService.get("http://localhost:8080/api/userpets/"+ id +"/getOne");

    }

    getLabByPetId(id:number) : Observable<any> {

        return this.httpService.get("http://localhost:8080/pets/" + id + "/labResult")

    }

    // get(id: number) {
    //     return this.httpService.get("http://localhost:8080/AngularJavaEmp2/api/pets/" + id);
    //   }

    


    private errorHandler(error: Response) {
        return Observable.throw(error);
    }

    // addPet(pet:Pet): Observable<Pet> {
    //     return this.httpService.post("http://localhost:8080/AngularJavaEmp2/api/pets/");
    // }

    addPet(userId: string, pet: Pet){
        let body = JSON.stringify(pet);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        // if(pet.id){
        //     return this.httpService.put("http://localhost:8080/AngularJavaEmp2/api/pets/" + pet.id, body);
        //  }
        //  else{
         return this.httpService.post("http://localhost:8080/api/userpets/"+ userId +"/pets", pet);
        
    

    }

    editPet(petId: number, pet: Pet){
        let body = JSON.stringify(pet);
return this.httpService.put("http://localhost:8080/api/userpets/pets/" + petId, pet);


    }

    editLabResult(labId:number, labResult: LabResult) {

        let body = JSON.stringify(labResult);

        return this.httpService.put("http://localhost:8080/labResult/" + labId, labResult);

    }

    addLabResult(petId: number, labResult: LabResult){
        let body = JSON.stringify(labResult);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.httpService.post("http://localhost:8080/"+ petId +"/labResults", labResult);
    }

    deletePet(petId: number){

        return this.httpService.delete("http://localhost:8080/api/userpets/pets/" + petId);

    }

    deleteLabResult(labResultId: number) {

        return this.httpService.delete("http://localhost:8080/labResult/" +labResultId);

    }

}