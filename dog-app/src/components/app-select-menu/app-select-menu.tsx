import { Component, Prop, h } from '@stencil/core';
import axios from 'axios';

@Component({
  tag: 'app-select-menu',
  styleUrl: 'app-select-menu.css',
  shadow: true,
})
export class AppSelectMenu {
  @Prop() handleChange: (e: Event) => void;

  dogData = new Map();
  dogList = [];
  numBreeds: number;
  dataResponse;
  subBreeds = [];

  componentWillLoad() {
    return axios.get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        this.dataResponse = response.data.message;
        this.numBreeds = this.dataResponse.length;
        for (const [key, value] of Object.entries(this.dataResponse)) {
          if(!Array.isArray(value) || !value.length) {
            this.dogData.set(key, []);
          } else {
            this.subBreeds = [];
            value.forEach(name => {
              this.subBreeds.push(name);
            })
            this.dogData.set(key, this.subBreeds);
          }
        }
        console.log(this.dogData);
        
        this.dogList = Object.keys(response.data.message);
        console.log(this.dogList);
      });
  }

  render() {
    
    return (
      <div class="dog-select-container">
        <label htmlFor="dog-select">Select a Dog Breed</label>
        <select id="dog-select" onChange={this.handleChange}>
          {this.dogList.map(key =>
            <option value={key}>
              {key}
            </option>
          )}
        </select>
      </div>

    );
  }

}
