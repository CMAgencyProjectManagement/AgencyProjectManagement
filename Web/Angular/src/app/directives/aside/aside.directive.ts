import {Directive, HostListener} from '@angular/core';
import {NotificationService} from '../../services/notification.service';
import {Cursor, StoreService} from '../../services/tree.service';

/**
 * Allows the aside to be toggled via click.
 */
@Directive({
  selector: '[appAsideMenuToggler]',
})
export class AsideToggleDirective {
  private notificationsCursor: Cursor;

  constructor(private notificationService: NotificationService,
              private storeService: StoreService) {
    this.notificationsCursor = storeService.select(['notifications']);
  }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    let classList = document.querySelector('body').classList;
    classList.toggle('aside-menu-hidden');
    if (!classList.contains('aside-menu-hidden')) {
      this.checkInNotification();
    }
  }

  async checkInNotification() {
    await this.notificationService.checkin();
  }
}
