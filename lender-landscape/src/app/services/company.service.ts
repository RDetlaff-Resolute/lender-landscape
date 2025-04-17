import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Company {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  website: string;
  counsel: number[];
  consultants: number[];
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  
  getData(companyId?: number): Company[] {
    const companies: Company[] = [
      {
        id: 2486881241,
        name: 'Western Alliance Bank',
        address: '1 E Washington St',
        city: 'Phoenix',
        state: 'AZ',
        zip: '85004',
        phone: '(602) 389-3500',
        website: 'https://www.westernalliancebank.com',
        counsel: [2506268513],
        consultants: [2329231648]
      },
      {
        id: 2339572225,
        name: 'Alliance Bank of Arizona',
        address: '1 E Washington St',
        city: 'Phoenix',
        state: 'AZ',
        zip: '85004',
        phone: '(602) 389-3500',
        website: 'https://www.alliancebankofarizona.com',
        counsel: [2506268513],
        consultants: [2329231648]
      }
    ]

    // Filter by companyId if provided
    if (companyId !== undefined) {
      return companies.filter(company => company.id === companyId);
    }

    return companies;
  }

  getLogo(companyId: number): string {
    const starterLogoUrl = new URL('https://img.logo.dev/');
    const endingLogoUrl = new URL('?token=pk_SeIzsNJZQymDcnK69KbQeg');

    try{
      const url = new URL(this.getData(companyId)[0].website);
      return starterLogoUrl + url.hostname + endingLogoUrl;
    } catch (error) {
      console.log(error)
    }
     return '';
  }

  constructor() { }
}
