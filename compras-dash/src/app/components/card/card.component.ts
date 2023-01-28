import { BlogPostCard } from './../../Models/blog-post-card.model';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  data!: BlogPostCard;

}
