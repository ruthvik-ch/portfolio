import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-work-edu',
  imports: [CommonModule],
  templateUrl: './work-edu.component.html',
  styleUrl: './work-edu.component.scss',
})
export class WorkEduComponent {
  activeTab: 'work' | 'education' = 'work';

  workExperience = [
    {
      company: 'DBS Bank',
      role: 'Graduate Associate (SEED Programme)',
      duration: 'Jul 2023 - Present',
      logo: 'https://lh3.googleusercontent.com/a/ACg8ocKeg8d1pl_Ho7Qr-MXw24E3RZRaPO8cloAq4FJ05yRr-EVFQek=s192-c-rg-br100',
      bullets: [
        'Developed the Java backend for a bank account servicing process with multiple channel integrations using Activiti workflow',
        'Built a custom database migration tool using Python and MariaDB for 1000+ processes',
      ],
    },
    {
      company: 'Singapore Institute of Technology',
      role: 'Software Developer (Contract)',
      duration: 'Apr 2023 - Jun 2023',
      logo: 'https://lh3.googleusercontent.com/a/ACg8ocKeg8d1pl_Ho7Qr-MXw24E3RZRaPO8cloAq4FJ05yRr-EVFQek=s192-c-rg-br100',
      bullets: [
        'Built NFTVue, a NFT gallery website for students to verify event-issued NFTs',
        'Worked on DemoConstruct, a React + Python app that reconstructs 3D models from images',
      ],
      link: { url: 'https://nftvue.com', label: 'NFTVue' },
    },
  ];

  education = [
    {
      institution: 'NUS',
      role: 'Bachelor of Computer Science',
      duration: '2019 - 2023',
      logo: 'https://lh3.googleusercontent.com/a/ACg8ocKeg8d1pl_Ho7Qr-MXw24E3RZRaPO8cloAq4FJ05yRr-EVFQek=s192-c-rg-br100',
      bullets: [
        'Specialized in Software Engineering',
        'Capstone project on decentralized identity management',
      ],
    },
  ];
}
