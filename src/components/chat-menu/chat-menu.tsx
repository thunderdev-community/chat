import { Component, h } from '@stencil/core';

@Component({
  tag: 'chat-menu',
  styleUrl: 'chat-menu.scss'
})
export class ChatMenu {
  render() {
    return [
      <li>
        <span></span>
      </li>,
      <li>
        <span></span>
      </li>,
      <li>
        <span></span>
      </li>,
      <li>
        <span></span>
      </li>,
      <li>
        <span></span>
      </li>
    ];
  }
}
