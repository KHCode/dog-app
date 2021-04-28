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
  numBreeds;
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
        // this.dogData = Object.keys(response.data.message);
      });
  }

  render() {
    return (
      <div>
        <label htmlFor="dog-select">Select a Dog Breed</label>
        <select>
          {this.dogData.forEach((breed) => (
            <option value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>

    );
  }

}
