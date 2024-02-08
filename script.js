// CRUD JS

const arr = new Array();

document.querySelector(".enter").addEventListener('click', () => {
    let num = document.querySelector(".input").value;
    arr.push(num);
    displayArray();
    document.querySelector(".input").value = '';
});

document.querySelector(".clear").addEventListener('click', () => {
    arr.splice(0, arr.length);
    displayArray();
});

function displayArray() {
    const showArrElement = document.querySelector(".show_arr");
    showArrElement.innerHTML = ''; // Clear previous content
    if (arr.length === 0) {
        showArrElement.textContent = "None";
    } else {
        arr.forEach(item => {
            const paragraph = document.createElement('p');
            paragraph.textContent = item;
            showArrElement.appendChild(paragraph);
        });
    }
}

document.querySelector(".pop").addEventListener('click', ()=>{
    arr.pop();
    displayArray();
})