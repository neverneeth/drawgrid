const container = document.querySelector("#container"),  
    tile = document.querySelector(".tile");

for(let i = 0; i < 1599; i++) {
  container.appendChild(tile.cloneNode());
}

document.querySelectorAll('.tile').forEach(tile => {
    tile.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});