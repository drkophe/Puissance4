const colors = ['red' , 'yellow' ,'white'];
let currentIndex = 0;

// console.log($('.proposition').css('backgroundColor'));

let play = document.getElementById('play');
let reset = document.getElementById('reset');
let proposition = document.getElementsByClassName('proposition');
let rondBlanc = document.getElementsByClassName('rondBlanc');
let fondBleu = document.getElementsByClassName('fondBleu');

// let fondBleuTab = Array.from(fondBleu);
console.log(fondBleu[0].children);

for (let i =0; i< rondBlanc.length; i++){
    rondBlanc[i].style.backgroundColor = 'white';
}

let cible = null;

let propositionTab = Array.from(proposition);

propositionTab.forEach(function (event){
    event.style.backgroundColor = 'white';
    event.addEventListener('click', function (){
        if (event.style.backgroundColor != 'white'){
            event.style.backgroundColor = colors[currentIndex];
            currentIndex++
            if (currentIndex >= colors.length){
                currentIndex = 0;
            }
        } else {
            propositionTab.forEach(function(test){
                console.log(test.style.backgroundColor);
                if (propositionTab.some(test => test.style.backgroundColor != 'white') ){
                } else {
                    event.style.backgroundColor = colors[currentIndex];
                    currentIndex++
                    if (currentIndex >= colors.length){
                        currentIndex = 0;
                    }
                }
            })            
        }
    })
});

let rondBlancTab = Array.from(rondBlanc);

console.log($(rondBlancTab[1].style.backgroundColor));
console.log($(proposition));



let cadreTabPrev = null;
let cadreTab = null;
let cadreTabNext = null;
let indexTab = 5;

let count = 0;
let verif = null;

let indexPrev = 5;

let indexProposition = 0;

function verificationPrev (indexProposition){
    for (let i =0; i< fondBleu[indexProposition].length; i++){
        console.log(fondBleu)
        console.log(fondBleu[indexProposition].children[i])
        if (fondBleu[indexProposition].children[i].style.backgroundColor != 'white'){
            console.log(fondBleu[indexProposition].children[i]);
            console.log(fondBleu[indexProposition].children[i-1]);
            console.log(i)
        } 
    }
}


function verificationNext (element){
    for (let i =0; i< rondBlanc.length; i++){
        if (rondBlanc[i].style.backgroundColor != 'white'){
            console.log(rondBlanc[i]);
            console.log(rondBlanc[i-1]);
            console.log(i)
            if (rondBlanc[i].style.backgroundColor == rondBlanc[i-1].style.backgroundColor &&
                rondBlanc[i-1].style.backgroundColor == rondBlanc[i-2].style.backgroundColor &&
                rondBlanc[i-2].style.backgroundColor == rondBlanc[i-3].style.backgroundColor){
                    console.log('Victoire !!!!!!')
            }
            // if(rondBlanc[i].previousElementSibling.style.backgroundColor == rondBlanc[i].style.backgroundColor && count != 4){
            //     indexPrev = i;
            //     console.log(indexPrev)
            //     while (rondBlanc){

            //     }
            //     console.log(rondBlanc[indexPrev])
            //     console.log(rondBlanc[indexPrev--].previousElementSibling)
                // while(){

                // }
                // count += 
                // rondBlanc[i] = rondBlanc[i].previousElementSibling;

                console.log(count);
                // console.log(rondBlanc[i])
                // console.log(rondBlanc[i].previousElementSibling)
            // }
            // if (count < 4){
            //     verif = false;
            //     count = 0;
            // } else {
            //     verif = true;
            // }
        } 
    }
}

play.addEventListener('click', function(){

    propositionTab.forEach(function(element){

        

        if (element.style.backgroundColor == 'white'){
            console.log('white')
        } else {
            console.log('not white')

            // indexProposition = propositionTab.indexOf(element);
            // console.log(propositionTab.indexOf(element))

            // console.log(element.parentElement.previousElementSibling.lastElementChild.children);
            // cadreTabPrev =  Array.from(element.parentElement.previousElementSibling.lastElementChild.children);   

            // console.log(element.parentElement.nextElementSibling.lastElementChild.children);
            // cadreTabNext =  Array.from(element.parentElement.nextElementSibling.lastElementChild.children);

            console.log(element.nextElementSibling.children)
            cadreTab =  Array.from(element.nextElementSibling.children);

            while (cadreTab[indexTab].style.backgroundColor != 'white'){
                indexTab--
                console.log(indexTab);
            }
            // indexPrev = indexTab;
            // console.log(indexPrev)

            cadreTab[indexTab].style.backgroundColor = element.style.backgroundColor;
            indexTab = 5;

            console.log(cadreTab[indexPrev])
            while (cadreTab[indexPrev].style.backgroundColor == cadreTab[indexPrev-1].style.backgroundColor){
                indexPrev--
                console.log(indexPrev);
            }
            if (indexPrev <= 2){
                console.log('win !')
            }
            indexPrev = 5;

        }
        
    })
    for (let i =0; i< propositionTab.length; i++){
        propositionTab[i].style.backgroundColor = 'white';
    }



    // verificationNext(fondBleu[indexProposition]);
    verificationPrev(indexProposition);
});

reset.addEventListener('click', function(){
    for (let i =0; i< propositionTab.length; i++){
        propositionTab[i].style.backgroundColor = 'white';
    }
    for (let i =0; i< rondBlanc.length; i++){
        rondBlanc[i].style.backgroundColor = 'white';
    }
    cadreTab = null;
    indexTab = 5;
    currentIndex = 0;
    
})