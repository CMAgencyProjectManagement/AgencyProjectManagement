import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewComponent as ViewTask} from './view/view.component';

const routes: Routes = [
  {
    path: '',
    component: ViewTask,
    data: {
      title: 'Task'
    },
    children: [
      {
        data: {
          title: 'View'
        },
        path: 'view/:id',
        component: ViewTask,
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
