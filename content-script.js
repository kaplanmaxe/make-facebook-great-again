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
    let user_posts = document.querySelectorAll('[data-testid="fbfeed_story"]');
    console.log(user_posts.length);
    // let user_posts = document.getElementsByClassName("userContentWrapper");
    //If the user loaded more stories
    if (user_posts.length !== element_count) {
        //Update element_count to number of posts on page

        if (element_count===0) {
            elems = user_posts;
            element_count = user_posts.length;
            changeStoryText(elems);
            return;
        }
        // else {
        //     element_count = user_posts.length;
        // }
        console.log(element_count + " " + user_posts.length);
        //Loop through new stories and add them to elems
        for (let i=element_count;i<user_posts.length;i++) {
            // elems.push(user_posts[i]);
            elems[i] = user_posts[i];
            element_count++;
        }
        console.log(elems);
        changeStoryText(elems);
        return;
    }
}
function changeStoryText(nodes) {
  for (let i=0;i<nodes.length;i++) {
    nodes[i].childNodes[0].innerText = "DONALD TRUMP SUCKS!";
  }
}
// window.setTimeout(function() {
//
//     // chrome.runtime.sendMessage({links: document.getElementsByTagName("a")});
// }, 5000);
