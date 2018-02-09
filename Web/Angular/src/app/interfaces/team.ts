import {User} from './user';

export interface Team {
  id: number,
  name: string,
  createdBy: User,
  createdDate: string,
  isClosed: boolean
  manager: User
}
