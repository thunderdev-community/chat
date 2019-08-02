import { Component, h } from '@stencil/core';

@Component({
  tag: 'roadmap-list',
  styleUrl: 'roadmap-list.scss'
})
export class RoadMapList {
  render() {
    return [
      <h2>Friend List</h2>,
      <ul>
        <li>
          Example
        </li>
        <li>
          Example
        </li>
        <li>
          Example
        </li>
        <li>
          Example
        </li>
      </ul>
    ];
  }
}
