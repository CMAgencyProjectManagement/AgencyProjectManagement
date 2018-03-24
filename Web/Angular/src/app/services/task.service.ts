import {Injectable} from '@angular/core';
import {Task} from '../interfaces/task';

@Injectable()
export class TaskService {
  get(): Promise<Task[]> {
    return Promise.resolve([]);
  }
}
