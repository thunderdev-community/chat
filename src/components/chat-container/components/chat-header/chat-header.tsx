import { Component, h } from '@stencil/core';

@Component({
  tag: 'chat-header',
  styleUrl: 'chat-header.scss'
})
export class ChatHeader {
  render() {
    return [
      <h2>
        Chat_header_example
      </h2>
    ];
  }
}
