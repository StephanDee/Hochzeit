import { Injectable } from '@angular/core';
import { GalleryItem } from 'lightgallery/lg-utils';

export class LightGalleryItem {

  /**
   * Constructor of LightGalleryItem.
   * 
   * @param src Media source, visible in full screen mode
   * @param subHtml Optional, subtitles in HTML
   * @param srcset Optional, media source visible in gallery
   * @param responsive Optional, responsive layout of original media source
   */
  constructor(public src: string, public subHtml?: string, public srcset?: string, public responsive?: string) {
    this.src = src; // + '&auto=format&fit=crop&w=1400&q=80';
    this.subHtml = subHtml;
    this.srcset = srcset ?? src;
    this.responsive = responsive ?? src; // + '&auto=format&fit=crop&w=1400&q=80'; // responsive ? responsive : src + '&auto=format&fit=crop&w=480&q=80 480, ' + src + '&auto=format&fit=crop&w=800&q=80 800';
  }
}

@Injectable({
  providedIn: 'root'
})
export class LightGalleryService {

  constructor() { }

  public getImageData(): GalleryItem[] {
    return [
      new LightGalleryItem(
        'images/gallery/1.JPG',
        this.convertSubtitleDataToHtml('Warnemünde', 'Unsere erste Reise')
      ),
      new LightGalleryItem(
        'images/gallery/2.JPG',
        this.convertSubtitleDataToHtml('Warnemünde', 'Unsere erste Reise')
      ),
      /*new LightGalleryItem(
        'images/gallery/3.JPG',
        this.convertSubtitleDataToHtml('Photo by - Stephan', 'Location - Sony Center')
      ),*/
      new LightGalleryItem(
        'images/gallery/5.JPG',
        this.convertSubtitleDataToHtml('Barcelona', 'Die erste Reise zusammen außerhalb Deutschland')
      ),
      new LightGalleryItem(
        'images/gallery/4.JPG',
        this.convertSubtitleDataToHtml('Nizza', 'Das erste mal zusammen in Frankreich')
      ),
      new LightGalleryItem(
        'images/gallery/6.JPG',
        this.convertSubtitleDataToHtml('Köln', 'Unser erstes Liebesschloss - Wer findet es?')
      ),
      new LightGalleryItem(
        'images/gallery/7.JPG',
        this.convertSubtitleDataToHtml('New York', 'Unsere erste USA Reise in New York - Time Square')
      ),
      new LightGalleryItem(
        'images/gallery/8.JPG',
        this.convertSubtitleDataToHtml('New York', 'Das erste mal im Central Park')
      ),
      new LightGalleryItem(
        'images/gallery/9.JPG',
        this.convertSubtitleDataToHtml('Hong Kong', 'Unsere große China Reise')
      ),
      new LightGalleryItem(
        'images/gallery/10.JPG',
        this.convertSubtitleDataToHtml('Fuertaventura', 'Unser erster Roadtrip')
      ),
      new LightGalleryItem(
        'images/gallery/11.jpg',
        this.convertSubtitleDataToHtml('Fuertaventura', 'Auf den Dünen Fuertaventuras')
      ),
      new LightGalleryItem(
        'images/gallery/12.jpg',
        this.convertSubtitleDataToHtml('Death Valley', 'Großer Roadtrip auf der West Küste der USA')
      ),
      new LightGalleryItem(
        'images/gallery/13.jpg',
        this.convertSubtitleDataToHtml('Singapur', 'Marina Bay')
      ),
      new LightGalleryItem(
        'images/gallery/15.jpg',
        this.convertSubtitleDataToHtml('Korea', 'Tempelbesichtung im Hambok')
      ),
      new LightGalleryItem(
        'images/gallery/16.jpg',
        this.convertSubtitleDataToHtml('Korea', 'Unser Liebesschloss am Namsan Tower')
      )
    ];
  }

  /**
   * Converts subtitle data to HTML.
   *
   * @param title Title
   * @param description Description
   * @returns string
   */
  protected convertSubtitleDataToHtml(title: string, description: string): string {
    return '<h4>' + title + '</h4>' + '<p>' + description + '<p>';
  }
}
