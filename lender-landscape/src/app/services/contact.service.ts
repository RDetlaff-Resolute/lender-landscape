import { Injectable } from '@angular/core';
import { HubspotService } from './hubspot.service';

export interface Contact {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  companyId: number;
  lendingSpecialty: string;
  contactParentId?: number;
  contactOwnerId: number;
}



const contacts: Contact[] = [
  {
    id: 97562285664,
    name: 'Matt Gillbreath',
    firstName: 'Matt',
    lastName: 'Gillbreath', 
    title: 'Senior Credit Officer',
    email: 'mgilbreath@alliancebankofarizona.com',
    companyId: 2486881241,
    lendingSpecialty: 'Commercial Lending',
    contactParentId: 42902922752,
    contactOwnerId: 38925889
  },
  {
    id: 42902922752,
    name: 'Tim Bruckner',
    firstName: 'Tim',
    lastName: 'Bruckner', 
    title: 'CCO',
    email: 'tbruckner@westernalliancebank.com',
    companyId: 2486881241,
    lendingSpecialty: 'Commercial Lending',
    contactParentId: -1,
    contactOwnerId: 38925889
  },
  {
    id: 328557,
    name: 'Dave Wagner',
    firstName: 'Dave',
    lastName: 'Wagner', 
    title: 'Credit Risk Review Director',
    email: 'dwagner@westernalliancebank.com',
    companyId: 2486881241,
    lendingSpecialty: 'Commercial Lending',
    contactParentId: -1,
    contactOwnerId: 38925889
  },
  {
    id: 328557,
    name: 'Robert Simpson',
    firstName: 'Robert',
    lastName: 'Simpson', 
    title: 'Vice President',
    email: 'rsimpson@westernalliancebank.com',
    companyId: 2486881241,
    lendingSpecialty: 'Special Assets',
    contactParentId: 42902922752,
    contactOwnerId: 38925889
  },
  {
    id: 1213501,
    name: 'Chuck Luhtala',
    firstName: 'Chuck',
    lastName: 'Luhtala', 
    title: 'Senior Director Commercial Banking',
    email: 'cluhtala@westernalliancebank.com',
    companyId: 2339572225,
    lendingSpecialty: 'Commercial Lending',
    contactParentId: 97562285664,
    contactOwnerId: 2057511413
  },
  {
    id: 58663077760,
    name: 'Monica Clark',
    firstName: 'Monica',
    lastName: 'Clark', 
    title: '',
    email: 'clark.monica@dorsey.com',
    companyId: 2506268513,
    lendingSpecialty: 'Commercial Lending',
    contactParentId: -1,
    contactOwnerId: 2057511413
  }
]

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  constructor() { }
  getContacts(options?: {contactId?: number, companyId?: number}): Contact[] {

    // Filter by contactId if provided
    if (options?.contactId !== undefined) {
      return contacts.filter(contact => contact.id === options.contactId);
    }

    // Filter by companyId if provided
    if (options?.companyId !== undefined) {
      return contacts.filter(contact => contact.companyId === options.companyId);
    }

    return contacts;
  }

  getTree() {
    const dataTree = createDataTree(contacts);
    return dataTree;
  }
}


const createDataTree = (dataset: any) => {
  const hashTable = Object.create(null);
  dataset.forEach((aData: any) => hashTable[aData.id] = {...aData, childNodes: []});
  const dataTree: any[] = [];
  dataset.forEach((aData: any) => {
    if(aData.contactParentId && aData.contactParentId != -1) hashTable[aData.contactParentId].childNodes.push(hashTable[aData.id])
    else dataTree.push(hashTable[aData.id])
  });
  return dataTree;
};