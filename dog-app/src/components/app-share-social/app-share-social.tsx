import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-share-social',
  styleUrl: 'app-share-social.css',
  shadow: true,
})
export class AppShareSocial {
  @Prop() dogName: string;
  @Prop() imageUrl: string;


  facebookShare(){
    window.open(`https://facebook.com/sharer.php?u=${this.imageUrl}&t=${encodeURIComponent(`Check out this ${this.dogName}`)}`)
  }

  twitterShare(){
    window.open(`https://twitter.com/intent/tweet?url=${this.imageUrl}&text=${encodeURIComponent(`Check out this ${this.dogName}`)}`)
  }

  render() {
    return (
      <div class="app-share-social">
        <h2 class="share-suggestion">Share this dog</h2>
        <div class="buttons">
          <button onClick={this.facebookShare}><img class="image" src="./assets/icon/facebook_icon.png" alt="facebook icon"></img></button>
          <button onClick={this.twitterShare}><img class="image" src="./assets/icon/twitter_icon.png" alt="twitter icon"></img></button>
        </div>
      </div>
    );
  }

}
