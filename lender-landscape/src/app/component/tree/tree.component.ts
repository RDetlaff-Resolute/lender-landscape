import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-tree',
  imports: [TreeModule, CommonModule],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss'
})
export class TreeComponent implements OnInit {
  treeValue: TreeNode[] = [];
  contactService = inject(ContactService);
  
  ngOnInit() {
    this.contactService.getContacts().then((files) => (this.treeValue = files));
  }
}
