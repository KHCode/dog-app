import { Component, h, State, Listen } from '@stencil/core';
import axios from 'axios';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  @State() imgUrl: string;
  @State() dogSelected: string;
  dogName: string;
  capitalName: string;
  getPicture = (event) => {
    this.dogSelected = event.target.value;
    axios.get(`https://dog.ceo/api/breed/${event.target.value}/images/random`)
      .then(response => {
        this.imgUrl = response.data.message;
      });
  }

  facebookShare(event){
    this.dogName = event.currentTarget.dataset.name
    this.capitalName = this.dogName.charAt(0).toUpperCase() + this.dogName.slice(1)
    window.open(`https://facebook.com/sharer.php?u=${event.currentTarget.dataset.url}`)
  }

  twitterShare(event){
    this.dogName = event.currentTarget.dataset.name
    this.capitalName = this.dogName.charAt(0).toUpperCase() + this.dogName.slice(1)
    window.open(`https://twitter.com/intent/tweet?url=${event.currentTarget.dataset.url}&text=${encodeURIComponent(`Check out this ${this.capitalName}`)}`)
  }


  render() {
    return (
      <div class="app-home">
        {this.imgUrl ? <app-image dogImage={this.imgUrl} altText={this.dogSelected}></app-image> : <app-on-load></app-on-load>}
        <app-select-menu handleChange={this.getPicture}></app-select-menu>
        <app-again-button dogSelected={this.dogSelected} handleClick={this.getPicture}></app-again-button>
        <app-share-social handleFbClick={this.facebookShare} handleTwClick={this.twitterShare} dogName={this.dogSelected} imageUrl={this.imgUrl}></app-share-social>
      </div>
    );
  }
}
