import { Component, h } from '@stencil/core';

@Component({
  tag: 'chat-menu',
  styleUrl: 'chat-menu.scss'
})
export class ChatMenu {
  render() {
    return [
      <li>
        <span>home_icon</span>
      </li>,
      <hr/>,
      <li>
        <span>search_icon</span>
      </li>,
      <li>
        <span>add_icon</span>
      </li>,
      <li>
        <span>group1_icon</span>
      </li>,
      <li>
        <span>group2_icon</span>
      </li>
    ];
  }
}
