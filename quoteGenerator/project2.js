let openBtn = document.getElementById('open-btn');
console.log(openBtn);
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

openBtn.addEventListener("click", (e=>{
    modalContainer.style.display = 'block';
}))
closeBtn.addEventListener("click", (e=>{
    modalContainer.style.display = 'none';
}))