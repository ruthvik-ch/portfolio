import { Component, OnDestroy } from '@angular/core';
import { TimeService } from '../../../app/core/services/time.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
})
export class HomeComponent implements OnDestroy {
  age: number;
  fullAge: string = '';
  isHovering: boolean = false;
  private timerId: any;

  constructor(private timeService: TimeService) {
    this.age = this.timeService.getAge();
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
