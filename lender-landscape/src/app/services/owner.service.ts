import { Injectable } from '@angular/core';


export interface Owner {
  id: number;
  firstName: string;
  lastName: string;
  name: string
  userId: number;
  color: string;
}

const owners: Owner[] = [
  {
    id: 2057511413,
    firstName: 'Ryan',
    lastName: 'Detlaff',
    name: 'Ryan Detlaff',
    userId: 65637085,
    color: '#258bd1'
  },
  {
    id: 384094352,
    firstName: 'Eric',
    lastName: 'Anderes',
    name: 'Eric Anderes',
    userId: 50985819,
    color: '#03922e'
  },
  {
    id: 77388217,
    firstName: 'Kevin',
    lastName: 'Kolbus',
    name: 'Kevin Kolbus',
<<<<<<< HEAD
    userId: 77388217
  },
  {
    id: 38925889,
    firstName: 'Jeremiah',
    lastName: 'Foster',
    name: 'Jeremiah Foster',
    userId: 38925889
=======
    userId: 77388217,
    color: '#e18e1d'
>>>>>>> 55cee72eaf6042feb205a79962bce677865febb3
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
    return owners;
  }
  constructor() { }
}
