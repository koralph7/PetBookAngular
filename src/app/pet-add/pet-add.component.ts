import { Component, OnInit, ViewChild } from '@angular/core';
import { PetService } from '../pet/pet.service';
import { NgForm } from '@angular/forms';
import { Pet } from '../pet/pet.model';
import { Router } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';
import { AddPetInfo } from './add-pet.info';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {

  @ViewChild('f') petForm: NgForm;
  pets: Pet[];
  pet = new Pet;

  info: any;
  userId = this.token.getId();
 
  
  

  constructor(private token: TokenStorageService ,private petSercvice: PetService, private router: Router) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
      email: this.token.getEmail(),
      
      id: this.token.getId()
  }
  }



  addPet(){
    this.petSercvice.addPet(this.userId,this.pet)
      .subscribe((response) => {
        console.log(response);
      })
             
    this.router.navigate(['pets']);
 

  }

}
