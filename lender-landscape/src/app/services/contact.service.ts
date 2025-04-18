import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { query } from '@angular/animations';


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
    contactOwnerId: 384094352
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
    contactOwnerId: 384094352
  },
  {
    id: 3285578,
    name: 'Dave Wagner',
    firstName: 'Dave',
    lastName: 'Wagner', 
    title: 'Credit Risk Review Director',
    email: 'dwagner@westernalliancebank.com',
    companyId: 2486881241,
    lendingSpecialty: 'Commercial Lending',
    contactParentId: -1,
    contactOwnerId: 384094352
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
    contactOwnerId: 384094352
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

// @Component({
//   selector: 'contact-service',
//   imports: [TreeComponent],
//   template: `
//   <app-tree [inputContacts]=contacts></app-tree>
//   `
// })

export class ContactService {
  constructor( private http: HttpClient) { }
  getContacts(options?: {contactId?: number, companyId?: number}): Contact[] {
    // Simulate an API call
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

  getContactsApi(options?: {contactId?: number, companyId?: number}): Observable<Contact[]> {
    const BASE_URL = 'http://localhost:5000/api/';
    var queryString = '';
    if (options?.companyId !== undefined) {
      queryString = `company/${options.companyId}/contacts`;
    }
    if (options?.contactId !== undefined) {
      queryString = `contacts/${options.contactId}`;
    }
    return this.http.get<Contact[]>(BASE_URL + queryString);
  }
}
