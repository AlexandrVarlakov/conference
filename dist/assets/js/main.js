let hamburger = document.querySelector('.hamburger');
let mobmenu = document.querySelector('.mob-menu');

let header = document.querySelector('.header');

let mobItems = document.querySelectorAll('.mob-menu__item');


function rollItems(itemsList){
    itemsList.forEach( (item) => {
        item.classList.remove('open');
    })
}



window.addEventListener('resize', function(event){
    if ( window.innerWidth > 1367){
        document.body.classList.remove('mobmenu-open');
        header.classList.remove('mobmenu-open');
        mobmenu.classList.remove('open');
    }
})


mobmenu.addEventListener('click', function(event){
    let clicked = event.target;

    

    if ( clicked.classList.contains('mob-menu__item') && ( clicked.querySelector('.mob-sub-menu') )  ){
        
        if (clicked.classList.contains('open') ){
            clicked.classList.remove('open');
        } else{
            rollItems(mobItems);
            
            clicked.classList.add('open');
        }
      
        

    } else {
        rollItems(mobItems);
    }


})



if ( hamburger && mobmenu){
    hamburger.onclick = function(){

        if ( mobmenu.classList.contains('open') ){
            mobmenu.classList.remove('open');
            document.body.classList.remove('mobmenu-open')
            header.classList.remove('mobmenu-open');
            rollItems(mobItems);
        } else{
            mobmenu.classList.add('open');
            document.body.classList.add('mobmenu-open');
            setTimeout(() => {
                header.classList.add('mobmenu-open');    
            }, 250);
            
        }
        
    }
}

let addFile = document.querySelectorAll('.add-file');
let inputFile = document.querySelectorAll('.file-input');


if ( inputFile ){
    inputFile.forEach( (input) => {
        input.onchange = function(){
            let fileContainer = input.parentElement;
            let btn = fileContainer.querySelector('.add-file');
            btn.dataset.file = input.files[0].name;


            let span = document.createElement('span');
            span.innerText = input.files[0].name;
            fileContainer.prepend(span);

        }
    })
}

if ( addFile ) {

    addFile.forEach( (btn) => {
        btn.onclick = function(e){

            if ( btn.hasAttribute('data-file') === false){
                let fileContainer = btn.parentElement;
            
                let fileInput = fileContainer.querySelector('.file-input');

                fileInput.click();
            } else {
                btn.removeAttribute('data-file');
                let fileContainer = btn.parentElement;
            
                let fileInput = fileContainer.querySelector('.file-input');
                fileInput.value = null;

                let span = fileContainer.querySelector('span');
                if (span){
                    span.remove();
                }
            }


            

        }
    })

}

let textApprove = document.querySelectorAll('.easyCheckbox__text');

if ( textApprove ){
    textApprove.forEach( (text) => {
        text.onclick = function(e){


            if ( e.target.tagName == 'a' || e.target.tagName == 'A'){
                
            } else {
                e.preventDefault();
            }
        }
    })
}

let inpApprove = document.querySelector('#approve');
let formSendBtn = document.querySelector('.sendform-btn');


if ( inpApprove ){
    if ( inpApprove.checked ){
        formSendBtn.removeAttribute('disabled');    
    } else{
        formSendBtn.setAttribute('disabled', 'disabled');
    }


    inpApprove.onchange = function(){
        if ( inpApprove.checked ){
            formSendBtn.removeAttribute('disabled');    
        } else{
            formSendBtn.setAttribute('disabled', 'disabled');
        }
    }
}

