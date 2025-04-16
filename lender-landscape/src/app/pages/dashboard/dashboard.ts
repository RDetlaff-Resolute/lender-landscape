import { Component, inject } from '@angular/core';
import { TreeComponent } from '../../component/tree/tree.component';
import { AvatarModule } from 'primeng/avatar';
// import { NotificationsWidget } from './components/notificationswidget';
// import { StatsWidget } from './components/statswidget';
// import { RecentSalesWidget } from './components/recentsaleswidget';
// import { BestSellingWidget } from './components/bestsellingwidget';
// import { RevenueStreamWidget } from './components/revenuestreamwidget';
import { DividerModule } from 'primeng/divider';
import { ActivityComponent } from '../../component/activity/activity.component';
import { NotesComponent } from '../../component/notes/notes.component';
import { PortfolioComponent } from '../../component/portfolio/portfolio.component';
import { ContactService } from '../../services/contact.service';

@Component({
    selector: 'app-dashboard',
    imports: [TreeComponent, DividerModule, AvatarModule, ActivityComponent, NotesComponent, PortfolioComponent], //[StatsWidget, RecentSalesWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget],
    templateUrl: './dashboard.html'
    
})
export class Dashboard {
    // Get contacts here
    contactService = inject(ContactService);
    contactList = this.contactService.getContacts(); 
    // {companyId: 2486881241}
    counselList = this.contactService.getContacts();

}
