let elems = [];

const keywords = ['tax','donald','trump','hillary','clinton','democrat','republican','president','bernie','GOP','liberal','obama'];
const images = [
  "https://2.bp.blogspot.com/-hz7uWhSfa2o/Vb2RvVle_PI/AAAAAAAABoE/OJWWVX0B14g/s1600/We%2BSampled%2B10%2BDifferent%2BImported%2BBeers%2Band%2BHere%2BAre%2BOur%2BFavorites%2B-%2BBlue%2BMoon%2BBeer.jpg",
  "http://www.budweiser.com/en/home/_jcr_content/contentPar/grid_0/g31/embedvideo.img.png/1720-BudUS-JKRAmeriCan-Resize-800x500.png",
  "https://molloys.ie/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/c/o/corona_extra_330ml_large.png",
  "https://www.wired.com/wp-content/uploads/2015/12/bud-light-1200x601.jpg",
  "https://a57.foxnews.com/global.fncstatic.com/static/managed/img/876/493/ewrweewr35434554343.jpg?ve=1&tl=1",
  "https://www.sweetwater420fest.com/wp-content/uploads/sweetwater-cans-768x496.jpg",
  "https://s-media-cache-ak0.pinimg.com/564x/d7/d4/70/d7d47027d75dbf36ba4dc7c7d8cd2171.jpg",
  "https://beermasters.files.wordpress.com/2014/04/20120404_c3390_photo_en_11974.jpg",
  "https://www.owliquors.com/image/cache/data/beer/shock-top/shock-top-belgian-white-bottle-500x500.jpg"
];
window.onload = function() {
    getNewsFeed();
}

window.onscroll = function() {
    getNewsFeed();
}

function getNewsFeed() {
    let user_posts = document.querySelectorAll('[data-testid="fbfeed_story"]:not([data-mfda="true"])');
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
        //Now search story_text against politics keywords
        for (let j=0;j<keywords.length;j++) {
            if (story_text.indexOf(keywords[j]) > -1) {
                console.log(story_text);
                console.log(keywords[j]);
                //The order of the changed facebook post
                const count = document.querySelectorAll('.container').length;
                //Set count of changed fb post
                elems[i].setAttribute('data-count',count);
                //Save the original HTML with button
                elems[i].setAttribute('data-original',elems[i].innerHTML);
                //Change the text of this post because it containts a keyword
                changeWholeDiv(elems[i],count);
                //Mark as searched
                return elems[i].setAttribute('data-mfda','true');
            }
        }
        //Element did not contain a keyword. Mark as searched
        return elems[i].setAttribute('data-mfda','true');
    }
}
//Changes div text to beer post
function changeWholeDiv(elem,count) {
    elem.innerHTML = generateBeerHtml(count);
    //Set data-showing to beer because it is showing the beer post
    elem.setAttribute('data-showing','beer');
    //Add event listener for each button. Cannot use onclick because cannot
    //access functions inside chrome extensions
    const button = document.getElementById(`button${count}`);
    return addButtonListener(button,elem,count);
}

//Adds listener to button to either set back to original or beer post
function addButtonListener(button,container,count) {
    button.addEventListener("click", function() {
        if (container.dataset.showing === "beer") {
            const button_row = `<div class="action-button">
                <button id='button-revert${count}'>Cover this with beer</button>
            </div>`;
            container.innerHTML = button_row + container.dataset.original;
            //Have to add button listener here for this button
            container.setAttribute('data-showing','original');
            return addButtonListener(document.getElementById(`button-revert${count}`),document.querySelector('[data-count="' + count + '"'),count);

        }
        else {
            container.innerHTML = generateBeerHtml(count);
            container.setAttribute('data-showing','beer');
            return addButtonListener(document.getElementById(`button${count}`),document.querySelector('[data-count="' + count + '"'),count);
        }
    });
}
//Generates the html to replace the fb post with beer
function generateBeerHtml(count) {
    return `
        <style>
        .container {
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
        .action-button {
          text-align:right;
        }
        </style>

        <div class="container">
            <div class="action-button">
                <button id='button${count}'>Show Original Post</button>
            </div>
            <p class="story-text">Politics is BORING! Beer is not. No worries, Make Facebook Drunk Again blocked this post about politics.</p>

            <div class="image-container">
                <img
                    src="${randomImage()}"
                    class="scaled-image"
                />
            </div>
        </div>`;
}
//Returns random image of beer
function randomImage() {
  return images[Math.floor(Math.random() * images.length)];
}
