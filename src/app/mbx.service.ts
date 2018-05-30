import { buildUrl } from 'build-url';

export class MBX {
  url: String;

  constructor(url: String) {
    this.url = url;
  }

  get(options: Object) {
    return <String>buildUrl(this.url, options);
  }

}
