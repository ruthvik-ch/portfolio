import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import {
  Project,
  WorkExperience,
  Education,
  Links,
  Contact,
  Icons,
} from '../models/portfolio.model';

interface PortfolioData {
  featuredProjects: Project[];
  workExperience: WorkExperience[];
  education: Education[];
  projects: Project[];
  links: Links;
  contact: Contact;
  icons: Icons;
  resume: string;
  summary: string;
}

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  private dataUrl = 'assets/data/portfolio-data.json';
  private cachedData?: PortfolioData;
  constructor(private http: HttpClient) {}

  getPortfolioData(): Observable<PortfolioData> {
    if (this.cachedData) {
      // If cached, return as observable
      return new Observable((observer) => {
        observer.next(this.cachedData!);
        observer.complete();
      });
    }

    // Else fetch from file and cache it
    return this.http.get<PortfolioData>(this.dataUrl).pipe(
      map((data) => {
        this.cachedData = data;
        return data;
      })
    );
  }

  getFeaturedProjects(): Observable<Project[]> {
    return this.getPortfolioData().pipe(map((data) => data.featuredProjects));
  }

  getAllProjects(): Observable<Project[]> {
    return this.getPortfolioData().pipe(map((data) => data.projects));
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

  getIcons(): Observable<Icons> {
    return this.getPortfolioData().pipe(map((data) => data.icons));
  }

  getContact(): Observable<Contact> {
    return this.getPortfolioData().pipe(map((data) => data.contact));
  }

  getResume(): Observable<string> {
    return this.getPortfolioData().pipe(map((data) => data.resume));
  }

  getSummary(): Observable<string> {
    return this.getPortfolioData().pipe(map((data) => data.summary));
  }
}
