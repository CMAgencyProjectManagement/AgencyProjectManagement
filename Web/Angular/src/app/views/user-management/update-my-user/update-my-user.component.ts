import { Component, OnInit } from '@angular/core';
import {BsModalService} from 'ngx-bootstrap';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {ErrorModalComponent} from '../../../cmaComponents/modals';

@Component({
  selector: 'app-update-my-user',
  templateUrl: './update-my-user.component.html',
  styleUrls: ['./update-my-user.component.scss']
})
export class UpdateMyUserComponent implements OnInit {
  userId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private modalService: BsModalService
  ) {
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (Number(id)) {
      this.userId = Number(id);
    } else {
      this.showErrorModal(`${id} is not a valid ID`);
    }
  }

  private showErrorModal(message: string, isNavigateBack: boolean = false) {
    const initialState = {
      closeCallback: () => {
        if (isNavigateBack) {
          this.location.back();
        }
      },
      message: message
    };
    this.modalService.show(ErrorModalComponent, {initialState, class: 'modal-dialog modal-danger'});
  }

}
