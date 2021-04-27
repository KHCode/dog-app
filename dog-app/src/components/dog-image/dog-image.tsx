import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'dog-image',
  styleUrl: 'dog-image.css',
  shadow: true,
})
export class DogImage {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
