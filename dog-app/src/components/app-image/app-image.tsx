import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'app-image',
  styleUrl: 'app-image.css',
  shadow: true,
})
export class AppImage {
  @Prop() dogImage: string;
  componentWillRender() {
    console.log(this.dogImage);
  }
  render() {
    return (
      <div class="app-image">
        <img class="image" src={this.dogImage} alt="dog"></img>
      </div>
    );
  }

}
