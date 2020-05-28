import {AfterViewInit, Component,  ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})

export class CodeEditorComponent implements AfterViewInit {
  options = { theme: 'vs-dark', language: 'javascript' };
  code: string = 'function x() {\n\tconsole.log("Hello world!");\n}';
  isDropDownActive = false;

  @ViewChild('editor') editorContent: ElementRef;

  ngAfterViewInit() {
  }

  showDropDown(e): void {
    if (this.isDropDownActive) {
      this.isDropDownActive = false;

      const dropDownDom: HTMLElement = document.getElementById('dropdown');
      dropDownDom.style.display = 'none';

    } else {
      this.isDropDownActive = true;
      let leftPos = 0;

      if (e.target.textContent === 'Редактиране') {
        leftPos = 40;
      } else if (e.target.textContent === 'Изглед') {
        leftPos = 60;
      } else if (e.target.textContent === 'Изпълнение') {
        leftPos = 80;
      } else {
        leftPos = 0;
      }

      const dropDownDom: HTMLElement = document.getElementById('dropdown');
      dropDownDom.style.display = 'block';
      dropDownDom.style.position = 'absolute';
      dropDownDom.style.top = '12.5%';
      dropDownDom.style.left = leftPos + '%';
    }


  }
}
