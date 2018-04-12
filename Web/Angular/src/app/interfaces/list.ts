import {Task} from 'app/interfaces/task';

export interface List {
  id: number,
  name: string,
  tasks: Task[]
}
