import {User} from './user';

class CheckList {
  id: number;
  name: string;
  taskId: number;
  createdById: number;
  createdTime: string;
  createdBy: User;
  changedById: number;
  changedBy: User;
  changedTime: string;
  items: CheckListItem[];
}

class CheckListItem {
  id: number;
  name: string;
  isChecked: boolean;
}

export {CheckList, CheckListItem}
