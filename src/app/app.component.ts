import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service: DataService) {}
  ngOnInit(): void {
    if (!localStorage.getItem('SenderChat')) {
      this.service.getData().subscribe(data => {
          localStorage.setItem('SenderChat', JSON.stringify(data));
      });
    }
    if (!localStorage.getItem('ReceiverChat')) {
      localStorage.setItem('ReceiverChat', '[]');
    }
  }
}
