import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-image',
  styleUrl: 'app-image.css',
  shadow: true,
})
export class AppImage {

  render() {
    return (
      <div class="app-image"></div>
    );
  }

}
