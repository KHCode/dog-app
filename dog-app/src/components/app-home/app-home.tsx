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

  getPicture = (event) => {
    console.log(event.target.value);
    this.dogSelected = event.target.value;
    axios.get(`https://dog.ceo/api/breed/${event.target.value}/images/random`)
      .then(response => {
        console.log(response.data.message);
        this.imgUrl = response.data.message;
        console.log(this.imgUrl);
      });
  }

  render() {
    return (
      <div class="app-home">
        <app-image dogImage={this.imgUrl}></app-image>
        <app-select-menu handleChange={this.getPicture}></app-select-menu>
        <app-again-button dogSelected={this.dogSelected} handleClick={this.getPicture}></app-again-button>
      </div>
    );
  }
}
