// Creating Random Numbers
function createRandomNums(num) {
    return (Math.floor(Math.random() * num))
}


// GET RANDOMS NAMES
async function randomNames() {
    let res = await fetch('MOCK_DATA.json')
    return await res.json()
}

// Creating STORY CARD TO STORY CONTAINER
async function createStoryCards() {
    const storyContainer = document.querySelector(".story-container")

    let count = 20

    // Creating new div element

    for (let i = 0; i < count; i++) {

        const randomNo = createRandomNums(1000)
        const newRandNo = createRandomNums(300)
        const randomName = await randomNames()

        const storyCard = document.createElement("div")
        storyCard.classList.add('story-card')
        storyCard.innerHTML =
            `
        <div class="img-con active-story">
            <img
            src="https://picsum.photos/60?random=${randomNo}"/>
            </div>
            <div class="owner-name">${randomName[newRandNo].first_name}</div>
            `
        storyContainer.append(storyCard)
    }
    storyImgContainerDisplay()
}

// CREATING FEED CARDS 
async function createFeedCard() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    const feedStoryCon = document.querySelector(".feed-card-container")
    const randomName = await randomNames()

    const count = 25

    for (let i = 0; i < count; i++) {

        const imgRandomNum = createRandomNums(500)
        const proRandomNum = createRandomNums(800)
        const randomNumFeed = createRandomNums(200)

        const likes = createRandomNums(8000)
        const comments = createRandomNums(500)
        let timeDay = createRandomNums(6)
        if (timeDay == 0)
            timeDay = 1

        const newFeedCard = document.createElement("div")
        newFeedCard.classList.add('feed-card')
        newFeedCard.innerHTML =
            `
            <div class="header-div">
        <div class="img-container">
            <img
            src="https://picsum.photos/450/250?random=${proRandomNum}"
            alt=""
            class="small-img-icon"
            />
            </div>
            <h4 class="feed-name">${randomName[randomNumFeed].first_name}</h4>
            <i class="fa fa-light fa-ellipsis-vertical"></i>
            </div>
            
            <div class="feed-img-con">
            <img
            src="https://picsum.photos/450/250?random=${imgRandomNum}"
            alt=""
        />
        </div>

        <div class="post-control-div">
        <div class="ico-left">
            <i class="fa fa-thin fa-heart heartReact non-active"></i>
            <i class="fa-regular fa-comment"></i>
            <i class="fa-solid fa-paper-plane"></i>
            </div>
            <i class="fa-regular fa-bookmark"></i>
            </div>
        
            <div class="feed-card-info">
            <p class="likes-div"><span>${likes}</span> likes</p>
            <p class="feed-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            eum, tenetur ipsum, vitae quod facilis fugiat
            </p>
            <p class="comment-div">view all ${comments} comments</p>
            <p class="time-div">${timeDay} days ago</p>
            </div>
            `
        feedStoryCon.append(newFeedCard)
    }
    loveReact()

}

// LOVE REACT FUNCTION WITH LIKES INCRASE FEATURE
function loveReact() {
    const loveReacts = document.querySelectorAll('.heartReact')
    // LOVE REACT
    loveReacts.forEach(loveReact => {
        loveReact.addEventListener('click', (e) => {
            let likes = e.currentTarget.parentNode.parentNode.nextElementSibling.children[0].children[0].innerHTML

            if (e.currentTarget.classList.contains("non-active")) {

                e.currentTarget.classList.add("scale-up")

                e.currentTarget.parentNode.parentNode.nextElementSibling.children[0].children[0].innerHTML = Number(likes) + 1

                e.currentTarget.classList.remove("non-active")
            } else {

                e.currentTarget.classList.remove("scale-up")

                e.currentTarget.classList.add("non-active")

                e.currentTarget.style.color = "#fff"

                e.currentTarget.parentNode.parentNode.nextElementSibling.children[0].children[0].innerHTML = Number(likes) - 1
            }

        })
    })
}


const searchResult = document.querySelector(".scarch-inner-div")
// CREATING RESULT SEARCH CARD
function createSearchCard() {

    document.body.scrollTop = document.documentElement.scrollTop = 0;
    const count = 90

    for (let i = 0; i < count; i++) {

        let randImgNo = createRandomNums(900)

        const newSearchCard = document.createElement("div")
        newSearchCard.classList.add("result-cards")
        newSearchCard.innerHTML =
            `
        <img src="https://picsum.photos/180?random=${randImgNo}" />
        `

        searchResult.append(newSearchCard)
    }
}
document.querySelector("#mag-glass").addEventListener('click', createSearchCard)


// CREATE PRIMARY MSG SECTION
async function createPrimaryMsgSection() {

    scrollTo0()
    const PrimaryMsgDiv = document.querySelector(".primary-msg-section")

    const count = 20
    for (let i = 0; i < count; i++) {
        let randImgNo = createRandomNums(30)
        let nameRandNo = createRandomNums(299)
        let timeRandNo = createRandomNums(12)
        const randomName = await randomNames()

        const newPrimaryMsg = document.createElement("div")
        newPrimaryMsg.classList.add("msg-div")

        if (timeRandNo == 0) {
            timeRandNo = "9"
        }

        let txt = ''
        if (i == 0 || i == 1) {
            txt = `${timeRandNo} new messages • 1h`
            newPrimaryMsg.classList.add('active-msg')
        }
        else {
            txt = `Active ${timeRandNo}h ago`
        }

        newPrimaryMsg.innerHTML = `
        <div class="msg-div padding-15">
        <div class="msf-div-img-con">
        <img src="https://picsum.photos/180?random=${randImgNo}" class="msg-div-img">
      </div>
      <div class="msg-div-msg">
        <p class="sender-name">${randomName[nameRandNo].first_name} ${randomName[nameRandNo].last_name}</p>
        <p class="sending-time">${txt}</p>
      </div>
      <div class="msg-notification-cir"></div>
      <i class="fa fa-solid fa-camera"></i>
      </div>
        `

        PrimaryMsgDiv.append(newPrimaryMsg)
    }
}
const msgIco = document.querySelector(".msg-ico")
msgIco.addEventListener('click', createPrimaryMsgSection)
msgIco.addEventListener('click', () => {
    document.querySelector(".bottom-icon-con").style.display = "none"
})


// document.querySelector("#pro-ico").addEventListener('click', createPostImg)
createPostImg()

// STORY IMG FUNCTION

let i = 2
const storyImgProgressBar = document.querySelector(".progress-bar-front")
function storyProgressBar() {
    storyImgProgressBar.style.width = `${i}%`
    i++
    if (i <= 100) {
        const barTime = setTimeout(storyProgressBar, 150)
    }
}

function toogleDisplayFunc() {
    const storyImgContainer = document.querySelector(".story-img-container")
    storyImgContainer.classList.toggle("dis-block")
    const storyTime = setTimeout(() => {
        storyImgContainer.classList.toggle("dis-block")
        i = 2
        document.querySelector(".story-img-inner-container").removeChild(newBodyContent)
    }, 15000)
    storyProgressBar()
}

// NEW IMG BODY ELEMENT
const newBodyContent = document.createElement("div")

function storyImgContainerDisplay() {
    const storyCards = document.querySelectorAll(".story-card")
    storyCards.forEach(storyCard => {
        storyCard.addEventListener('click', (e) => {
            toogleDisplayFunc()


            const randImgStory = createRandomNums(298)

            const ownerName = e.currentTarget.children[1].innerHTML
            const ownerImg = e.currentTarget.children[0].children[0].src

            newBodyContent.classList.add("img-con-body")
            newBodyContent.innerHTML = `
            <div class="header-div z-2">
            <div class="img-container">
                <img
                src="${ownerImg}"
                alt=""
                class="small-img-icon"
                />
                </div>
                <h4 class="feed-name">${ownerName} <span class="storyTime">2h</span></h4>
                
                <i class="fa fa-light fa-ellipsis-vertical"></i>
                </div>
                <img src="https://picsum.photos/500/888?random=${randImgStory}" alt="" class="storyImgBgImg">

                <div class="bottom-input-box">
                <input type="text" class="bottomInput" placeholder="send message">
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-paper-plane"></i>
              </div>
            `
            document.querySelector(".story-img-inner-container").append(newBodyContent)
        })
    })
}

// Making THE BOTTOM ICO CONTAINER DISPLAY FLEX
document.querySelector(".msg-logo .fa-arrow-left").addEventListener('click', () => {
    document.querySelector(".bottom-icon-con").style.display = "flex"
})

// SCROLL TO TOP FUNCTION
function scrollTo0() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

// TABS CHANGING FUNCTION
const mainTabs = document.querySelectorAll("[data-tab-target]")
const tabsContent = document.querySelectorAll("[data-tab-content]")

mainTabs.forEach(tab => {
    tab.addEventListener('click', () => {

        const target = document.querySelector(tab.dataset.tabTarget)

        tabsContent.forEach(tabcontent => {
            tabcontent.classList.remove('active')
        })
        target.classList.add('active')
    })
})

// MSG TAB CHANGING
const msgTabs = document.querySelectorAll("[data-tabs-target]")
const msgTabsContent = document.querySelectorAll("[data-tabs-content]")

msgTabs.forEach(msgTab => {
    msgTab.addEventListener('click', (e) => {
        const target = document.querySelector(msgTab.dataset.tabsTarget)
        const leftPer = e.currentTarget.getAttribute("data-left")

        msgTabs.forEach(msgTab => {
            msgTab.classList.remove("active-border")
        })

        msgTabsContent.forEach(msgTabContent => {
            msgTabContent.classList.remove("dis-active")
            msgTab.classList.remove("active-border")
        })
        target.classList.add("dis-active")
        msgTab.classList.add("active-border")

        document.querySelector('.border-div').style.left = `${Number(leftPer) * 33.3}%`
    })
})



// Profile Section tabs bottom bar 

const bottomBar = document.querySelector(".bottom-bar")

const proTabs = document.querySelectorAll("[data-i-target]")
const proTabSecs = document.querySelectorAll("[data-i-content]")

proTabs.forEach(profileTab => {
    profileTab.addEventListener('click', (e) => {
        const leftPer = e.currentTarget.getAttribute("data-index")

        const target = document.querySelector(profileTab.dataset.iTarget)

        proTabSecs.forEach(proTabSec => {
            proTabSec.classList.remove("active")
        })

        target.classList.add("active")

        bottomBar.style.left = `${leftPer * 25}% `

    })
})

// Creating Post Image 
function createPostImg() {
    const count = 10
    for (let i = 0; i < count; i++) {
        const randomNum = createRandomNums(900)

        const newPostImgEle = document.createElement("div")
        newPostImgEle.classList.add("pro-post-img-con")
        newPostImgEle.innerHTML = `
        <img src="https://picsum.photos/${randomNum}" alt="">
        `

        document.querySelector(".post-inner-con-pro").append(newPostImgEle)
    }
}


// Cretaing Reels img
function createReelsPost() {
    let count = 6
    for (let i = 0; i < count; i++) {

        const randomNum = createRandomNums(5000)
        const newReelsPost = document.createElement("div")
        newReelsPost.classList.add("reels-post")
        newReelsPost.innerHTML =
            `
        <i class="fa-brands fa-square-instagram"></i>
        <img src="https://picsum.photos/180?random=${randomNum}" alt="">
        
        <div class="play-icon">
          <i class="fa fa-play"></i>
          <span>${randomNum}</span>
        </div>
        `

        document.querySelector(".reels-div").append(newReelsPost)
    }

}
document.querySelector(".profile-tabs-section .fa-square-instagram").addEventListener('click', createReelsPost)

// Cretaing Videp img
function createVideoPost() {
    let count = 10
    for (let i = 0; i < count; i++) {

        const randomNum = createRandomNums(5000)
        const newReelsPost = document.createElement("div")
        newReelsPost.classList.add("reels-post")
        newReelsPost.innerHTML =
            `
        <img src="https://picsum.photos/180?random=${randomNum}" alt="">
        
        <div class="play-icon">
          <i class="fa fa-play"></i>
          <span>${randomNum}</span>
        </div>
        `

        document.querySelector(".video-div").append(newReelsPost)
    }

}
document.querySelector(".profile-tabs-section .fa-play").addEventListener('click', createVideoPost)


window.addEventListener('load', createStoryCards)
window.addEventListener('load', createFeedCard)
// window.addEventListener('load', createSearchCard)
