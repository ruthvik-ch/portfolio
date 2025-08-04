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

  // Return a default PortfolioData object with Ruthvik's details as appropriate
  getDefaultData() {
    // Return a default PortfolioData object with Ruthvik's details as appropriate
    return of({
      featuredProjects: [
        {
          title: 'App Space',
          description:
            'App Downloader for mobile. Developed and hosted an App Downloader platform.',
          image: 'assets/images/appstore.webp',
          tags: ['PHP', 'SQL', 'DBMS', 'Bootstrap'],
        },
        {
          title: 'Fire Flixer',
          description:
            'An entertainment Website. Developed and hosted a user friendly, fully functional entertainment website.',
          image: 'assets/images/appstore.webp',
          tags: ['JavaScript', 'TMDB API'],
        },
        {
          title: 'Shoe Mart',
          description:
            'An ecommerce website for shoes. Integrated payment (Razorpay) and shipping (Shiprocket) APIs.',
          image: 'assets/images/appstore.webp',
          tags: ['RazorPay API', 'Shiprocket API', 'PHP', 'MySQL'],
        },
        {
          title: 'Invoicing Software for DigiBros',
          description:
            'Invoicing and inventory management software with expense tracking.',
          image: 'assets/images/appstore.webp',
          tags: ['PHP', 'MySQL', 'Bootstrap'],
        },
        {
          title: 'Chrome Box',
          description:
            'A Chrome Extension for bookmarking and basic productivity tasks.',
          image: 'assets/images/appstore.webp',
          tags: ['JavaScript'],
        },
        {
          title: 'Black Jack',
          description: 'Basic interactive card game using JavaScript.',
          image: 'assets/images/appstore.webp',
          tags: ['HTML', 'CSS', 'JavaScript'],
        },
      ],
      workExperience: [
        {
          company: 'Chubb',
          role: 'Software Developer',
          duration: 'Jul 2023 – Present',
          logo: 'https://logo.clearbit.com/chubb.com',
          bullets: [
            'Played a pivotal role in delivering an award-winning POC – Claims Watch (SRE WATCH), collaborating across roles to build an intuitive UI and backend integration that enabled real-time insights into application reliability and system performance',
            'Led Azure Key Vault migration and addressed critical SonarQube issues to improve code quality and security across services.',
            'Contributed to the upgrade of multiple applications from Legacy Azure App services to latest version Improving performance, security, scalability, supporting smoother CI/CD transitions and improved deployment workflows.',
            'Developed a self-service tool that enabled business teams to manage key config values independently, reducing deployment cycles and developer overhead.',
            'Implemented bulk upload functionality for use cases like user-roles and relations mapping, allowing business teams to execute large-scale operations efficiently via Excel templates.',
            'Collaborated closely with leads and product owners across diverse Lines of Business to deliver high-impact results, achieving over 80% Automated Adjuster Assignment across 5 Lines of Business with a remarkable accuracy rate of 98%.',
            'Mentored freshers across teams, helping them onboard and contribute effectively.',
            'Received Gold Excellence Award for impactful delivery and leadership.',
          ],
        },
        {
          company: 'Chubb',
          role: 'Software Developer Intern',
          duration: 'Aug 2022 – Jun 2023',
          logo: 'https://logo.clearbit.com/chubb.com',
          bullets: [
            'Helped deliver a quick-turnaround dashboard to replace a broken Qlik dashboard, ensuring business teams restoring essential analytics for business continuity.',
            'Gained hands-on experience with software development best practices, agile processes, code reviews, and production systems.',
            'Delivered production-ready features under guidance, actively participating in sprints and releases.',
          ],
        },
        {
          company: 'Digi Bros',
          role: 'Full Stack Developer Intern',
          duration: 'Jan 2022 – Mar 2022',
          logo: 'https://logo.clearbit.com/dailymotion.com',
          bullets: [
            'Built an invoicing system with inventory management using PHP, JS, MySQL, and Bootstrap.',
            'Integrated High Charts API for dynamic sales and inventory dashboards.',
          ],
        },
        {
          company: 'UTest (Remote)',
          role: 'Software Tester',
          duration: 'Apr 2021 – May 2021',
          logo: 'https://logo.clearbit.com/utest.com',
          bullets: [
            'Executed test cases on early-access platforms, submitted structured bug reports.',
          ],
        },
      ],
      education: [
        {
          institution: 'Kakatiya Institute of Technology & Science',
          role: 'B.Tech in Computer Science and Engineering (Networks)',
          duration: '2019 – 2023',
          logo: 'https://logo.clearbit.com/kitsw.ac.in',
          bullets: [],
        },
        {
          institution: 'Narayana Junior College',
          role: 'Intermediate – MPC',
          duration: '2017 – 2019',
          logo: 'https://logo.clearbit.com/narayanagroup.com',
          bullets: [],
        },
        {
          institution: 'Sathupally Vidhyalayam',
          role: 'SSC',
          duration: '2016 – 2017',
          logo: 'assets/images/ss-r-100.webp',
          bullets: [],
        },
      ],
      projects: [
        {
          title: 'App Space',
          description:
            'App Downloader for mobile. Developed and hosted an App Downloader platform.',
          image: 'assets/images/appstore.webp',
          tags: ['PHP', 'SQL', 'DBMS', 'Bootstrap'],
        },
        {
          title: 'Fire Flixer',
          description:
            'An entertainment Website. Developed and hosted a user friendly, fully functional entertainment website.',
          image: 'assets/images/appstore.webp',
          tags: ['JavaScript', 'TMDB API'],
        },
        {
          title: 'Shoe Mart',
          description:
            'An ecommerce website for shoes. Integrated payment (Razorpay) and shipping (Shiprocket) APIs.',
          image: 'assets/images/appstore.webp',
          tags: ['RazorPay API', 'Shiprocket API', 'PHP', 'MySQL'],
        },
        {
          title: 'Invoicing Software for DigiBros',
          description:
            'Invoicing and inventory management software with expense tracking.',
          image: 'assets/images/appstore.webp',
          tags: ['PHP', 'MySQL', 'Bootstrap'],
        },
        {
          title: 'Chrome Box',
          description:
            'A Chrome Extension for bookmarking and basic productivity tasks.',
          image: 'assets/images/appstore.webp',
          tags: ['JavaScript'],
        },
        {
          title: 'Black Jack',
          description: 'Basic interactive card game using JavaScript.',
          image: 'assets/images/appstore.webp',
          tags: ['HTML', 'CSS', 'JavaScript'],
        },
      ],
      links: {
        linkedin: 'https://www.linkedin.com/in/ruthvik-ch',
        github: 'https://github.com/ruthvik-ch',
        portfolio: 'https://ruthvik-ch.github.io/portfolio',
        instagram: 'https://www.instagram.com/ch_ruthvik',
      } as Links,
      contact: {
        name: 'Ruthvik Chennapragada',
        email: 'chennapragadaruthvik@gmail.com',
        phone: '+91-9347813778',
        location: 'Hyderabad, India',
      } as Contact,
      icons: {
        linkedIn: 'assets/images/ss-linkedin-100.webp',
        github: 'assets/images/ss-github-100.webp',
        email: 'assets/images/ss-email-100.webp',
        pdf: 'assets/images/ss-pdf-100.webp',
        instagram: 'assets/images/ss-insta-100.webp',
      } as Icons,
      resume: 'assets/resumes/Ruthvik-Ch-SDE.pdf',
      summary:
        'Full Stack Developer with expertise in Angular, .NET, Spring Boot and Azure. Known for delivering scalable enterprise-grade solutions and leading migrations under tight deadlines.',
      projectReadMeUrl:
        'https://github.com/ruthvik-ch/portfolio/blob/master/README.md',
      heroImageUrl: 'assets/images/rktemp.webp',
    });
  }
}
