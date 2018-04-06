import {Project} from './project';
import {List} from './list';
import {User} from './user';

export class Task {
  id: number;
  startDate: string;
  text: string;
  progress: number;
  duration: number;
  parent: number;
  name: string;
  description: string;
  status: number;
  priority: number;
  finishedDate: string;
  createdDate: string;
  changedDate: string;
  createdBy: User;
  changedby: User;
  project: Project;
  assignees: User[];
  list: List;
}
