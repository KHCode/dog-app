import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-again-button',
  styleUrl: 'app-again-button.css',
  shadow: true,
})
export class AppAgainButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
