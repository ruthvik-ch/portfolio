import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

import {
  PortfolioData,
  Project,
  WorkExperience,
  Education,
  Links,
  Contact,
  Icons,
} from '../models/portfolio.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  private dataUrl = 'assets/data/portfolio-data.json';
  private cachedData?: PortfolioData;
  constructor(private http: HttpClient) {}

  getPortfolioData(): Observable<PortfolioData> {
    try {
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
    } catch (error) {
      return this.getDefaultData();
    }
  }

  getDefaultData() {
    // Return a default PortfolioData object with Ruthvik's details as appropriate
    return of({
      featuredProjects: [],
      workExperience: [],
      education: [],
      projects: [],
      links: {} as Links,
      contact: {} as Contact,
      icons: {} as Icons,
      resume: '',
      summary: '',
      projectReadMeUrl: '',
      heroImageUrl: '',
    });
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

  getReadMeUrl(): Observable<string> {
    return this.getPortfolioData().pipe(map((data) => data.projectReadMeUrl));
  }

  getHeroImageUrl(): Observable<string> {
    return this.getPortfolioData().pipe(map((data) => data.heroImageUrl));
  }
}
