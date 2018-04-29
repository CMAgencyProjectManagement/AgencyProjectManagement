import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewComponent as ViewTask} from './view/view.component';
import {EditComponent as EditTask} from './edit/edit.component';
import {AddComponent as CreateTask} from './add/add.component';
import {MyTasksComponent} from './my-tasks/my-tasks.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Task'
    },
    children: [
      {
        data: {
          title: 'View task'
        },
        path: ':id/view',
        component: ViewTask,
      },
      {
        data: {
          title: "View task's detail"
        },
        path: ':id/detail',
        component: ViewTask,
      },
      {
        data: {
          title: 'View tasks'
        },
        path: 'view',
        component: ViewTask,
      },
      {
        data: {
          title: 'Update task'
        },
        path: 'edit/:id',
        component: EditTask,
      },
      {
        data: {
          title: 'Create task'
        },
        path: 'create',
        component: CreateTask,
      },
      {
        data: {
          title: 'My tasks'
        },
        path: 'mytasks',
        component: MyTasksComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TaskRoutingModule {
}
