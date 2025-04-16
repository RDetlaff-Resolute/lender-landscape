import { Component, inject, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';
import { Contact } from '../../services/contact.service';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';



@Component({
  selector: 'app-tree',
  imports: [TreeModule, CommonModule, AvatarModule, BadgeModule, ChipModule, TagModule],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss'
})
export class TreeComponent implements OnInit {
  // treeValue = TreeService(contacts);   // Make sure we move our function to a tree service later

  @Input() inputContacts: any;

  
  contactList: Contact[] = [];
  treeValue: TreeNode[] = [];
  selectedTreeValue: TreeNode[] = []; //Only needed for checkboxes
  initials = '';
  
  ngOnInit() {
    
    //this.contactList.forEach((contact) => console.log(contact));
    this.contactList = this.inputContacts;
    
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
    this.treeValue.forEach((node) => this.expandTree(node));
  }
  
  private expandTree(node: TreeNode): void {    //It would be fun to try this recursively
    node.expanded = true;
    if (node.children) {
      node.children.forEach(childNode => {
        childNode.expanded = true;
      })
    }
    this.treeValue = [...this.treeValue]
  }

  private getInitials(node: TreeNode): string {
    if(node.data.firstName && node.data.lastName) {
      this.initials = node.data.firstName;
    } else {
      this.initials = '?';
    }
    return this.initials;
  }

}
