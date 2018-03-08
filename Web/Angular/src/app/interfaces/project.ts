import {User} from './user';

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
  status: number
}
