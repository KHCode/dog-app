import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-share-social',
  styleUrl: 'app-share-social.css',
  shadow: true,
})
export class AppShareSocial {
  @Prop() dogName: string;
  @Prop() imageUrl: string;
  @Prop() handleFbClick: (e: Event) => void;
  @Prop() handleTwClick: (e: Event) => void;

  render() {
    return (
      <div class="app-share-social">
        <h2 class="share-suggestion">Share this dog</h2>
        <div class="buttons">
          <button onClick={this.handleFbClick} data-url={this.imageUrl} data-name={this.dogName}><img class="image" src="./assets/icon/facebook_icon.png" alt="facebook icon"></img></button>
          <button onClick={this.handleTwClick} data-url={this.imageUrl} data-name={this.dogName}><img class="image" src="./assets/icon/twitter_icon.png" alt="twitter icon"></img></button>
        </div>
      </div>
    );
  }

}
