import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Contact, Icons, Links } from 'app/core/models/portfolio.model';
import { PortfolioDataService } from 'app/core/services/portfolio-data.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  links!: Links;
  contact!: Contact;
  icons!: Icons;
  projectReadMeUrl!: string;

  constructor(private portfolioService: PortfolioDataService) {}
  ngOnInit(): void {
    this.portfolioService.getIcons().subscribe((data) => (this.icons = data));
    this.portfolioService.getLinks().subscribe((data) => (this.links = data));
    this.portfolioService
      .getReadMeUrl()
      .subscribe((data) => (this.projectReadMeUrl = data));
    this.portfolioService
      .getContact()
      .subscribe((data) => (this.contact = data));
  }
}
