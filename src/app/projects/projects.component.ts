import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'The Virtual Lab Prototype',
      technologies: 'Angular,RESTful API,Microsoft SQL server, Unity 3D',
      description: [
        'Worked as a team member in Waters Corporation Bangalore location.',
        'Made a virtual tour of the lab using Unity 3D software.',
        'Was part of team to expand the website.',
      ],
    },
    {
      title: 'Employee Management System',
      technologies: 'Angular 13,Json-server,Bootstrap 5',
      description: [
        'Perform CRUD operations on the employees data',
        'For backend I have used Json-server which gives fake api for small applications.',
        'I have also used Bootstrap 5 for this project.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
