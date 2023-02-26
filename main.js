window.onload = function() {
  document.documentElement.scrollTop = 0;
}


let about = false;
let menu = false;
let contact = false;


const aboutDiv = document.querySelector('.main-about')
const menuDiv = document.querySelector('.main-menu')
const contactDiv = document.querySelector('.main-contact')

setTimeout(function () {

    
    window.onscroll = function() {
        const scrollTop = document.documentElement.scrollTop;
        console.log(document.documentElement.scrollTop)

        //! About
        if(scrollTop >= 442 && scrollTop < 550) {
            about = true
    
            if(about) About()
            else return
    
        } else {
            about = false
        }

        //* Menu
    
        if(scrollTop >= 1154 && scrollTop < 1200) {
            menu = true
    
            if(menu) Menu()
            else return
    
        } else {
            menu = false
        }
    
        //? Contact
    
        if(scrollTop >= 1900 && scrollTop < 2000) {
            contact = true
    
            if(contact) Contact()
            else return
    
        } else {
            contact = false
        }
    };
}, 1000)



const aboutJs = [
    `
            <div class="about-image">
                <img src="https://www.w3schools.com/w3images/tablesetting2.jpg" alt="">
            </div>
            <div class="about-content">
                <h2 class="about-title">About Catering</h2>
                <br>
                <h4 class="about-stitle">Tradition since 1889</h4>
                <div class="about-desc">
                    <p class="about-mdesc">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span>seasonal</span> ingredients.</p>
        
                <p class="about-sdesc">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
`,
]
const menuJs = [
    `

        <div class="menu-image">
            <img src="https://www.w3schools.com/w3images/tablesetting.jpg" alt="">
        </div>
        <div class="menu-content">
            <h2 class="menu-title">Our Menu</h2>
            <div class="menu-desc">
                <p class="menu-mdesc">Bread Basket</p>
                <p class="menu-sdesc">Assortment of fresh baked fruit breads and muffins 5.50</p>
            </div>
            <div class="menu-desc">
                <p class="menu-mdesc">Honey Almond Granola with Fruits</p>
                <p class="menu-sdesc">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
            </div>

            <div class="menu-desc">
                <p class="menu-mdesc">Belgian Waffle</p>
                <p class="menu-sdesc">Vanilla flavored batter with malted flour 7.50</p>
            </div>

            <div class="menu-desc">
                <p class="menu-mdesc">Scrambled eggs</p>
                <p class="menu-sdesc">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50
                </p>
            </div>

            <div class="menu-desc">
                <p class="menu-mdesc">Blueberry Pancakes</p>
                <p class="menu-sdesc">With syrup, butter and lots of berries 8.50</p>
            </div>
    </div>
`,
]
const contactJs = [
    `
            <h2 class="contact-title">Contact</h2>
            <p class="contact-desc">We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.</p>
            <p class="contact-desc">Do not hesitate to contact us.</p>
            <p class="contact-address">Catering Service, 42nd Living St, 43043 New York, NY</p>
            <p class="contact-address-more">You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
            <form action="" class="contact-form">
                <div class="form-input">
                    <input type="text" placeholder=" ">
                    <label for="">Name</label>
                </div>
                <div class="form-input">
                    <input type="text" placeholder=" ">
                    <label for="">How many people</label>
                </div>
                <div class="form-input">
                    <input type="text" placeholder=" ">
                    <label for="">11/06/2020 08:00 PM</label>
                </div>
                <div class="form-input">
                    <input type="text" placeholder=" ">
                    <label for="">Message \ Special requirements</label>
                </div>
              

            </form>
            <div class="contact-btn"><button >SEND MESSAGE</button></div>
`,
]


function About() {
    aboutDiv.innerHTML = aboutJs.join('')
}
function Menu() {
    menuDiv.innerHTML = menuJs.join('')
}
function Contact() {
    contactDiv.innerHTML = contactJs.join('')
}