import { Component } from '@angular/core';

interface TreeNode {
  label: string;
  children?: TreeNode[];
  expanded?: boolean;
}

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.scss']
})
export class TreeviewComponent {
  treeData: TreeNode[] = [
    {
      label: 'Parent 1',
      expanded: false,
      children: [
        {
          label: 'Child 1.1',
          expanded: false,
          children: [
            { label: 'Grandchild 1.1.1' },
            { label: 'Grandchild 1.1.2' }
          ]
        },
        { label: 'Child 1.2' }
      ]
    },
    {
      label: 'Parent 2',
      expanded: false,
      children: [
        { label: 'Child 2.1' }
      ]
    }
  ];

  toggle(node: TreeNode) {
    node.expanded = !node.expanded;
  }
}