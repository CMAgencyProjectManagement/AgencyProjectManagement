import {User} from './user';

export interface Team {
  id: number,
  name: string,
  createdBy: User,
  createdDate: string,
  manager: User,
  users: User[]
}
