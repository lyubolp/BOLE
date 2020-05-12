import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-team-dialog',
  templateUrl: './team-dialog.component.html',
  styleUrls: ['./team-dialog.component.scss']
})
export class TeamDialogComponent implements OnInit {
  @Output()
  dialogController: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialogController.emit('close-it');
  }

}
