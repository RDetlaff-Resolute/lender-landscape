import { Injectable } from '@angular/core';


export interface Owner {
  id: number;
  firstName: string;
  lastName: string;
  name: string
  userId: number;
}

const owners: Owner[] = [
  {
    id: 2057511413,
    firstName: 'Ryan',
    lastName: 'Detlaff',
    name: 'Ryan Detlaff',
    userId: 65637085
  },
  {
    id: 384094352,
    firstName: 'Eric',
    lastName: 'Anderes',
    name: 'Eric Anderes',
    userId: 50985819
  },
  {
    id: 77388217,
    firstName: 'Kevin',
    lastName: 'Kolbus',
    name: 'Kevin Kolbus',
    userId: 77388217
  },
  {
    id: 38925889,
    firstName: 'Jeremiah',
    lastName: 'Foster',
    name: 'Jeremiah Foster',
    userId: 38925889
  }
]

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  
  getData(options?: {id?: number}): Owner[] {
    if (options?.id !== undefined) {
      return owners.filter(owner => owner.id === options.id);
    }
    console.log(owners);
    return owners;
  }
  constructor() { }
}
