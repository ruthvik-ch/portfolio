import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from 'app/core/services/portfolio-data.service';
import { WorkExperience, Education } from 'app/core/models/portfolio.model';

@Component({
  selector: 'app-work-edu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-edu.component.html',
  styleUrl: './work-edu.component.scss',
})
export class WorkEduComponent implements OnInit {
  activeTab: 'work' | 'education' = 'work';

  workExperience: WorkExperience[] = [];
  education: Education[] = [];

  constructor(private dataService: PortfolioDataService) {}

  ngOnInit(): void {
    this.dataService.getPortfolioData().subscribe((data) => {
      this.workExperience = data.workExperience || [];
      this.education = data.education || [];
    });
  }
}
