
let userCommute=prompt.("What is your average commute time?");

let Commute = prompt ("What is your commute home?");

let totalTime= print ("You spend" + usertime + "hours a year driving your car to/from work");

function decrementGallery () {
currentSelection = (currentSelection <=0 ? document.querySelectorAll ('img').length : currentSelection ) -1;
displayGallery(currentSelection);
}

function displayGallery(index) {

    let images = document.querySelectorAll ('img');
    let imageInfos =document.querySelectorAll ('#image-info > p');
    for(let i=0; i< images.length; i++) {
        images[i].style.display = 'none';
        imageInfos[i].style.display ='none';
            }
            images[index].style.display = 'grid';
            imagesInfos[index].style.display = 'grid';
        
}


}