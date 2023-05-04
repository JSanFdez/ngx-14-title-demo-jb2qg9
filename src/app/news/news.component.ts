import { Component, HostBinding, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  marginTop = 35;
  child;

  constructor(private renderer: Renderer2) {
    const parent: HTMLElement = document.getElementById('component_2');
    this.child = parent.children[0];
  }

  ngOnInit() {}

  addMargin() {
    this.marginTop = this.marginTop + 5;
    this.renderer.setStyle(this.child, 'margin-top', `${this.marginTop}px`);
  }

  removeMargin() {
    this.marginTop = this.marginTop - 5;
    this.renderer.setStyle(this.child, 'margin-top', `${this.marginTop}px`);
  }
}
