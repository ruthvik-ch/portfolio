import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project } from 'app/core/models/portfolio.model';
import { PortfolioDataService } from 'app/core/services/portfolio-data.service';

@Component({
  selector: 'app-feat-projects',
  imports: [CommonModule],
  templateUrl: './feat-projects.component.html',
  styleUrl: './feat-projects.component.scss',
})
export class FeatProjectsComponent {
  projects: Project[] = [];

  constructor(private dataService: PortfolioDataService) {}

  ngOnInit(): void {
    this.dataService.getFeaturedProjects().subscribe((data) => {
      this.projects = data;
    });
  }
}
