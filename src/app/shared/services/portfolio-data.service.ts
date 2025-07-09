import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { Project } from '../models/project.model';
import { WorkItem } from '../models/work.model';
import { EducationItem } from '../models/education.model';

interface PortfolioData {
  projects: Project[];
  workExperience: WorkItem[];
  education: EducationItem[];
}

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  private dataUrl = 'assets/data/portfolio-data.json';

  constructor(private http: HttpClient) {}

  getPortfolioData(): Observable<PortfolioData> {
    return this.http.get<PortfolioData>(this.dataUrl);
  }

  getFeaturedProjects(): Observable<Project[]> {
    return this.getPortfolioData().pipe(map((data) => data.projects));
  }

  getWorkExperience(): Observable<WorkItem[]> {
    return this.getPortfolioData().pipe(map((data) => data.workExperience));
  }

  getEducation(): Observable<EducationItem[]> {
    return this.getPortfolioData().pipe(map((data) => data.education));
  }
}
