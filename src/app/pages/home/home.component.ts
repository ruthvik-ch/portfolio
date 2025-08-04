import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimeService } from 'app/core/services/time.service';
import { CommonModule } from '@angular/common';
import { FeatProjectsComponent } from './feat-projects/feat-projects.component';
import { WorkEduComponent } from './work-edu/work-edu.component';
import { Contact, Icons, Links } from 'app/core/models/portfolio.model';
import { PortfolioDataService } from 'app/core/services/portfolio-data.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, WorkEduComponent, FeatProjectsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
})
export class HomeComponent implements OnDestroy, OnInit {
  age: number;
  fullAge: string = '';
  isHovering: boolean = false;
  private timerId: any;

  links!: Links;
  contact!: Contact;
  icons!: Icons;
  resumeLink!: string;
  summary!: string;
  heroImageUrl!: string;

  constructor(
    private timeService: TimeService,
    private portfolioService: PortfolioDataService
  ) {
    this.age = this.timeService.getAge();
  }

  ngOnInit(): void {
    this.portfolioService
      .getResume()
      .subscribe((data) => (this.resumeLink = data));
    this.portfolioService.getIcons().subscribe((data) => (this.icons = data));
    this.portfolioService.getLinks().subscribe((data) => (this.links = data));
    this.portfolioService
      .getSummary()
      .subscribe((data) => (this.summary = data));

    this.portfolioService
      .getContact()
      .subscribe((data) => (this.contact = data));
    this.portfolioService
      .getHeroImageUrl()
      .subscribe((data) => (this.heroImageUrl = data));
  }

  onHoverStart() {
    this.isHovering = true;
    this.updateDetailedAge(); // immediate show
    this.timerId = setInterval(() => {
      this.updateDetailedAge();
    }, 1000);
  }

  onHoverEnd() {
    this.isHovering = false;
    clearInterval(this.timerId);
  }

  private updateDetailedAge() {
    this.fullAge = this.timeService.getDetailedAge();
  }

  ngOnDestroy(): void {
    this.onHoverEnd(); // cleanup
  }
}
