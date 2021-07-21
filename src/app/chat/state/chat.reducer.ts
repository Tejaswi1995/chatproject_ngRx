import { Action, createAction, createReducer, on, State } from '@ngrx/store';
import { of } from 'rxjs/dist/types';
import { ChatAction } from '.';
import { Receiver } from '../chat-detail/receiver';
import { Sender } from '../sender';

export interface ChatState {
  senderChat: Sender;
  receiverChat: Receiver[];
}
const initialState: ChatState = {
  senderChat: JSON.parse(localStorage.getItem('SenderChat')),
  receiverChat: JSON.parse(localStorage.getItem('ReceiverChat'))
};
export const ChatDetails = createReducer(
  initialState,
  on(
    ChatAction.setReceiverChat,
    (state, action): ChatState => {
      localStorage.setItem(
        'ReceiverChat',
        JSON.stringify([...state.receiverChat, action.receiverChat])
      );
      return {
        ...state,
        receiverChat: [...state.receiverChat, action.receiverChat]
      };
    }
  )
);
