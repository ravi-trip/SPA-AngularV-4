import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  images: Image[];
  posts: Post[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getImages().subscribe((images) => {
      this.images = images;
      this.images.length = 100;
    });
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.posts.length = 50;
      console.log(this.posts);
    });
  }

}

interface Post {
  title: string;
  body: string;
}

interface Image {
  title: string;
  url: string;
}
