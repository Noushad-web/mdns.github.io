let cursorDiv = document.querySelector('.cursor_div');
let menuDiv = document.querySelectorAll('.nav_items');
let profilePic = document.querySelector('.profile_pic');
let imgDiv = document.querySelector('.img_div');
let webWorld = document.querySelector('.anchor');



window.addEventListener('mousemove', cursorFun);

function cursorFun(e) {
    console.log(e.target);
    cursorDiv.style.left = e.pageX + "px";
    cursorDiv.style.top = e.pageY + "px";
    if (e.target === imgDiv ) {
        console.log('targeted');
        cursorDiv.style.backgroundColor = 'blue';
    } else {
        cursorDiv.style.backgroundColor = '';
    }
}

menuDiv.forEach(function (li) {
    li.addEventListener('mouseenter', () => {
        cursorDiv.classList.add('cursor_hover');
        
    });
    li.addEventListener('mouseleave', () => {
        cursorDiv.classList.remove('cursor_hover');
        
    });
});

profilePic.addEventListener('mouseenter', function (pic) { 
    cursorDiv.classList.add('cursor_hover');
});
profilePic.addEventListener('mouseleave', function (pic) { 
    cursorDiv.classList.remove('cursor_hover');
});

webWorld.addEventListener('mouseenter', function (link) { 
    cursorDiv.classList.add('cursor_hover');
});
webWorld.addEventListener('mouseleave', function (link) { 
    cursorDiv.classList.remove('cursor_hover');
});
// prompt();


