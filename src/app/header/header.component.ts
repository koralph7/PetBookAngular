import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private tokenStrorage: TokenStorageService) { }

  ngOnInit() {
  }


  logOut(){

    this.tokenStrorage.signOut();





  }


}
