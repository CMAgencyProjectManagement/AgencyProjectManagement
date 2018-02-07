import {Injectable} from '@angular/core';
import {StoreService} from './tree.service';


@Injectable()
export class ProjectService {
  private tokenCursor;

  constructor(private store: StoreService) {
    this.tokenCursor = this.store.select(['token', 'access_token'])
  }

}
