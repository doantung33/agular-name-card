import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {
  @Input()
  name = 'cho';
  @Input()
  email = 'agu@lar.com';
  @Input()
  phone = '8440';
  constructor() { }

  ngOnInit(): void {
  }

}
