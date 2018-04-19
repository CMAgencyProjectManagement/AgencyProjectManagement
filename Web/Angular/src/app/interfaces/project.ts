import {User} from './user';
import {List} from './list';
import {Team} from './team';

export interface Project {
  id: number,
  name: string,
  description: string,
  deadline: string,
  createdTime: string,
  createdBy: User,
  startDate: string,
  changedBy: User,
  changedTime: string,
  status: number,
  lists: List[],
  teams: Team[],
  assignees: User[]
}
