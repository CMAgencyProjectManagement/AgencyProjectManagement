import {User} from './user';
import {Task} from './task';

export class Comment {
  ID: number;
  body: string;
  taskID: number;
  changedByID: number;
  changedTime: string;
  createdByID: number;
  createdTime: string;
  createdBy: User;
  changedBy: User;
  task: Task;
}
