import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-upload-homework',
  templateUrl: './upload-homework.component.html',
  styleUrls: ['./upload-homework.component.scss']
})
export class UploadHomeworkComponent implements OnInit {
  @Output()
  dialogController: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogController.emit('close-it');
  }

}
