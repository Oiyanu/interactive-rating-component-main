const output = document.querySelector('.output');
const rated = localStorage.getItem('rating');

if(rated){
    output.innerText = `You selected ${rated} out of 5`;
} else{
    output.innerText = "No rating selected";
}