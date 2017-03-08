

export class Resource {

    hamburgIcon = "menu";
    backIcon = "arrow_back";
    personName = "Sparsh Jain";

    home: "home";
    toolbarIconsArray = [{
        icon: "work",
        toolbarTitle: "Work",
        routeLink: "work"
    }, {
        routeLink: "about",
        toolbarTitle: "About",
        icon: "account_circle"
    }, {
        routeLink: "blog",
        toolbarTitle: "Blog",
        icon: "content_paste"
    }, {
        routeLink: "contact",
        toolbarTitle: "Contact",
        icon: "edit"

    }];

    navDrawerIcons = [
        {
            icon: "home",
            toolbarTitle: "Home",
            routeLink: "home"
        }
    ]

    constructor()
    {
        this.navDrawerIcons = this.navDrawerIcons.concat(this.toolbarIconsArray);
    }


}