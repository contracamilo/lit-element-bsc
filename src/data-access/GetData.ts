import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class GetData extends LitElement {
  @property({ type: String }) url = '';

  @property({ type: String }) method = '';

  firstUpdated(){
    this.getData();
  }

  _sendData(data: any) {
    this.dispatchEvent(
      new CustomEvent('APIdata', {
        detail: { data },
        bubbles: true,
        composed: true,
      })
    );
  }

  getData() {
    fetch(this.url, { method: this.method })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then(data => this._sendData(data))
      .catch(error => `Something went wrong ${error}`);
  }
}

customElements.define('get-data', GetData);
