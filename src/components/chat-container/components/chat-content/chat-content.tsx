import { Component, h } from '@stencil/core';

@Component({
  tag: 'chat-content',
  styleUrl: 'chat-content.scss'
})
export class ChatContent {

  render() {
    return [
      <h2>Example</h2>,
      <textarea name="" id="" cols={30} rows={10}></textarea>,
      <input type="text"/>,
      <input type="submit"/>
    ];
  }
}
