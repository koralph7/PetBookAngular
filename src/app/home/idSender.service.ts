import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class IdSenderService {

  private idSource = new BehaviorSubject(null);
  currentId = this.idSource.asObservable();

  constructor() { }

  changeMessage(userId: string) {
    this.idSource.next(userId)
  }

}