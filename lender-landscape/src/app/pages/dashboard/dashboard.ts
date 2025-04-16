import { Component, inject } from '@angular/core';
import { TreeComponent } from '../../component/tree/tree.component';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { Contact, ContactService } from '../../services/contact.service';
import { Company, CompanyService } from '../../services/company.service';
import { LeftPanel } from './leftpanel';
import { RightPanel } from "./rightpanel";

@Component({
    selector: 'app-dashboard',
    imports: [DividerModule, AvatarModule, LeftPanel, RightPanel],
    templateUrl: './dashboard.html'
    
})
export class Dashboard {
    // Get contacts here
    contactService = inject(ContactService);
    companyService = inject(CompanyService);
    contactList = this.contactService.getContacts({companyId: 2486881241}); 
    // {companyId: 2486881241}
    counselList: Contact[] = [];
    counselIds: number[] = [];

    getContactList(companyId: number) {
        return this.contactList;
    }

    makeCounselList(companyId: number) { 
        this.counselIds = this.getCounselIds(companyId);
        this.counselIds.forEach((counselId) => {
            const tempCounselList = this.contactService.getContacts({companyId: counselId});
        })
    }

    getCounselIds(companyId: number): number[] {
        this.companyService.getData(companyId)[0].counsel.forEach((counselId) => {
            this.counselIds.push(counselId);
        })
        return this.counselIds;
    }

    //I need to append a company (the firm) onto the top of the counsel contact tree
 
    

}

