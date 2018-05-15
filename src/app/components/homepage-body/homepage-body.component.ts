import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'; // importing service from services to the component
@Component({
  selector: 'app-homepage-body',
  templateUrl: './homepage-body.component.html',
  styleUrls: ['./homepage-body.component.css']
})
export class HomepageBodyComponent implements OnInit {
  imageDetails1: ImageDetails;
  imageDetails2: ImageDetails;
  imageDetails3: ImageDetails;
  imageDetails4: ImageDetails;
  images: Image[];
  constructor(private dataService: DataService) {
    console.log('constructor ran in homepage-body.component');
  }

  ngOnInit() {
    console.log('ngOnInit() ran in homepage-body.component');
    this.dataService.getImages().subscribe((images) => {
      console.log(images[0]);
      this.images = images;
      this.images.length = 20;
    });
    this.imageDetails1 = {
      imageLink : 'https://ik.imagekit.io/eshopbox/mrbutton//nehru-web1.jpg',
      imageDescription : 'url.description',
      imageTitle : 'url.title'
    };
    this.imageDetails2 = {
      imageLink : 'https://ik.imagekit.io/eshopbox/mrbutton//mid_season_sale.jpg',
      imageDescription : 'url.description',
      imageTitle : 'url.title'
    };
    this.imageDetails3 = {
      imageLink : 'https://ik.imagekit.io/eshopbox/mrbutton//PARTY1.jpg',
      imageDescription : 'url.description',
      imageTitle : 'url.title'
    };
    this.imageDetails4 = {
      imageLink : 'https://ik.imagekit.io/eshopbox/mrbutton//work.jpg',
      imageDescription : 'url.description',
      imageTitle : 'url.title'
    };
  }

}

interface ImageDetails {
  imageLink: string;
  imageDescription: string;
  imageTitle: string;
}

interface Image {
  title: string;
  url: string;
}
