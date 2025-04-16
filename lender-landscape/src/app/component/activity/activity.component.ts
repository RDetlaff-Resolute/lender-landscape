import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';


@Component({
  selector: 'app-activity',
  imports: [TimelineModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent {
  events: any[] = [];

  ngOnInit() {
    this.events = [
      {
        status: 'Phone call',
        date: '4/14/2025',
        icon: 'pi pi-phone',
        color: '#9C27B0',
        image: 'game-controller.jpg'
    },
    {
        status: 'Processing',
        date: '4/10/2025',
        icon: 'pi pi-cog',
        color: '#673AB7'
    },
    {
        status: 'Email sent',
        date: '4/9/2025',
        icon: 'pi pi-envelope',
        color: '#FF9800'
    },
    {
        status: 'Engaged',
        date: '3/31/2025',
        icon: 'pi pi-check',
        color: '#607D8B'
    }
    ]
  }
}
