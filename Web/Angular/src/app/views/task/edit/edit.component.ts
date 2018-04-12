import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  taskId: number;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private location: Location
  ) {
  }

  ngOnInit() {
    let id = this.route.firstChild.snapshot.paramMap.get('id');
    if (Number(id)) {
      this.taskId = Number(id);
    }
  }

}
