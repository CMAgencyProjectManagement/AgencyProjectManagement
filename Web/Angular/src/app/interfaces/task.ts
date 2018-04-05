import {Project} from './project';
import {List} from './list';

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
  project: Project;
  list: List;
}
