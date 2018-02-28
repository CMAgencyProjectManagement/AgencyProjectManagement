import {Injectable} from '@angular/core';
import {Task} from '../interfaces/task';

@Injectable()
export class TaskService {
  get(): Promise<Task[]> {
    return Promise.resolve([
      {id: 1, start_date: '2017-04-15 00:00', text: 'Task #1', progress: 0.6, duration: 3, parent: undefined},
      {id: 2, start_date: '2017-04-18 00:00', text: 'Task #2', progress: 0.4, duration: 3, parent: undefined}
    ]);
  }
}
