let elems = [];

const keywords = ['tax','donald','trump','hillary','clinton','democrat','republican','president','gary','johnson','jill','stein'];

window.onload = function() {
    getNewsFeed();
}

window.onscroll = function() {
    getNewsFeed();
}
let element_count = 0;

function getNewsFeed() {
    let user_posts = document.querySelectorAll('[data-testid="fbfeed_story"]:not([data-mfga="true"])');
    //Wait for story to load
    setTimeout(function() {
        markedAsChecked(user_posts);
    },500);
}
function markedAsChecked(elems) {
    //If no new elements, dont do anything
    if (!elems) {
        return;
    }
    for (let i=0;i<elems.length;i++) {
        let story_text = elems[i].innerText.toLowerCase();
        let match = false;
        //Now search story_text against politics keywords
        for (let j=0;j<keywords.length;j++) {
            if (story_text.indexOf(keywords[j]) > -1) {
                match = true;
                console.log("HERE");
                console.log(story_text);
                console.log(keywords[j]);
                //Change the text of this post because it containts a keyword
                // changeStoryText(elems[i]);
                changeWholeDiv(elems[i]);
                elems[i].setAttribute('data-mfga','true');
                return;
            }
        }
        //Element did not contain a keyword. Mark as searched
        elems[i].setAttribute('data-mfga','true');
        return;
    }

}

function changeWholeDiv(elem) {
    elem.innerHTML = `
        <style>
        #container {
          background-color:#fff;
          padding-left:10px;
          padding-top:2px;
          margin-bottom:10px;
        }
        .image-container {
            position:relative;
            overflow:hidden;
            width:476px;
            height:auto;
        }
        .scaled-image {
            height:auto;
            width:100%;
        }
        .story-text {
            font-size:16px;
            color:red;
        }
        </style>

        <div id="container">
            <p class="story-text">Politics is BORING! Beer is not. No worries, Make Facebook Great Again blocked this post about politics.</p>
            <div class="image-container">
                <img
                    src="http://www.budweiser.com/en/home/_jcr_content/contentPar/grid_0/g31/embedvideo.img.png/1720-BudUS-JKRAmeriCan-Resize-800x500.png"
                    class="scaled-image"
                />
            </div>
        </div>`;
}
