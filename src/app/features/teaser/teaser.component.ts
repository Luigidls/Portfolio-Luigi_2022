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

  constructor() { }

  ngOnInit(): void {
  }

}
