import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Pet } from './pet.model';
import { PetService } from './pet.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LabResult } from './labResult.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  @Input() pet: Pet;
  @ViewChild('e') labResForm: NgForm;
  showform = false;
  labresults: LabResult[];
  labEl = new LabResult();
  editMode=false;

  constructor(private petService: PetService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    

  this.getPet();

  }

  getPet(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.petService.getPetById(id)
      .subscribe(pet => this.pet = pet);
  }



  submitLabResults(){

    const ig = +this.route.snapshot.paramMap.get('id');
    // const strId = id.toString();
    // const ee = "4";
    this.petService.addLabResult(ig, this.labEl)
    .subscribe((response) => {
      console.log(response);
    });
    this.showform = false;
    // console.log("oirhoirh");

    this.showLabResults();

  }

  onEdit(index:number){

    this.showform = true;
    
    this.petService.getLabById(index)
    .subscribe((labRes) => {this.labEl = labRes});

    this.editMode = true;
    

  }

  submitChanges(index: number){

    this.petService.editLabResult(index, this.labEl)
    .subscribe((response) => {
      console.log(response);
    });

    this.showform = false;
    this.showLabResults();

  }

  showLabResults(){

    const id = +this.route.snapshot.paramMap.get('id');

    this.petService.getLabByPetId(id)
    .subscribe(labs => this.labresults = labs );

  }

  onDelete(){

    const id = +this.route.snapshot.paramMap.get('id');

    this.petService.deletePet(id)
    .subscribe((response) => {
      console.log(response);
    });
    this.router.navigate(['pets']);
    

  }

  onEditItem(){

    const id = +this.route.snapshot.paramMap.get('id');

    this.router.navigate(['pets/edit/'+ id]);

  }

  onDeleteLabs(index: number){

this.petService.deleteLabResult(index)
.subscribe((response) =>{
  console.log(response);
});


  }


}
