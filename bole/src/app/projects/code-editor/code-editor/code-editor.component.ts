import {AfterViewInit, Component,  ElementRef, ViewChild} from '@angular/core';

declare const monaco: any;

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})

export class CodeEditorComponent implements AfterViewInit {
  @ViewChild('editor') editorContent: ElementRef;

  ngAfterViewInit() {
  }
}
