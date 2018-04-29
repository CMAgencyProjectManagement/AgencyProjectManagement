import {Injectable} from '@angular/core';

declare var require: (moduleId: string) => any;
const Baobab = require('Baobab');

const StoreTree = {
  token: {
    access_token: '',
  },
  currentUser: undefined,
  isWebSocketConnected: false,
  // all user from from server
  users: undefined,
  // all teams from server
  teams: undefined,
  // all projects
  projects: undefined,
  // task detail
  tasksDetail: undefined,
  // notification
  notifications: undefined,
  // enum
  taskPriorities: undefined,
  taskStatuses: undefined,
  projectStatuses: undefined,
  // need update
  needUpdate: {
    notification: {
      userIds: undefined
    },
    task: {
      taskIds: undefined
    }
  }
};

@Injectable()
export class StoreService {
  private store: any;

  constructor() {
    this.store = new Baobab(StoreTree);
  }

  public get(path: string[]): any {
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

  get(path: string[]): any;

  set(value: any): void;

  set(path: string[], value: any): void

  select(path: string[]): Cursor;

  on(event: string, handler: (event) => void): void;
}
