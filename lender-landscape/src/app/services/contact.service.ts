import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    contactOwnerId: 2057511413
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
    contactOwnerId: 2057511413
  }
  ,
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

  getContactsForCompany(companyId: number): Contact[] {
    

    return [];
  }

  constructor() { }
}
