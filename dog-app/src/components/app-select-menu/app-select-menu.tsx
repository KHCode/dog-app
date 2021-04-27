import { Component, Host, h, Fragment } from '@stencil/core';

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

  breedsList = Object.keys(this.dogBreeds).map(key => ({name: key}));

  render() {
    return (
      <div>
        <label htmlFor="dog-select">Select a Dog Breed</label>
        <select>
          {this.dogBreeds.map((breed) => (
            <option value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>

    );
  }

}
