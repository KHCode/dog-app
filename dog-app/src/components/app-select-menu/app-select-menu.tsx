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
  dogData;
  componentWillLoad() {
    return axios.get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        console.log(Object.keys(response.data.message));
        this.dogData = Object.keys(response.data.message);
      });
  }

  render() {
    return (
      <div>
        <label htmlFor="dog-select">Select a Dog Breed</label>
        <select>
          {this.dogData.map((breed) => (
            <option value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>

    );
  }

}
