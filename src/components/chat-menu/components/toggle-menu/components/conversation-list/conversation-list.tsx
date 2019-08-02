import { Component, h } from '@stencil/core';

@Component({
  tag: 'conversation-list',
  styleUrl: 'conversation-list.scss'
})
export class ConversationList {
  render() {
    return [
      <h2>Conversations</h2>,
      <ul>
        <li class="chat__conversation">
          Example
        </li>
        <li class="chat__conversation">
          Example
        </li>
        <li class="chat__conversation">
          Example
        </li>
        <li class="chat__conversation">
          Example
        </li>
      </ul>
    ];
  }
}
