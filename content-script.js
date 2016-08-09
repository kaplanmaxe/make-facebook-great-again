let elems = [];

const keywords = ['donald','trump','hillary','clinton','democrat','republican','president','gary','johnson','jill','stein'];

window.onload = function() {
    getNewsFeed();
}

window.onscroll = function() {
    getNewsFeed();
}
let element_count = 0;

function getNewsFeed() {
    let user_posts = document.querySelectorAll('[class$=" userContent"]');
    console.log(user_posts.length);
    // let user_posts = document.getElementsByClassName("userContentWrapper");
    //If the user loaded more stories
    if (user_posts.length !== element_count) {
        console.log("HERE");
        //Update element_count to number of posts on page

        if (element_count===0) {
            elems = user_posts;
            element_count = user_posts.length;
            return;
        }
        else {
            element_count = user_posts.length;
        }
        //Loop through new stories and add them to elems
        for (let i=element_count;i<user_posts.length;i++) {
            elems.push(user_posts[i]);
            console.log(elems);
        }
    }

}
// window.setTimeout(function() {
//
//     // chrome.runtime.sendMessage({links: document.getElementsByTagName("a")});
// }, 5000);
