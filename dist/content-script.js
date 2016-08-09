'use strict';

var elems = [];

var keywords = ['donald', 'trump', 'hillary', 'clinton', 'democrat', 'republican', 'president', 'gary', 'johnson', 'jill', 'stein'];

window.onload = function () {
    getNewsFeed();
};

window.onscroll = function () {
    getNewsFeed();
};
var element_count = 0;

function getNewsFeed() {

    var user_posts = document.getElementsByClassName("userContentWrapper");

    //If the user loaded more stories
    if (user_posts.length !== element_count) {
        if (element_count === 0) {
            elems = user_posts;
            element_count = user_posts.length;
            return;
        }
        console.log(element_count);
        //Only add new elements
        for (var i = element_count - 1; i < user_posts.length; i++) {
            console.log(user_posts[i]);
            console.log(elems);
            elems.push(user_posts[i]);
        }
    }
}
// window.setTimeout(function() {
//
//     // chrome.runtime.sendMessage({links: document.getElementsByTagName("a")});
// }, 5000);