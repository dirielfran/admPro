import { SidebarService } from './../../services/sidebar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  itemsSidebar: any[];

  constructor( private sidebarService: SidebarService ) {
    this.itemsSidebar = sidebarService.menu;
  }

  ngOnInit(): void {
  }

}
