import {Component, OnInit} from '@angular/core';
import {StoreService} from './services/tree.service';
import {UserService} from './services/user.service';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Title} from '@angular/platform-browser';
import 'rxjs/add/operator/map'
import {TaskService} from './services/task.service';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<title>{{title | async}}</title> <router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  tokenCursor;
  title: Observable<string>;

  constructor(
    private storeService: StoreService,
    private userService: UserService,
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private titleService: Title) {
    this.tokenCursor = this.storeService.select(['token', 'access_token'])
  }

  private getDeepestTitle(routeSnapshot: ActivatedRouteSnapshot) {
    var title = routeSnapshot.data ? routeSnapshot.data['title'] : '';
    if (routeSnapshot.firstChild) {
      title = this.getDeepestTitle(routeSnapshot.firstChild) || title;
    }
    return title;
  }

  ngOnInit(): void {
    console.log('AppComponent-ngOnInit');
    let token = this.userService.getLocalToken();
    let user = this.userService.getLocalUser();
    if (token && user) {
      this.tokenCursor.set(token);
      this.storeService.set(['currentUser'], user);
    }

    this.router
      .events
      .filter(event => event instanceof NavigationEnd)
      .map(() => {
        let child = this.activatedRoute.firstChild;
        while (child) {
          if (child.firstChild) {
            child = child.firstChild;
          } else if (child.snapshot.data && child.snapshot.data['title']) {
            return child.snapshot.data['title'];
          } else {
            return null;
          }
        }
        return null;
      }).subscribe((title: any) => {
      this.titleService.setTitle(title);
    });
  }

}
