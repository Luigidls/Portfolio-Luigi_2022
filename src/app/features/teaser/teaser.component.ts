import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.css']
})
export class TeaserComponent implements OnInit {

  @Input() client: string = '';
  @Input() myRole: string = '';
  @Input() sector: string = '';
  @Input() challenge: string = '';
  @Input() duration: string = '';

  clicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
    var teaser = document.getElementsByClassName('teaser-block')[0];

    teaser.addEventListener('click', () => {
      if (teaser.classList.contains('expanded')) {
        teaser.classList.remove('expanded');
      }
      else {
        teaser.classList.add('expanded');
      }
    });
  }

  click(): void {
    this.clicked = !this.clicked;
  }

}
