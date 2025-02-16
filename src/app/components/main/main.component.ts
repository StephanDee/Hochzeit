import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  standalone: false,
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'hochzeit';

  constructor() { }

  ngOnInit() {
  }

}
