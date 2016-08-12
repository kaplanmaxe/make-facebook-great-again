let elems = [];

const keywords = ['tax','donald','trump','hillary','clinton','democrat','republican','president','gary','johnson','jill','stein'];
const images = [
  "http://2.bp.blogspot.com/-hz7uWhSfa2o/Vb2RvVle_PI/AAAAAAAABoE/OJWWVX0B14g/s1600/We%2BSampled%2B10%2BDifferent%2BImported%2BBeers%2Band%2BHere%2BAre%2BOur%2BFavorites%2B-%2BBlue%2BMoon%2BBeer.jpg",
  "http://www.budweiser.com/en/home/_jcr_content/contentPar/grid_0/g31/embedvideo.img.png/1720-BudUS-JKRAmeriCan-Resize-800x500.png",
  "http://www.anderooney.com/wp-content/uploads/2015/11/CoorsLightCan.jpg",
  "https://molloys.ie/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/c/o/corona_extra_330ml_large.png",
  "http://www.wired.com/wp-content/uploads/2015/12/bud-light-1200x601.jpg",
  "http://a57.foxnews.com/global.fncstatic.com/static/managed/img/876/493/ewrweewr35434554343.jpg?ve=1&tl=1",
  "http://www.sweetwater420fest.com/wp-content/uploads/sweetwater-cans-768x496.jpg",
  "https://s-media-cache-ak0.pinimg.com/564x/d7/d4/70/d7d47027d75dbf36ba4dc7c7d8cd2171.jpg",
  "https://beermasters.files.wordpress.com/2014/04/20120404_c3390_photo_en_11974.jpg",
  "http://vignette4.wikia.nocookie.net/beer/images/2/20/Sam.jpg/revision/latest?cb=20130812031000",
  "https://www.owliquors.com/image/cache/data/beer/shock-top/shock-top-belgian-white-bottle-500x500.jpg"
];
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
                    src="${randomImage()}"
                    class="scaled-image"
                />
            </div>
        </div>`;
}

function randomImage() {
  const random = Math.floor(Math.random() * images.length);
  return images[10];
  // return images[random];
}
