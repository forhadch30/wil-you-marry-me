// document.getElementById('delete-btn').addEventListener('click',function(){
//     const secret = document.getElementById('secret-Info');
//     secret.style.display = 'none';
// })

// document.getElementById('delete-type').addEventListener('keyup',function(event){
//     const text = event.target.value;
//     const deleteButton = document.getElementById('delete-btn');
//     if (text === 'delete') {
//         deleteButton.removeAttribute('disabled');
//     }
//     deleteButton.removeAttribute('disabled',true)
// })


function getElementByKitchenwre(keid) {
    const card1 = document.getElementById(keid);
    const cardString = card1.innerText;
    const cardNumber = parseFloat(cardString);
    return cardNumber;
}

function getElementByCard2(card2s) {
    const car2 = document.getElementById(card2s)
    const cardPrice = car2.innerText;
    const cardNube = parseFloat(cardPrice);
    return cardNube;
}


function getElementBy(card1, card2) {
    console.log(card1 + ' ' + card2);
    const cals = document.getElementById('Kitchenware-calculate')

    const p = document.createElement('p');
    p.innerHTML = ` <h1>K. Accessories</h1> ${card1} ${card2}  <span>TK</span>`
    cals.appendChild(p)
}


// Calculator CARD One
function calculator() {
    const unpkgs = getElementByKitchenwre('span-Price');
    const unss = getElementByCard2('price-2');
    const current = unpkgs + unss;
   getElementBy('Total Price :',current)
}
