import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Pranav Hiremath'],
    ['DOB', '16/04/2002'],
    ['Education', 'B.Tech (2020-2024)'],
    ['College', 'VIT Vellore'],
    ['Interests', 'Badminton'],
  ];

  aboutMe: string[] = [
    'Hello there, and welcome to my corner of the digital universe! I am thrilled to have you here.',
    'I am Pranav, a passionate and dedicated Web Developer with a strong desire to create, innovate, and make a positive impact.',
    'Through this platform, I am excited to share my journey, skills, and experiences with you.',
    'Currently, working on projects related Angular and ASP.NET',
  ];

  constructor() {}

  ngOnInit(): void {}
}
