let countValue = document.querySelector('#counter');

//decrement
const decrement = () => {
    //get the value for the UI
    let value = parseInt(countValue.innerText);
    // decrement the value
    value -= 1;
    // set the value
    countValue.innerHTML = value;
}

const increment = () => {
    let value = parseInt(countValue.innerText);
    value += 1;
    countValue.innerHTML = value;
}