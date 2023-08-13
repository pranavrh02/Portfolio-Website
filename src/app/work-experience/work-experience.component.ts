import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Software Developer Intern',
      company: 'Mphasis',
      duration: 'June 2023 - July 2023 | Onsite',
      description: [
        'Worked to expand labs.waters.com Website.',
        'Provided a virtual tour of lab using Unity 3D software',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
