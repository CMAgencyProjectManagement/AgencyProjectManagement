import {User} from './user';

export class Dependency {
  id: number;
  sourceTaskID: number;
  destinationTaskID: number;
  createdBy: User;
  createdByID: User;
  createdTime: string;
}
