import { WebPlugin } from '@capacitor/core';
import { IntercomPlugin } from './definitions';

export class IntercomWeb extends WebPlugin implements IntercomPlugin {
  constructor() {
    super({
      name: 'Intercom',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const Intercom = new IntercomWeb();

export { Intercom };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Intercom);
