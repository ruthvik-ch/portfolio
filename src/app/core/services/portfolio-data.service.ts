import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, shareReplay } from 'rxjs';

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
  private cachedPortfolioData$?: Observable<PortfolioData>;

  constructor(private http: HttpClient) {}

  getPortfolioData(): Observable<PortfolioData> {
    if (!this.cachedPortfolioData$) {
      this.cachedPortfolioData$ = this.loadPortfolioData();
    }
    return this.cachedPortfolioData$;
  }

  private loadPortfolioData(): Observable<PortfolioData> {
    return this.http.get<PortfolioData>(this.dataUrl).pipe(
      catchError((error) => {
        console.error('Failed to load portfolio data:', error);
        return this.getDefaultData();
      }),
      shareReplay(1) // Caches the latest emitted value and shares it
    );
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
