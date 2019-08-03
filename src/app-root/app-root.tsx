import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
})
export class AppRoot {

  render() {
    return [
      <chat-menu />,
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url='/' component='chat-container' exact={true} />
          <stencil-route url='/road-maps' component='roadmap-list' exact={true} />
        </stencil-route-switch>
      </stencil-router>
    ];
  }
}
