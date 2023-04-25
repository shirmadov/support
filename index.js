

document.querySelector('.js__support__chat').addEventListener('click', (e)=>{
    let target = e.target;
    let main  =target.closest('.js__support__chat__main');

    if(target.closest('.js__support__chat__close')){
        main.classList.toggle('support__chat__main__show');
        console.log("Yow")
    }else{
        main.classList.toggle('support__chat__main__show');
    };

   
})

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

document.addEventListener("DOMContentLoaded", ()=>{
    contentEditable()

})
