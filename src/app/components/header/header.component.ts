import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  
})
export class HeaderComponent implements OnInit {
  
    @Input() titulo: string=' '
    constructor() { }
    ngOnInit() {}
}


