import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Contact, Links } from 'app/core/models/portfolio.model';
import { PortfolioDataService } from 'app/core/services/portfolio-data.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  links!: Links;
  contact!: Contact;

  constructor(private portfolioService: PortfolioDataService) {}
  ngOnInit(): void {
    this.portfolioService.getLinks().subscribe((data) => (this.links = data));
    this.portfolioService
      .getContact()
      .subscribe((data) => (this.contact = data));
  }
}
