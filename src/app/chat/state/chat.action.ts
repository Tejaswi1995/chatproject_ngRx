import { createAction, props } from '@ngrx/store';
import { Receiver } from '../chat-detail/receiver';
import { Sender } from '../sender';

export const setSenderChat = createAction(
  '[User] chatDetails',
  props<{ senderChat: Sender }>()
);
export const setReceiverChat = createAction(
  '[User] chatDetails',
  props<{ receiverChat: Receiver }>()
);

export const getSenderChat = createAction('[User] getSenderChat');
