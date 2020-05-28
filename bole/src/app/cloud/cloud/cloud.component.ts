import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.scss']
})
export class CloudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name(event) {
    let selectedFileName = event.target.files[0].name;
    document.getElementById("file-name").textContent = selectedFileName;
  }
}
