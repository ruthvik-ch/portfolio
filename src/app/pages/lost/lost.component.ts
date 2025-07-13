import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lost',
  imports: [CommonModule, RouterModule],
  templateUrl: './lost.component.html',
  styleUrl: './lost.component.scss',
})
export class LostComponent {}
