import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import {
  Project,
  WorkExperience,
  Education,
  Links,
  Contact,
} from '../models/portfolio.model';

interface PortfolioData {
  featuredProjects: Project[];
  workExperience: WorkExperience[];
  education: Education[];
  projects: Project[];
  links: Links;
  contact: Contact;
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
    return this.getPortfolioData().pipe(map((data) => data.featuredProjects));
  }

  getWorkExperience(): Observable<WorkExperience[]> {
    return this.getPortfolioData().pipe(map((data) => data.workExperience));
  }

  getEducation(): Observable<Education[]> {
    return this.getPortfolioData().pipe(map((data) => data.education));
  }

  getLinks(): Observable<Links> {
    return this.getPortfolioData().pipe(map((data) => data.links));
  }

  getContact(): Observable<Contact> {
    return this.getPortfolioData().pipe(map((data) => data.contact));
  }
}
