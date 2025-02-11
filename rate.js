const lists = document.querySelectorAll('li');
const butt = document.querySelector('.butt');
let rating = null;




lists.forEach(list => {
    list.addEventListener('click', () => {
        lists.forEach(item => item.classList.remove('active'));

        list.classList.add('active');
        rating = list.innerText; 
        
    });
});

butt.addEventListener('click', () => {

    if(rating){
        localStorage.setItem('rating', rating);
        window.location.href = "display.html";
    } else {
        alert('please select a rating');
    }
});