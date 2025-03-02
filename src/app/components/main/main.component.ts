import { Component, OnInit } from '@angular/core';
import { CommonUtilsService } from '../../shared/services/common-utils.service';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { LightGalleryService } from '../../shared/services/light-gallery.service';
import { GalleryItem } from 'lightgallery/lg-utils';

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
  protected lightImages: GalleryItem[] = [];

  constructor(protected commonUtilsService: CommonUtilsService, protected lightGalleryService: LightGalleryService) { }
  settings = {
    counter: false,
    plugins: [lgZoom]
  };

  /**
   * Light gallery onBeforeSlide Action.
   *
   * @param detail Slide details
   */
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  ngOnInit() {
    this.lightImages = this.lightGalleryService.getImageData();
  }
}
