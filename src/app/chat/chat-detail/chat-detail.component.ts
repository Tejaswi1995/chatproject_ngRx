import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { DataService } from '../../data.service';
import { Sender } from '../sender';
import { Receiver } from './receiver';
import { Store, State } from '@ngrx/store';
import { ChatAction } from '../state';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-chart-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.css']
})
export class ChatDetailComponent implements OnInit {
  id: string;
  chat: Sender;
  chatReciever: any=null;
  recieverChat: Receiver =null;
  msgForm = new FormGroup({
    inputMsg: new FormControl('')
  });
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private store: Store<State>
  ) {}

  ngOnInit() {
     this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.store.select('ChatDetails').subscribe(data => {
        this.chat =data.senderChat?.filter(chat => chat.id == this.id)[0];
        this.chatReciever = data.receiverChat?.filter(chat => chat.id == this.id);
      });
    });


  }
  back() {
    this.route.navigate(['/chat']);
  }
  saveMsg() {
    this.recieverChat = {
      id: this.id,
      content: this.msgForm.value.inputMsg,
      date: new Date()
    };
    this.store.dispatch(ChatAction.setReceiverChat({ receiverChat: this.recieverChat })
    );
    this.msgForm.reset();
  }
}
