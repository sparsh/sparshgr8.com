import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Resource } from './app.resource'
declare var ga: Function;
@Component({
  selector: 'my-app',
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

  toolbarTitle: string;
  previousTitle: string;
  url = "";
  icon: string;
  constructor(private router: Router,
    private resource: Resource) {
    this.toolbarTitle = resource.personName;
    this.icon = resource.hamburgIcon;
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      this.url = this.router.url;
      this.changeTitleTo(this.url);
    });
  }


  closeNavDrawerOrGoBack(sidenav: any) {
    if (this.icon == this.resource.backIcon) {
      if (this.router.url.indexOf("Inner") == - 1)
        this.router.navigate(["./home"]);

      else {
        if (this.router.url.indexOf("workInnerPage"))
          this.router.navigate(['work']);
        else
          window.history.back();
      }
    }
    else
      sidenav.toggle();

  }

  changeTitleTo(title: string) {

    if (this.url.indexOf("Inner") == -1)
      this.toolbarTitle = this.url.substring(1, 2).toUpperCase() + this.url.substring(2);
    else if (this.url.indexOf("Inner") > -1)
      this.toolbarTitle = title;



    if (this.url.indexOf("home") == -1)
      this.icon = this.resource.backIcon;
    else if (this.url.indexOf("home") > -1) {
      this.toolbarTitle = this.resource.personName;
      this.icon = this.resource.hamburgIcon;
    }


  }

  goToRouteLink(path: string, sidenav: any) {
    sidenav.close();

    ga('set', 'page',path);
    ga('send', 'pageview')
    this.router.navigate(["./" + path]);

  }



  openLink(link: string) {
    var win = window.open(link, '_blank');
    win.focus();
  }
  //Inner describes wether they are inner pages or not.
  // all the pages which are on top of stack having
  // more than one page below are inner
}
