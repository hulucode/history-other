import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.less']
})
export class HeaderComponentComponent implements OnInit {

  public radioValue = 'A';

  constructor() { }

  ngOnInit() {

  }

}