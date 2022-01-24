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