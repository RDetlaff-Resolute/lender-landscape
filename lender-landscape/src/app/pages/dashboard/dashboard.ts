import { Component, inject, Input } from '@angular/core';
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
    contactService = inject(ContactService);
    contactList: Contact[] = [];
    // {companyId: 2486881241}

    companyService = inject(CompanyService);
    myCounselContactList: Contact[] = [];
    counselIds: number[] = [];

    

    ngOnInit() {
        this.contactList = this.contactService.getContacts({companyId: 2486881241}); // If you don't include a companyId this breaks
        this.myCounselContactList = this.makeCounselList(2486881241);
    }


    makeCounselList(companyId: number):Contact[] {    //I need to append a company (the firm) onto the top of each counsel contact tree
        this.counselIds = this.getCounselIds(companyId);
        console.log('counselIds', this.counselIds);
        var updatedCounselContactList: Contact[] = [];
        this.counselIds.forEach((counselId) => {
            const tempContactList = this.contactService.getContacts({companyId: counselId});
            console.log('tempContactList ', tempContactList);
            const tempFirm = this.companyService.getData(counselId)[0];
            console.log('tempFirm', tempFirm);
            //make a contact with tempFirm's properties
            const firmContact: Contact = {
                id: tempFirm.id,
                name: tempFirm.name,
                firstName: tempFirm.name,
                lastName: tempFirm.name,
                title: '',
                email: '',
                companyId: -1,
                lendingSpecialty: '',
                contactParentId: -1,
                contactOwnerId: -1
            }
            console.log('firmContact',firmContact);
            //for each parent contact in tempContactList, make tempFirm their parent
            tempContactList.forEach((contact) => { //do this in one line - filter (map)
                if (contact.contactParentId == -1) {
                    console.log(contact.firstName);
                    contact.contactParentId = firmContact.id;
                }
            })
            //add firmContact to tempContactList
            tempContactList.push(firmContact);
            console.log('tempContactList', tempContactList)
            //add updated firm contact list to counsel contact list
            updatedCounselContactList = updatedCounselContactList.concat(tempContactList)
            console.log('counselContactList', updatedCounselContactList);
        })
        return updatedCounselContactList;
    }

    getCounselIds(companyId: number): number[] {
        this.companyService.getData(companyId)[0].counsel.forEach((counselId) => {
            this.counselIds.push(counselId);
        })
        return this.counselIds;
    }

    getContactList(companyId: number) {
        return this.contactList;
    }
}

