

export class Resource {

    colors = ["#80CBC4", "#FFCC80", "#FFAB91","#9FA8DA","#BCAAA4"];
    hamburgIcon = "menu";
    backIcon = "arrow_back";
    personName = "Sparsh Jain";
    ok = "OK!";
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


    pleaseWait = "Please Wait!";
    workTitle = "Recent Works";
    workDetailsArray =
    [
        {
            workTitle: "Health Quest",
            workDescription: "It is a health related application",
            coverurl: "assets/sparsh_circular_black.png",
            screenshotArray: ["assets/sparsh_circular_black.png", "assets/sparsh_circular_black.png"],
            platform: "Android"

        },
        {
            workTitle: "Health Quest",
            workDescription: "It is a health related application",
            coverurl: "assets/sparsh_circular_black.png",
            screenshotArray: ["assets/sparsh_circular_black.png", "assets/sparsh_circular_black.png"],
            platform: "Android"
        },
        {
            workTitle: "Health Quest",
            workDescription: "It is a health related application",
            coverurl: "assets/sparsh_circular_black.png",
            screenshotArray: ["assets/sparsh_circular_black.png", "assets/sparsh_circular_black.png"],
            platform: "Android"

        },
        {
            workTitle: "Health Quest",
            workDescription: "It is a health related application",
            coverurl: "assets/sparsh_circular_black.png",
            screenshotArray: ["assets/sparsh_circular_black.png", "assets/sparsh_circular_black.png"],
            platform: "Android"

        },
        {
            workTitle: "Health Quest",
            workDescription: "It is a health related application",
            coverurl: "assets/sparsh_circular_black.png",
            screenshotArray: ["assets/sparsh_circular_black.png", "assets/sparsh_circular_black.png"],
            platform: "Android"

        },   {
            workTitle: "Health Quest",
            workDescription: "It is a health related application",
            coverurl: "assets/sparsh_circular_black.png",
            screenshotArray: ["assets/sparsh_circular_black.png", "assets/sparsh_circular_black.png"],
            platform: "Android"

        }

    ]

    aboutTitle = "About Me";
    somethingAboutMe = "My name is sparsh etc.";
    experience = "Experience";
    experienceDetailsArray = [{ name: "Benepik", post: "Sample Design" }, { name: "Benepik", post: "Sample Design" }, { name: "Benepik", post: "Sample Design" }]
    downLoadResume = "Download Resume";
    aboutWebSite = "About This WebSite";
    aboutWebSiteDescription = "This WebSite is made in angular 2 and sourcecode can be seen at github.com/sparsh/sparshgr8.com"
    aboutSocialDetailsArray = [{ path: "assets/github.png", link: "http://www.github.com/sparsh" },
    { path: "assets/so.png", link: "http://stackoverflow.com/users/3397757/sparsh" },
    { path: "assets/facebook.png", link: "https://www.fb.com/sparshj" },
    { path: "assets/linkedin.png", link: "https://www.linkedin.com/in/sparsh-jain-0b183ba6/" },
    { path: "assets/twitter.png", link: "https://twitter.com/sparshgr8" }]



    homeImageDetailsArray = [{ path: "assets/intro.png" },
    { path: "assets/occu.png" },
    { path: "assets/self.png" },
    ]

    contactTitle = "Contact Sparsh";
    contactMessageHeading = "Message";
    contactMessagehint = "Type Your Message Here";
    anonMessage = "Send anonymously ?";
    toolTipMessage = "If you dont wish to reveal your identity you can send the message anonymously";
    fullName = "Full Name";
    emailHeading = "Email";
    emailHint = "Your Email";
    submit = "Submit";
    error = "Slow connection please try again";
    contactSendSuccess = "Thanks For contacting Sparsh";
    validText = "Please Enter Valid"





}