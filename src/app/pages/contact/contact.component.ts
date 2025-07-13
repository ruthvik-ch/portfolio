import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Contact, Icons, Links } from 'app/core/models/portfolio.model';
import { PortfolioDataService } from 'app/core/services/portfolio-data.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  links!: Links;
  contact!: Contact;
  icons!: Icons;

  constructor(private portfolioService: PortfolioDataService) {}
  ngOnInit(): void {
    this.portfolioService.getIcons().subscribe((data) => (this.icons = data));
    this.portfolioService.getLinks().subscribe((data) => (this.links = data));
    this.portfolioService
      .getContact()
      .subscribe((data) => (this.contact = data));
  }
}
