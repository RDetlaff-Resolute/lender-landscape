import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HubspotService {
  private apiUrl = 'https://api.hubapi.com/crm/v3';
  private apiToken = '';

  private headers = new HttpHeaders(({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.apiToken}`
  }));

  constructor(private http: HttpClient) {}

  getContacts(options?: { contactId?: number; companyId?: number }) {
    // Filter by contactId if provided
    if (options?.contactId !== undefined) {
      return this.http.get(
        `/objects/${this.apiUrl}/contacts/${options.contactId}`,
        { headers: this.headers }
      );
    }

    // Filter by companyId if provided
    if (options?.companyId !== undefined) {
      return this.http.get(`/objects/${this.apiUrl}/contacts/company/${options.companyId}`);
    }

    return this.http.get(`${this.apiUrl}/contacts`);
  }
}
