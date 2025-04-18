import { Component, inject, Input } from '@angular/core';
import { TreeComponent } from '../../component/tree/tree.component';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { Contact, ContactService } from '../../services/contact.service';
import { Company, CompanyService } from '../../services/company.service';
import { LeftPanel } from './leftpanel';
import { RightPanel } from "./rightpanel";
import { Observable, of } from 'rxjs';
import { CommonModule, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-dashboard',
    imports: [CommonModule, DividerModule, AvatarModule, LeftPanel, RightPanel],
    templateUrl: './dashboard.html'
    
})
export class Dashboard {
    contactService = inject(ContactService);
    // contactList = this.contactService.getContacts();
    contactList$: Observable<Contact[]> = new Observable<Contact[]>(); 
    // {companyId: 2486881241}

    companyService = inject(CompanyService);
    myCounselContactList: Contact[] = [];
    counselIds: number[] = [];

    

    ngOnInit() {
        this.contactList$ = this.contactService.getContactsApi({companyId: 2486881241}); // If you don't include a companyId this breaks
        // this.contactList$ = of (this.contactService.getContacts({companyId: 2486881241}));
        this.myCounselContactList = this.makeCounselList(2486881241);
    }


    makeCounselList(companyId: number):Contact[] {
        this.counselIds = this.getCounselIds(companyId);
        console.log('counselIds', this.counselIds);
        var updatedCounselContactList: Contact[] = [];
        this.counselIds.forEach((counselId) => {
            const tempContactList = this.contactService.getContacts({companyId: counselId});
            console.log('tempContactList ', tempContactList);
            const tempFirm = this.companyService.getData(counselId)[0];
            console.log('tempFirm', tempFirm);
            
            const firmContact: Contact = {  //make a contact with tempFirm's properties
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
            
            tempContactList.push(firmContact);  //add firmContact to tempContactList
            console.log('tempContactList', tempContactList)
            
            updatedCounselContactList = updatedCounselContactList.concat(tempContactList)   //add updated firm contact list to counsel contact list
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
}

