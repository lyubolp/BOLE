import {AfterViewInit, Component,  ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})

export class CodeEditorComponent implements AfterViewInit {
  options = { theme: 'vs-dark', language: 'javascript' };
  code: string = 'function x() {\n\tconsole.log("Hello world!");\n}';

  @ViewChild('editor') editorContent: ElementRef;

  ngAfterViewInit() {
  }
}
