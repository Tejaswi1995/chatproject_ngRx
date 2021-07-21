import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataService } from '../data.service';
import { Sender } from './sender';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-chats',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chats$: Observable<Sender[]>;
  chats: Sender[];
  constructor(private dataService: DataService, private store: Store<any>) {}

  ngOnInit() {
    this.store.select('ChatDetails').subscribe(data => {
      this.chats$ = data.senderChat
        ? of(data.senderChat)
        : this.dataService.getData();
    });
  }
}
