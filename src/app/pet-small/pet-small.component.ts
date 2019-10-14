import { Component, OnInit, Input } from '@angular/core';
import { Pet } from '../pet/pet.model';

@Component({
  selector: 'app-pet-small',
  templateUrl: './pet-small.component.html',
  styleUrls: ['./pet-small.component.css']
})
export class PetSmallComponent implements OnInit {
@Input() pet: Pet;
@Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
