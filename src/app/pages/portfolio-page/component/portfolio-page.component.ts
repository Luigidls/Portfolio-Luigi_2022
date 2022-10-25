import { Component, OnInit } from '@angular/core';
import { TeaserModel } from 'src/app/models/teaser.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {

  titleHeading: string = 'Projects & study cases';

  dataList: TeaserModel[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataList = this.dataService.getData();

    var navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
      if (window.scrollY >= 20) {
        navbar?.classList.add('nav-background');
      }
      else {
        navbar?.classList.remove('nav-background');
      }
    })
  }
}
