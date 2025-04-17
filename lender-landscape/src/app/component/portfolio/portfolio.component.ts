import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  imports: [ChartModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  pieData: any;
  pieOptions: any;

  ngOnInit() {
    this.initCharts();
  }

  initCharts() {
    // const documentStyle = getComputedStyle(document.documentElement);
    // const textColor = documentStyle.getPropertyValue('--text-color');

    this.pieData = {
      labels: ['C&I', 'ABL', 'Mortgage'],
      datasets: [
          {
              data: [540, 325, 702],
              // backgroundColor: [documentStyle.getPropertyValue('--p-indigo-500'), documentStyle.getPropertyValue('--p-purple-500'), documentStyle.getPropertyValue('--p-teal-500')],
              // hoverBackgroundColor: [documentStyle.getPropertyValue('--p-indigo-400'), documentStyle.getPropertyValue('--p-purple-400'), documentStyle.getPropertyValue('--p-teal-400')]
          }
      ]
    };
    this.pieOptions = {
      plugins: {
          legend: {
              labels: {
                  usePointStyle: true,
                  // color: textColor
              }
          }
      }
    };
  }
}
