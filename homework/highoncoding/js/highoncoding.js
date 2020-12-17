//nav anchors

var navA1 = document.createElement('a')
navA1.textContent = 'High on Coding'
navA1.setAttribute('class', 'nav-link active display-3 whiteText')


var navA2 = document.createElement('a');
navA2.textContent = 'Home';
navA2.setAttribute('class', 'nav-link whiteText');


var navA3 = document.createElement('a');
navA3.textContent = 'Categories';
navA3.setAttribute('class', 'nav-link active whiteText');



//divs for nav bar

var div1 = document.createElement('div')
div1.setAttribute('class', 'd-flex h=100 w-100 align-items-center justify-content-start');


var div2 = document.createElement('div')
div2.setAttribute('class', 'd-flex h=100 w-100 align-items-center justify-content-center');


//appending anchors to nav divs

div1.appendChild(navA1);

div2.appendChild(navA2);
div2.appendChild(navA3);


//creating nav element


var nav = document.createElement('nav');
nav.setAttribute('class', 'nav justify-content-center myBG header position-relative top');

nav.appendChild(div1);
nav.appendChild(div2);


//appending nav to parent div

var parDiv = document.createElement('div');
parDiv.setAttribute('class', 'container-fluid p-0');


//appending navbar to body

var body = document.querySelector('body');
body.appendChild(parDiv);
body.appendChild(nav);






// header tags

var header1 = document.createElement('h2');
header1.textContent = 'Curse of the Current Reviews'



var header2 = document.createElement('h3');
header2.textContent = 'When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right colum of your webpage. Their choice is dependent on three important factors: price, screenshot, and reviews.';

header2.textContent = 'Hello WatchKit';
header2.setAttribute('class', 'blueText');




var header3 = document.createElement('h3');

header2.textContent = 'Introduction to Swift';
header2.setAttribute('class', 'blueText');


//creating main divs


var mainDiv1 = document.createElement('div');
mainDiv1.setAttribute('class', 'row m-0 grayBG curse')
mainDiv1.appendChild(header1);
mainDiv1.textContent = 'When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right colum of your webpage. Their choice is dependent on three important factors: price, screenshot, and reviews.';




var mainDiv2 = document.createElement('div');
mainDiv2.setAttribute('class', 'row m-0 whiteSection');
mainDiv2.appendChild(header2);
mainDiv2.textContent = 'Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enables the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.';



var mainDiv3 = document.createElement('div');
mainDiv3.setAttribute('class', 'row m-0 orangeBG reviews');
mainDiv3.innerHTML = '12 Comments <br> 144 Likes';




var mainDiv4 = document.createElement('div');
mainDiv4.setAttribute('class', 'row m-0 whiteSection');
mainDiv4.appendChild(header3);
mainDiv4.textContent = 'Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and is still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.';



var mainDiv5 = document.createElement('div');
mainDiv5.setAttribute('class', 'row m-0 orangeBG reviews');
mainDiv5.innerHTML = '15 comments <br> 45 likes';



//creating container div

var mainMainDiv = document.createElement('div');
mainMainDiv.setAttribute('class', 'container-fluid p-0');


//appending divs to main div

mainMainDiv.appendChild(mainDiv1);
mainMainDiv.appendChild(mainDiv2);
mainMainDiv.appendChild(mainDiv3);
mainMainDiv.appendChild(mainDiv4);
mainMainDiv.appendChild(mainDiv5);


//creating main tag

var main = createElement('main');



//attaching daddyDiv to main tag

main.appendChild(mainMainDiv);


//attaching main tag to body

body.appendChild(main);