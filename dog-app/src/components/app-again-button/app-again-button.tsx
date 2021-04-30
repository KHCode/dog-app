import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-again-button',
  styleUrl: 'app-again-button.css',
  shadow: true,
})
export class AppAgainButton {
  @Prop() handleClick: (e: Event) => void;
  @Prop() dogSelected: string;

  render() {
    return (
      <button class="again-button" onClick={this.handleClick} value={this.dogSelected}>Same Breed Again</button>
    );
  }

}
