const colors = ['red' , 'yellow' ,'white'];
let currentIndex = 0;

console.log($('.proposition').css('backgroundColor'));

// let changeColor = null;

let play = document.getElementById('play');
let reset = document.getElementById('reset');
let proposition = document.getElementsByClassName('proposition');
let rondBlanc = document.getElementsByClassName('rondBlanc');
for (let i =0; i< rondBlanc.length; i++){
    rondBlanc[i].style.backgroundColor = 'white';
}

let cible = null;

let propositionTab = Array.from(proposition);
// console.log(proposition);
// console.log(propositionTab);

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
                    // console.log('pas egale a white')
                } else {
                    // console.log('egale a white')
                    event.style.backgroundColor = colors[currentIndex];
                    currentIndex++
                    if (currentIndex >= colors.length){
                        currentIndex = 0;
                    }
                }
            })            
        }


        // event.style.backgroundColor = colors[currentIndex];
        //         currentIndex++
        //         if (currentIndex >= colors.length){
        //             currentIndex = 0;
        //         }

        // if (event.sibling){

        // }
        // console.log(event);
        // console.log(colors[0])

    })
});




// $('.proposition').click(function(){
    
//     // if ($('.proposition').css('backgroundColor') == 'rgb(255, 255, 255)'){

//         currentIndex = $(this).data('currentIndex') || 0;
//         $(this).css('backgroundColor', colors[currentIndex]);
//         // console.log(colors[currentIndex]);
//         currentIndex++;
//         if (currentIndex >= colors.length){
//             currentIndex =0;
//         }
//         $(this).data('currentIndex', currentIndex);
//     // }



// });

console.log($('.rondBlanc'));


// $('#play').click(function(){
//     // NextSibling de proposition qui n'est pas égale à blanc
//     console.log($('.proposition').css('backgroundColor') == 'rgb(255, 255, 255)');
// });

let cadreTabPrev = null;
let cadreTab = null;
let cadreTabNext = null;
let indexTab = 5;

let count = 0;
let verif = null;

function verificationNext (element){
    while(element.nextElementSibling.style.backgroundColor == element.backgroundColor && count != 4){
        count += 
        element = element.nextElementSibling;
    }
    if (count < 4){
        verif = false;
        count = 0;
    } else {
        verif = true;
    }
}

play.addEventListener('click', function(){
    // console.log(proposition);
    propositionTab.forEach(function(element){

        

        if (element.style.backgroundColor == 'white'){
            console.log('white')
        } else {
            console.log('not white')

            console.log(element.parentElement.previousElementSibling.lastElementChild.children);
            cadreTabPrev =  Array.from(element.parentElement.previousElementSibling.lastElementChild.children);   

            console.log(element.parentElement.nextElementSibling.lastElementChild.children);
            cadreTabNext =  Array.from(element.parentElement.nextElementSibling.lastElementChild.children);

            console.log(element.nextElementSibling.children)
            cadreTab =  Array.from(element.nextElementSibling.children);

            while (cadreTab[indexTab].style.backgroundColor != 'white'){
                indexTab--
                console.log(indexTab);
            }
            cadreTab[indexTab].style.backgroundColor = element.style.backgroundColor;
            indexTab = 5;
            
            // for (let i = 5; i >= 0; i--) {
            //     console.log(i);
            //     console.log(cadreTab[i].style.backgroundColor);
            //     console.log(cadreTab[indexTab]);
            //     while (cadreTab[i].style.backgroundColor != 'white'){

            //     }
            // }

            // Array.from(element.nextElementSibling.children).forEach(function(sibling){
            //     sibling.style.backgroundColor = 'white';

            //     console.log(sibling.parentElement)
            // })


                // while (cadreTab[indexTab].style.backgroundColor == 'white'){
                //     indexTab --
                //     console.log(indexTab);
                // }


                // cadreTab[indexTab].style.backgroundColor = element.style.backgroundColor;
                // indexTab = 5;
                // console.log(cadreTab[cadreTab.length -1])


                // if (cadreTab[indexTab].style.backgroundColor == 'white'){ // le background de la derniere itération est white alors elle devient de la meme couleur que 'element' 
                //     cadreTab[cadreTab.length -1].style.backgroundColor = element.style.backgroundColor;

                // } else if (cadreTab[cadreTab.length -1].style.backgroundColor != 'white'){
                //     cadreTab[cadreTab.length -2].style.backgroundColor = element.style.backgroundColor;                    
                // } // 


                

            // element.nextElementSibling.forEach(function(cadre){
            //     console.log(cadre);
            // })
        }
        verificationNext(element);
    })
    // Array.from(proposition).forEach(function(rond){
    //     // console.log(rond.style.backgroundColor);
    //     // rond.style.backgroundColor = 'red';
    //     console.log(rond.nextElementSibling); 
    //     if (rond.style.backgroundColor == 'red') {
    //         cible = (rond);
    //         console.log(cible);
    //         console.log(rond.nextElementSibling);
    //     }
    // })
    for (let i =0; i< propositionTab.length; i++){
        propositionTab[i].style.backgroundColor = 'white';
    }

    

    //condition de victoire
    // if (){

    // }
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