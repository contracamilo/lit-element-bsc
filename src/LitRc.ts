/* eslint-disable import/extensions */
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import './data-access/GetData';
import { characterType, dataResponseType } from './types';
import styles from './styles/rymStyles';

export class LitRc extends LitElement {
  @property({ type: String }) title: string = 'Rick & Morty wiki';

  @property({ type: String }) wiki: characterType[] = [];

  static styles = [styles];

  constructor() {
    super();

    this.addEventListener('APIdata', (e: any) => {
      this._formatData(e.detail.data);
    });
  }

  _formatData(data: dataResponseType) {
    const characters: characterType[] = [];

    data?.results.forEach((character: any) => {
      characters.push({
        id: character.id,
        img: character.image,
        name: character.name,
        origin: character.origin.name,
      });
    });

    this.wiki = characters;
  }

  render() {
    return html`
      <main>
        <h1>${this.title}</h1>
        <get-data
          id="characters-data"
          url="https://rickandmortyapi.com/api/character"
          method="GET"
        ></get-data>
        ${this.dataTemplate}
      </main>
    `;
  }

  get dataTemplate() {
    return html`
      <section class="grid-container">
        ${this.wiki.map(
          ({ name, img, origin }) => html` <div class="card">
            <div class="card__content">
              <img src="${img}" alt="${name}" />
              <div class="card__text">
                <h3>${name}</h3>
                <p>${origin}</p>
              </div>
            </div>
            <div></div>
          </div>`
        )}
      </section>
    `;
  }
}
