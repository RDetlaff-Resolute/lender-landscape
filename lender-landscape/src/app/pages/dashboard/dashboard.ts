import { Component } from '@angular/core';
import { TreeComponent } from '../../component/tree/tree.component';
// import { NotificationsWidget } from './components/notificationswidget';
// import { StatsWidget } from './components/statswidget';
// import { RecentSalesWidget } from './components/recentsaleswidget';
// import { BestSellingWidget } from './components/bestsellingwidget';
// import { RevenueStreamWidget } from './components/revenuestreamwidget';

@Component({
    selector: 'app-dashboard',
    imports: [TreeComponent], //[StatsWidget, RecentSalesWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget],
    templateUrl: './dashboard.html'
    
})
export class Dashboard {}
