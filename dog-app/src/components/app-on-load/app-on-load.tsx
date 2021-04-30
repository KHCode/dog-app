import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-on-load',
  styleUrl: 'app-on-load.css',
  shadow: true,
})
export class AppOnLoad {

  render() {
    return (
      <div class="app-on-load">
        <h1>Get Started</h1>
        <img class="arrow-down" src="./assets/icon/arrow-down.svg" alt="arrow pointing down"/>
      </div>
    );
  }

}
