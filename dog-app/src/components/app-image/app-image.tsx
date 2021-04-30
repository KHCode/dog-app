import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-image',
  styleUrl: 'app-image.css',
  shadow: true,
})
export class AppImage {
  @Prop() dogImage: string;
  @Prop() altText: string;
  componentWillRender() {
    console.log(this.dogImage);
  }
  render() {
    return (
      <div class="app-image">
        <img class="image" src={this.dogImage} alt={this.altText}></img>
      </div>
    );
  }

}
