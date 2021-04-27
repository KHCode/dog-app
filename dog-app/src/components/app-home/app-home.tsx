import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <h1>This is the app after I cleaned out the stencil defaults</h1>
        <app-image> I dont know </app-image>
      </div>
    );
  }
}
