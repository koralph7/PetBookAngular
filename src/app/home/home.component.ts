import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { IdSenderService } from './idSender.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  info: any;
  userId = this.token.getId()

  constructor(private token: TokenStorageService, private idSender: IdSenderService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
      email: this.token.getEmail(),
      id: this.token.getId()
    };
    
    this.idSender.changeMessage(this.userId);
    this.idSender.currentId.subscribe(userId => this.userId = userId);
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
