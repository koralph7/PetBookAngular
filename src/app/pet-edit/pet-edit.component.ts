import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, NgForm } from '@angular/forms';
import { PetService } from '../pet/pet.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pet } from '../pet/pet.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {
  @ViewChild('f') petForm: NgForm;
  
  // public editMode = false;
  // subscription: Subscription;
  pet = new Pet();
  @Input() peta: Pet;
  @Input() id: number;


  constructor(private route: ActivatedRoute,
    private petService: PetService,
    private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.petService.getPetById(id)
    .subscribe((petInfo) => {this.pet = petInfo});


  }

  // getPets():void {
  //   this.petService.getPets()
  //     .subscribe((petInfo) => {
  //       this.pets = petInfo,
  //       console.log(petInfo)
  //     }, (error) => {
  //       console.log(error)
      
  //     });
  // }
  
  editPet(){

    const id = +this.route.snapshot.paramMap.get('id');
    
    this.petService.editPet(id, this.pet)
    .subscribe((response) => {
      console.log(response);
    });

    this.router.navigate(['pets']);

  }

}
