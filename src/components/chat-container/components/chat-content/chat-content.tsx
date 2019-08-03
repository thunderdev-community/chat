import { Component, h } from '@stencil/core';

@Component({
  tag: 'chat-content',
  styleUrl: 'chat-content.scss'
})
export class ChatContent {

  render() {
    return [
      <textarea name="" id="" cols={30} rows={35}></textarea>,
      <input type="text"/>,
      <input type="submit"/>
    ];
  }
}
