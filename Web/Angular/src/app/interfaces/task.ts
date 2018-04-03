import {Project} from './project';
import {List} from './list';

export class Task {
  id: number;
  start_date: string;
  text: string;
  progress: number;
  duration: number;
  parent: number;
  name: string;
  description: string;
  status: number;
  priority: number;
  project: Project;
  list: List;
}
