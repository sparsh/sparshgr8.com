import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Resource } from './app.resource'
@Component({
  selector: 'my-app',
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

  toolbarTitle: string;
  previoudTitle: string;
  icon: string;
  constructor(private router: Router,
    private resource: Resource) {
    this.toolbarTitle = resource.personName;
    this.icon = resource.hamburgIcon;
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      let url = this.router.url;
      if (url.indexOf("Inner") == -1)
        this.toolbarTitle = this.previoudTitle = url.substring(1, 2).toUpperCase() + url.substring(2);
      if (url.indexOf("home") == -1) {
        this.icon = this.resource.backIcon;
      }
      else {
        this.icon = this.resource.hamburgIcon;
        this.previoudTitle = this.toolbarTitle = this.resource.personName;
      }

    });
  }


  closeNavDrawerOrGoBack(sidenav: any) {
    if (this.icon == this.resource.backIcon) {
      if (this.router.url.indexOf("Inner") == - 1)
        this.router.navigate(["./home"]);
      else
        window.history.back();
    }
    else
      sidenav.toggle();

  }

  changeTitleTo(title: string) {
    if (title != null) {
      if (this.toolbarTitle != title) {
        this.previoudTitle = this.toolbarTitle;
        if (this.router.url.indexOf("Inner") == -1)
          this.toolbarTitle = "Go to " + title;
        else
          this.toolbarTitle = title;
      }
    }
    else
      this.toolbarTitle = this.previoudTitle;

  }

  goToRouteLink(path: string, sidenav: any) {
    sidenav.close();
    this.router.navigate(["./" + path]);
  }
//Inner describes wether they are inner pages or not.
// all the pages which are on top of stack having
// more than one page below are inner
}
