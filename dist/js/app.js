class Typewriter{
    constructor(el, words, wait = 3000){
        this.el = el;
        this.words = words;
        this.wait = wait;
        this.txt = '';
        this.isDeleting = false;
        this.index = 0;
        this.type();
    }

    type(){
        
        const i = this.index % this.words.length;
        const fullWord = this.words[i];        

        if(this.isDeleting){ // this.isDeleting = ture
            // Let Delete
            this.txt = fullWord.substring(0, this.txt.length - 1);
        }else{ // this.isDeleting = false
            // Let Write
            this.txt = fullWord.substring(0, this.txt.length + 1);
        }
        
        // Insert txt into el
        this.el.innerHTML = `<span class="typing">${this.txt}</span>`;

        // Set typeSpeed
        let typeSpeed = 300;
        if(this.isDeleting){
            typeSpeed /= 2;
        }

        // text is completed
        if(!this.isDeleting && this.txt === fullWord){ // setup for del
            this.isDeleting = true;
            typeSpeed = this.wait;
        }else if(this.isDeleting && this.txt === ''){ // setup for write
            this.isDeleting = false;
            this.index++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

document.addEventListener('DOMContentLoaded', init);

function init(){
    const el = document.querySelector('.txt-type');
    const words = JSON.parse(el.getAttribute('data-words'));
    const wait = el.getAttribute('data-wait');
    

    new Typewriter(el, words, wait);
}