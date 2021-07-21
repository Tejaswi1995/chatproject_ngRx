import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat.component';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ChatDetails } from './state/chat.reducer';

const routes: Routes = [
  {
    path: 'chat',
    component: ChatComponent
  },
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
  { path: 'chat/:id', component: ChatDetailComponent }
];
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('ChatDetails', ChatDetails)
  ],
  declarations: [ChatComponent, ChatDetailComponent]
})
export class ChatModule {}
