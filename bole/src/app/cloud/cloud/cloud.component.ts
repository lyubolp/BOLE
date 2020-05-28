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

  uploadItem(event) {
    console.log(event);
    let selectedFileName = event.target.files[0].name;
    let selectedFileType = event.target.files[0].type;
    if(selectedFileType.includes("image")) {
      this.showRegularFile(selectedFileName, "#f5f12d");
    }
    if(selectedFileType.includes("text")) {
      this.showRegularFile(selectedFileName, "#0B35DE"); 
    }
    if(selectedFileType.includes("pdf")) {
      this.showRegularFile(selectedFileName, "#A70E0E");
    }
    if(selectedFileType.includes("zip") || selectedFileType.includes("rar") || selectedFileType.includes("tar")) {
      this.showArchiveFile(selectedFileName, "#1EA295");
    }
  }

  showRegularFile(selectedFileName, color){
    var panel = document.getElementById("file-item-panel");

    var div_tag = document.createElement("div");
    div_tag.className = "file-item";
    div_tag.setAttribute("style", "margin:0.5%;align-items:center;text-align:center;width:70px;height: 90px;");
    
    var svg_tag = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg_tag.setAttribute("width", "60");
    svg_tag.setAttribute("height", "60");
    svg_tag.setAttribute("viewBox", "0 0 24 24");

    var path_tag1 = document.createElementNS('http://www.w3.org/2000/svg', "path");
    path_tag1.setAttribute("d", "M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z");
    path_tag1.setAttribute("fill", color);

    var path_tag2 = document.createElementNS('http://www.w3.org/2000/svg',"path");
    path_tag2.setAttribute("d", "M0 0h24v24H0z");
    path_tag2.setAttribute("fill", "none");

    var h6_tag = document.createElement("h6");
    h6_tag.textContent = selectedFileName;
    h6_tag.setAttribute("style", "align-self:center;max-width:70px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;")

    svg_tag.appendChild(path_tag1);
    svg_tag.appendChild(path_tag2);      

    div_tag.appendChild(svg_tag);
    div_tag.appendChild(h6_tag);

    panel.appendChild(div_tag);
  }

  showArchiveFile(selectedFileName, color){
    var panel = document.getElementById("file-item-panel");

    var div_tag = document.createElement("div");
    div_tag.className = "file-item";
    div_tag.setAttribute("style", "margin:0.5%;align-items:center;text-align:center;width:70px;height: 90px;");
    
    var svg_tag = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg_tag.setAttribute("width", "60");
    svg_tag.setAttribute("height", "60");
    svg_tag.setAttribute("viewBox", "0 0 24 24");

    var path_tag1 = document.createElementNS('http://www.w3.org/2000/svg', "path");
    path_tag1.setAttribute("d", "M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z");
    path_tag1.setAttribute("fill", color);

    var path_tag2 = document.createElementNS('http://www.w3.org/2000/svg',"path");
    path_tag2.setAttribute("d", "M0 0h24v24H0z");
    path_tag2.setAttribute("fill", "none");

    var h6_tag = document.createElement("h6");
    h6_tag.textContent = selectedFileName;
    h6_tag.setAttribute("style", "align-self:center;max-width:70px;text-overflow:ellipsis;overflow:hidden;")

    svg_tag.appendChild(path_tag1);
    svg_tag.appendChild(path_tag2);      

    div_tag.appendChild(svg_tag);
    div_tag.appendChild(h6_tag);

    panel.appendChild(div_tag);
  }
}


