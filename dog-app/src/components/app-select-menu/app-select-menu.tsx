import { Component, h } from '@stencil/core';
import axios from 'axios';

@Component({
  tag: 'app-select-menu',
  styleUrl: 'app-select-menu.css',
  shadow: true,
})
export class AppSelectMenu {
  dogBreeds = [
    "labrador",
    "pitbull",
    "cocker spaniel",
    "retriever",
    "bloodhound",
    "australian shephard"
  ];

  // breedsList = Object.keys(this.dogBreeds).map(key => ({name: key}));
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
        // this.dogList = [...this.dogData.keys()];
        
        this.dogList = Object.keys(response.data.message);
        console.log(this.dogList);
      });
  }

  getPicture = (event) => {
    console.log(event.target.value);
    axios.get(`https://dog.ceo/api/breed/${event.target.value}/images/random`)
      .then(response => {
        console.log(response.data.message);
      });
  }

  render() {
    
    return (
      <div>
        <label htmlFor="dog-select">Select a Dog Breed</label>
        <select id="dog-select" onChange={(e) => this.getPicture(e)}>
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
