const items = document.querySelectorAll('#about-e li');

const isInViewPort = item =>{
    const rect = item.getBoundingClientRect();
    return (rect.top >= 0 &&
    rect.left >= 0 && 
    rect.bottom <= 
    (window.innerHeight || document.documentElement.clientHeight) && 
    rect.right <= 
    (window.innerWidth || document.documentElement.clientWidth));
};


const run = ()=>{
    items.forEach(item =>{
        if(isInViewPort(item)){
            item.classList.add('show');
        }
    });
}

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);