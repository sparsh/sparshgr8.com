import { Component,OnInit } from '@angular/core';
import { Router} from '@angular/router'
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

ngOnInit()
{
   this.router.events.subscribe((event) => {

   this.toolbarTitle =  this.previoudTitle = this.router.url.substring(1,2).toUpperCase() + this.router.url.substring(2);
    
    });
}

  onResize(event: any) {
    this.innerWidth = event.target.innerWidth;
  }


  closeNavDrawerOrGoBack(sidenav: any) {
    if (sidenav != null) {
      if (sidenav.opened)
        sidenav.toggle();
    }
    else {
      this.router.navigate(["./home"]);
    }
  }

  changeTitleTo(title: string) {
    console.log("title is " + title + " toolbar title is "+ this.toolbarTitle +" previous title is  "+ this.previoudTitle ) ;
    if (title != null) {
      if (this.toolbarTitle != title) {
        this.previoudTitle = this.toolbarTitle;
        this.toolbarTitle = title;
      }
    }
    else
      this.toolbarTitle = this.previoudTitle;

  }

  goToRouteLink(path: string) {
    this.router.navigate(["./" + path]);
  }

}
