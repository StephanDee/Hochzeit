import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GalleriaResponsiveOptions } from 'primeng/galleria';
import { PrimengGalleriaService } from '../services/primeng-galleria.service';
import { isNil } from 'lodash-es';

@Component({
  selector: 'app-primeng-galleria',
  templateUrl: './primeng-galleria.component.html',
  standalone: false,
  styleUrls: ['./primeng-galleria.component.scss']
})
export class PrimengGalleriaComponent implements OnInit {

  @ViewChild('PrimengGalleriaContainer') public pgContainer: ElementRef;
  @Input() public autoplay: boolean = true;
  @Input() public transitionInterval: number = 3000;
  @Input() public showThumbnails: boolean = true;
  @Input() public showItemNavigators: boolean = true;
  @Input() public numVisible: number = 3;
  @Input() public containerStyle: any = { 'width': '100%' };
  @Input() public responsiveOptions: GalleriaResponsiveOptions[];
  @Input() public images: any;

  constructor(
    protected pgService: PrimengGalleriaService) {
  }

  ngOnInit() {
    this.responsiveOptions = !isNil(this.responsiveOptions) ? this.responsiveOptions : this.pgService.defaultResponsiveOptions;
    this.images = !isNil(this.images) ? this.images : this.pgService.defaultImages;
  }
}