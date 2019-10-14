import { Component, OnInit, ViewChild } from '@angular/core';
import { Pet } from '../pet/pet.model';
import { Subscription } from 'rxjs';
import { PetService } from '../pet/pet.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { IdSenderService } from '../home/idSender.service';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-pet-list',
  template: '{{userId}}',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  
  pets: Pet[];

  info: any;
  userId = this.token.getId();
  
subscription: Subscription;
  constructor(private petService: PetService,private token: TokenStorageService,
     private idSender: IdSenderService, private router: Router, private route: ActivatedRoute) { }

  

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
      email: this.token.getEmail(),
      
      id: this.token.getId(),
      
    }
    
    this.getPets();
    this.router.navigate([this.router.url]);
    // this.idSender.currentId.subscribe(userId => this.userId = userId)

  
  }
 
  getPets(): void {
    this.petService.getPets(this.userId)
    .subscribe(pets => this.pets = pets);
  
}

onAdd(){
  this.router.navigate(['add']);
}
    

  
  
}
