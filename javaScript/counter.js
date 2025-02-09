if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter',0);
}


function count(){
    let counter = localStorage.getItem('counter');
    counter++;
    localStorage.setItem('counter', counter)
    document.querySelector('h2').innerHTML = counter;
    if (counter % 10 ===0) {
        alert(`Counter is at ${counter}`);
    }  
} 
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('h2').innerHTML = localStorage.getItem('counter');
    document.querySelector('button').onclick = count;
})

