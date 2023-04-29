let open = false;

document.querySelector('.js__support__chat').addEventListener('click', (e)=>{
    let target = e.target;
    let main  =target.closest('.js__support__chat__main');
    let header  =target.closest('.js__support__chat__header');

    if(target.closest('.js__support__chat__close')){
        main.classList.remove('support__chat__main__show');
        header.style.cursor = 'pointer';
        console.log("Yow")
        open = false;
    }else if(target.closest('.js__support__chat__header')){
        main.classList.add('support__chat__main__show');
        header.style.cursor = 'move';
        console.log("open");
        open = true;
    };

   
})

let  screenHeight = window.screen.height;
console.log(screenHeight)

function contentEditable(){
    const content = document.getElementById('message');
    const place_text = content.getAttribute('data-placeholder');
    console.log(place_text,content.innerHTML);
    content.innerHTML = place_text
    // content.innerHTML === '' && (content.innerHTML = place_text);
    content.addEventListener('focus', function (e) {
        const value = e.target.innerHTML;
        value === place_text && (e.target.innerHTML = '');
    });

    content.addEventListener('blur', function (e) {
        const value = e.target.innerHTML;
        value === '' && (e.target.innerHTML = place_text);
    });
}

var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
let w = 0;
let h = 0;
const ele = document.querySelector('.js__support__chat');
function mouseDown(){
    document.querySelector('.js__support__chat').addEventListener('mousedown',(e)=>{
       
      
        if(open == true){
            pos3 = e.clientX;
        pos4 = e.clientY;

        const styles = window.getComputedStyle(ele);
        w = parseInt(styles.width, 10);
        h = parseInt(styles.height, 10);
    
        // document.onmouseup = closeDragElement;
        // // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
        document.onmouseup = closeDragElement
        }
    });
}

function elementDrag(e) {
    // e = e || window.event;
    // e.preventDefault();
    // console.log(e.clientY, e.clientX )
    let dy = e.clientY-pos4
    console.log(dy);

    let elmnt = document.querySelector('.js__support__chat');
    // // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    console.log((-1*dy) + h);
    // pos2 = pos4 - e.clientY;
    // pos3 = e.clientX;
    // pos4 = e.clientY;
    // console.log(elmnt.offsetTop)
    // // set the element's new position:
    if((((-1*dy) + h)<screenHeight-130) && (((-1*dy) + h)>screenHeight-650)){
        elmnt.style.height = ((-1*dy) + h) + "px";
    }
    
    // elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }






document.addEventListener("DOMContentLoaded", ()=>{
    contentEditable()
    mouseDown()
})
