import {Injectable} from '@angular/core';
import {Dependency} from '../interfaces/dependency';

@Injectable()
export class DependencyService {
  get(): Promise<Dependency[]> {
    return Promise.resolve([
      {id: 1, source: 1, target: 2, type: '0'}
    ]);
  }
}
