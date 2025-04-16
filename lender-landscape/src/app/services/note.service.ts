import { Injectable } from '@angular/core';

export interface Note {
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

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }
}
