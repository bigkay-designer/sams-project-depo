let log = console.log;
let navBars = $('.small-sc-bar')
let burgerMenu = $('.menu')
let closeMenu = $('.burger-close')
let subnavContent = document.querySelectorAll('.subnav-content')
let subnavBtn = document.querySelectorAll('.subnav-btn')
let showSubNav = document.querySelectorAll('.right-arrow i')
let backArrow = document.querySelectorAll('.back-arrow')
let transparent = document.querySelectorAll('.transparent')


$(burgerMenu).on('click', e => {
    $(navBars).slideToggle(200);
    $(burgerMenu).css('display', 'none')
    log(navBars)

});

//close
$(closeMenu).on('click', e => {
    $(navBars).slideUp(150)
    $(burgerMenu).slideToggle(200)
})
// transparent div close navbars
$(transparent).on('click', e=>{
    $(navBars).slideUp(100)
    $(burgerMenu).slideDown(250)
})

///show sun nav
showSubNav.forEach(arrows=>{
    arrows.addEventListener('click', e => {
        let subBtn = e.target.parentElement.parentElement
        $(subnavBtn).slideToggle(200)
        let content = e.target.parentElement.parentElement.nextSibling.nextSibling
        $(content).slideToggle(150)
    })
})

/// sub nav back arrow
backArrow.forEach(backArrow=> {
    backArrow.addEventListener('click', mainMenu);
})
function mainMenu() {
    $(subnavContent).css('display', 'none')
    $(subnavBtn).slideToggle(200)
}



// let downArrow = document.querySelectorAll('.down-arrow')

// downArrow.forEach(downArrow=>{
//     downArrow.addEventListener('click', e=>{
//         let subcontent = e.target.parentElement.nextSibling.nextSibling
//         $(subcontent).slideToggle(500)
//         if(!subcontent){
//             $(subcontent).slideUp(500)
//         }
//     })

// })

// ======================================//
let slides = 0
slideShow()

function slideShow() {
    let mySlides = document.querySelectorAll('.my-slides')
    for(let i = 0; i < mySlides.length; i++){
        mySlides[i].style.display = 'none'
    }
    slides++
    if(slides > mySlides.length){
        slides =1
    }
    $(mySlides[slides - 1]).css('display', 'block')
    setTimeout(slideShow, 2500)
}

/////////////////// Admin /////////////////////////////

// // btns
let manageUserBtn = $('.manage-user-btn')

// section manage post btns
let addPostBtn = $('.add-post-btn')
let managePostBtn = $('.manage-post-btn')

// sections
let addPost = $('.add-post')
let managePost = $('.manage-post')
let manageUser = $('.manage-user-section')

//addpost section display none
$(addPost).css('display', 'none')

// section togle
$(managePostBtn).on('click', e => {
    $(addPost).slideUp(1000)
    $(managePost).slideDown(1000)

})
$(addPostBtn).on('click', e => {
    $(managePost).slideUp(1000)
    $(addPost).slideDown(1000)
    
})


/////////// ckeditor
ClassicEditor
    .create( document.querySelector( '#body' ), {
        toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
            ]
        }
    } )
    .catch( error => {
        console.log( error );
    } );

    CKEDITOR.replace( 'body', {
        height: 400
    } );