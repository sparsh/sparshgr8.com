import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: "./app.component.html"
})
export class AppComponent {
  innerHeight: any;
  innerWidth: any;
  constructor() {
    this.innerHeight = (window.screen.height)
    this.innerWidth = (window.screen.width);
  }


  onResize(event: any) {
    this.innerWidth = event.target.innerWidth;
  }


  closeNavDrawer(sidenav: any) {
    if (sidenav.opened)
      sidenav.toggle();
  }

}
