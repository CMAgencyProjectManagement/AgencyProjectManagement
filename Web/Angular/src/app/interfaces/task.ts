import {Project} from './project';
import {List} from './list';
import {User} from './user';
import {Comment} from './comment';

export class Task {
  id: number;
  startDate: string;
  text: string;
  progress: number;
  duration: number;
  deadline: string;
  parent: number;
  name: string;
  description: string;
  status: number;
  priority: number;
  finishedDate: string;
  createdDate: string;
  changedDate: string;
  createdBy: User;
  changedBy: User;
  project: Project;
  assignees: User[];
  list: List;
  comments: Comment[];
  effort: number;
  isArchived: boolean;
}
