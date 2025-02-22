import { Component, OnInit } from '@angular/core';
import { CommonUtilsService } from '../../shared/services/common-utils.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  standalone: false,
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public date: string = '08/02/2025 5:00 PM';
  public countdownTitle: string = 'Der Countdown läuft...';
  protected title = 'hochzeit';
  protected pgImages = [];

  constructor(protected commonUtilsService: CommonUtilsService/* protected imageService: ImageService */) { }

  ngOnInit() { }
}
