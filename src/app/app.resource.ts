

export class Resource {

    colors = ["#80CBC4", "#FFCC80", "#FFAB91", "#9FA8DA", "#BCAAA4"];
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


    aboutTitle = "About Me";
    somethingAboutMe = "Hello! My Name is Sparsh Jain! I live In New Delhi, India. I am a Software Developer who"
    + " enjoyes developing web and mobile application. Till Now I have developed <b>6 Native Android Application</b>,"
    + "<b> 2 Applications In Angualr 2 </b>and <b>2 application in hybrid mobile technology</b>.<br>"
    + " I have developed application in different categories, starting from <b>discounting application,"
    + " e-commerce, Health related application to professional Banking Application</b> "
    + " It's been 3 years since I have developed My first application on windows mobile operating system."
    + " I have been awarded by Microsoft India App Review Board for my contribution on Improving the quality of application stored in Windows Store. <br>"
    + " I have done my bachelor degree in Computer Science and Engineering from HMRITM in 2015, an Institute Affiliated to GGSIP University, Delhi. ";

    experience = "Experience";
    experienceDetailsArray = [{ name: "Benepik", post: "Project Manager" }, { name: "Appsquadz", post: "Software Developer" }]
    downLoadResume = "Download Resume";
    aboutWebSite = "About This WebSite";
    aboutWebSiteDescription = "This website was built responsively using Angular 2, HTML5, CSS.For backed and hosting I am using Firebase. Fonts are served through Google Fonts. <br>"
    + " For learning purpose I have uploaded the source code of the project on github, the source can be found at<a target='_blank' href='https://github.com/sparsh/sparshgr8.com'> this</a> link."
    + " For uploading and updating the data on this website I have made an <b>Admin Android Application</b>, which I use to edit the work details.<br>"
    + " I will be adding more fetures like push notification on contact form submission in near future, For push notitifcation Firebase will be used as it is fast and easy to use, Firebase also provides a console for getting details of earlier push notitfications."
    + "<br> In next version of this website I am planning to add a blogger tab, In which I can post Stories about latest technologies, I am also planning to add video tutorials on this website in near future.";
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
    platforms = "Platforms - "




}