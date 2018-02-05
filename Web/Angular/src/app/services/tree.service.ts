import {Injectable} from '@angular/core';

declare var require: (moduleId: string) => any;
const Baobab = require('Baobab');

const StoreTree = {
  currentUser: undefined,
};

@Injectable()
export class StoreService {
  private store: any;

  constructor() {
    this.store = new Baobab(StoreTree);
  }

  public get(path: string[]): Cursor {
    return this.store.get(path);
  }

  public set(path: string[], value: any): Cursor {
    return this.store.set(path, value);
  }

  public select(path: string[]): Cursor {
    return this.store.select(path);
  }
}

export interface Cursor {
  get(): any;

  set(value: any): void;

  select(path: string[]): Cursor;

  on(event: string, handler: (event) => void): void;
}
