import { Component, Host, h } from '@stencil/core';

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
  ]
  select = document.querySelector("select");
  fragment = document.createDocumentFragment();
  
  render() {
    return (
      <div>
        <label htmlFor="dog-select">Select a Dog Breed</label>
        <select>
        </select>
      </div>

    );
  }

}
