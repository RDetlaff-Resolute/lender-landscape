import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../services/contact.service';




@Component({
  selector: 'app-tree',
  imports: [TreeModule, CommonModule],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss'
})
export class TreeComponent implements OnInit {
  // treeValue = TreeService(contacts);   // Make sure we move our function to a tree service later

  contactService = inject(ContactService);
  contactList: Contact[] = [];
  treeValue: TreeNode[] = [];
  //selectedTreeValue: TreeNode[] = []; //Only needed for checkboxes
  
  ngOnInit() {
    this.contactList = this.contactService.getContacts();
    //this.contactList.forEach((contact) => console.log(contact));
    
    const createDataTree = (dataset: Contact[]) => {
      const hashTable = Object.create(null);
      dataset.forEach((aData: Contact) => hashTable[aData.id] = {
        ...aData, 
        key: aData.id,
        label: aData.name,
        data: aData.email,
        children: []
      }); 
      const dataTree: TreeNode[] = [];
      dataset.forEach((aData: Contact) => {
        if(aData.contactParentId && aData.contactParentId != -1) hashTable[aData.contactParentId].children.push(hashTable[aData.id])
        else dataTree.push(hashTable[aData.id])
      });
      return dataTree;
    };

    this.treeValue = createDataTree(this.contactList);
    this.treeValue.forEach((node) => console.log(node));

  }
  
  
}
