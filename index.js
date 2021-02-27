function createHeart(){
    const section = document.querySelector('section');
    const createEle = document.createElement('span');
    var size = Math.random() * 60 ;

    createEle.style.width = 20 + size + 'px';
    createEle.style.height = 20 + size + 'px';
    createEle.style.left = Math.random() * innerWidth + 'px' ;
    section.appendChild(createEle);

    setTimeout(() => {
       createEle.remove() 
    }, 4000);

} 

setInterval(createHeart , 100);