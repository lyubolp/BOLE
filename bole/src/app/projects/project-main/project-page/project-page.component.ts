import { Component, OnInit } from '@angular/core';
import {ProjectCard} from '../../../interfaces/project-card';
import {Project} from '../../../interfaces/project';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  projectName = 'Project-name';
  githubLink = 'https://github.com/';

  darkenPanel: HTMLElement;
  uploadDialog: HTMLElement;
  constructor() { }

  ngOnInit(): void {
    const data: Project = {id: 1, name: 'BOLE', description: 'To learn about recursion, go to recursion',
      dueDate: new Date('2020-06-15'), amountOfMembers: 4, newMessages: 0, colorCode: '#203964',
      github: 'lyubolp/BOLE', cloudStorageId: 1, kanbanBoardId: 1, team_ids: [1, 2, 3, 4], conversation_id: 1};

    this.projectName = data.name;
    this.githubLink += data.github;

    this.darkenPanel = document.getElementById('darken-page');
    this.uploadDialog = document.getElementById('dialog-window');
  }
  toogleUploadDialog(): void {
    if (this.darkenPanel.style.visibility === 'visible') {
      this.darkenPanel.style.visibility = 'hidden';
      this.uploadDialog.style.visibility = 'hidden';
    } else {
      this.darkenPanel.style.visibility = 'visible';
      this.uploadDialog.style.visibility = 'visible';
    }
  }
}
