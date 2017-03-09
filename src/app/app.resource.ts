

export class Resource {

    colors = ["#80CBC4", "#FFCC80", "#FFAB91"];
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
        //     routeLink: "blog",
        //     toolbarTitle: "Blog",
        //     icon: "content_paste"
        // }, {
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

    constructor() {
        this.navDrawerIcons = this.navDrawerIcons.concat(this.toolbarIconsArray);
    }



    workTitle = "Recent Works";
    workDetailsArray =
    [
        {
            workTitle: "Health Quest",
            workDescription: "It is a health related application",
            coverurl: "asset/sparsh_circular_black.png",
            screenshotArray: ["asset/sparsh_circular_black.png", "asset/sparsh_circular_black.png"],
            platform: "Android"

        },
        {
            workTitle: "Health Quest",
            workDescription: "It is a health related application",
            coverurl: "asset/sparsh_circular_black.png",
            screenshotArray: ["asset/sparsh_circular_black.png", "asset/sparsh_circular_black.png"],
            platform: "Android"
        },
        {
            workTitle: "Health Quest",
            workDescription: "It is a health related application",
            coverurl: "asset/sparsh_circular_black.png",
            screenshotArray: ["asset/sparsh_circular_black.png", "asset/sparsh_circular_black.png"],
            platform: "Android"

        },
        {
            workTitle: "Health Quest",
            workDescription: "It is a health related application",
            coverurl: "asset/sparsh_circular_black.png",
            screenshotArray: ["asset/sparsh_circular_black.png", "asset/sparsh_circular_black.png"],
            platform: "Android"

        },
        {
            workTitle: "Health Quest",
            workDescription: "It is a health related application",
            coverurl: "asset/sparsh_circular_black.png",
            screenshotArray: ["asset/sparsh_circular_black.png", "asset/sparsh_circular_black.png"],
            platform: "Android"

        }

    ]

    aboutTitle = "About Me";
    somethingAboutMe = "My name is sparsh etc.";
    experience = "Experience";
    experienceDetailsArray = [{ name: "Benepik", post: "CTO" }, { name: "Benepik", post: "CTO" }, { name: "Benepik", post: "CTO" }]
    downLoadResume = "Download Resume";
    aboutWebSite = "About This WebSite";
    aboutWebSiteDescription = "This WebSite is made in angular 2 and sourcecode can be seen at github.com/sparsh/sparshgr8.com"
    aboutSocialDetailsArray = [{ path: "asset/github.png", link: "www.github.com/sparsh" },
    { path: "asset/so.png", link: "http://stackoverflow.com/users/3397757/sparsh" },
    { path: "asset/facebook.png", link: "www.fb.com/sparshj" },
    { path: "asset/linkedin.png", link: "https://www.linkedin.com/in/sparsh-jain-0b183ba6/" },
    { path: "asset/twitter.png", link: "https://twitter.com/sparshgr8" }]
}