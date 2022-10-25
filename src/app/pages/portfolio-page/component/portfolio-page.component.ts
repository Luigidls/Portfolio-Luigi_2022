import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {

  titleHeading: string = 'Projects & study cases';

  constructor() { }

  ngOnInit(): void {
  }

}
