import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  searchValue(value) {
    value = value.toLowerCase();
    this.route.navigate([`/category/${value}`]);
  }
}