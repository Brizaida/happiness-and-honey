import { AfterViewInit, Component, Input } from '@angular/core';
import { Banner } from '../../interfaces/banner.interface';

@Component({
  selector: 'product-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements AfterViewInit {

  @Input() public carrousel: Banner[] = [];
  @Input() public carrousel2: string[] = [];

  constructor() {

  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit ');
    console.log({carrousel: this.carrousel});
    console.log({carrousel2: this.carrousel2});

  }

}
