import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'my-app',
  moduleId: module.id,
  styles: ['md-icon:hover {cursor: pointer;}'],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  toolbarTitle = "Sparsh Jain";
  previoudTitle: string;
  innerWidth: any;
  icon: string = "menu";
  constructor(private router: Router) {
    this.innerWidth = (window.screen.width);
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      let url = this.router.url;
      this.toolbarTitle = this.previoudTitle = url.substring(1, 2).toUpperCase() + url.substring(2);
      console.log(url.indexOf("home"));
      if (url.indexOf("home") == -1) {
        this.icon = "arrow_back";
      }
      else {
        this.icon = "menu";
        this.previoudTitle = this.toolbarTitle = "Sparsh Jain";
      }

    });
  }

  onResize(event: any) {
    this.innerWidth = event.target.innerWidth;
  }


  closeNavDrawerOrGoBack(sidenav: any) {
    console.log("this icon is " + this.icon);
    if (this.icon == "arrow_back")
      this.router.navigate(["./home"]);
    else 
      sidenav.toggle();

  }

  changeTitleTo(title: string) {
    if (title != null) {
      if (this.toolbarTitle != title) {
        this.previoudTitle = this.toolbarTitle;
        this.toolbarTitle = "Go to " + title;
      }
    }
    else
      this.toolbarTitle = this.previoudTitle;

  }

  goToRouteLink(path: string) {
    this.router.navigate(["./" + path]);
  }

}
