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
        this.convertSubtitleDataToHtml('Photo by - Stephan', 'Location - Warnemünde - Unsere erste Reise')
      ),
      new LightGalleryItem(
        'images/gallery/2.JPG',
        this.convertSubtitleDataToHtml('Photo by - Yong Yong', 'Location - Warnemünde - Unsere erste Reise')
      ),
      new LightGalleryItem(
        'images/gallery/3.JPG',
        this.convertSubtitleDataToHtml('Photo by - Stephan', 'Location - Sony Center')
      ),
      new LightGalleryItem(
        'images/gallery/5.JPG',
        this.convertSubtitleDataToHtml('Photo by - Stephan', 'Location - Barcelona - Zum ersten mal zusammen im Ausland')
      ),
      new LightGalleryItem(
        'images/gallery/4.JPG',
        this.convertSubtitleDataToHtml('Photo by - Yong Yong', 'Location - Nizza')
      ),
      new LightGalleryItem(
        'images/gallery/6.JPG',
        this.convertSubtitleDataToHtml('Photo by - Stephan', 'Location - Köln - Unser erstes Liebesschloss - Wer findet es?')
      ),
      new LightGalleryItem(
        'images/gallery/7.JPG',
        this.convertSubtitleDataToHtml('Photo by - Yong Yong', 'Location - Atlantic City - Unsere erste USA Reise nach New York')
      ),
      new LightGalleryItem(
        'images/gallery/8.JPG',
        this.convertSubtitleDataToHtml('Photo by - Stephan', 'Location - New York - Das erste mal im Central Park')
      ),
      new LightGalleryItem(
        'images/gallery/9.JPG',
        this.convertSubtitleDataToHtml('Photo by - Hanh', 'Location - Hong Kong - Unsere große China Reise')
      ),
      new LightGalleryItem(
        'images/gallery/10.JPG',
        this.convertSubtitleDataToHtml('Photo by - Yong Yong', 'Location - Fuertaventura - Unser erste Roadtrip')
      ),
      new LightGalleryItem(
        'images/gallery/11.jpg',
        this.convertSubtitleDataToHtml('Photo by - Stephan', 'Location - Fuertaventura - Auf den Dünen')
      ),
      new LightGalleryItem(
        'images/gallery/12.jpg',
        this.convertSubtitleDataToHtml('Photo by - Yong Yong', 'Location - Death Valley - Großer Roadtrip auf der West Küste der USA')
      ),
      new LightGalleryItem(
        'images/gallery/13.jpg',
        this.convertSubtitleDataToHtml('Photo by - Yong Yong', 'Location - Singapur - Gardens by the Bay')
      ),
      new LightGalleryItem(
        'images/gallery/15.jpg',
        this.convertSubtitleDataToHtml('Photo by - Yong Yong', 'Location - Korea - Tempelbesichtung im Hambok')
      ),
      new LightGalleryItem(
        'images/gallery/16.jpg',
        this.convertSubtitleDataToHtml('Photo by - Yong Yong', 'Location - Korea - Unser Liebesschloss am Namsan Tower')
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
