import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "Vellore Institute of Technology",
      course: 'B.Tech',
      duration: '2020-2024',
      location: 'Vellore',
    },
    {
      institute: 'Sadhana PU College',
      course: '12th',
      duration: '2018-2020',
      location: 'BLR',
    },
    {
      institute: 'National Hill View Public School',
      course: '10th',
      duration: '2011-2018',
      location: 'BLR',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
