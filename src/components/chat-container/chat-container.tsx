import { Component, h} from '@stencil/core';

@Component({
  tag: 'chat-container',
  styleUrl: 'chat-container.scss',
})
export class ChatContainer {

  render() {
    return [
      <chat-header />,
      <chat-content />,
      <roadmap-info />
    ];
  }
}
