let switchImg = document.getElementById("imgChange");
let thumbBtn = document.getElementById("Thumb");
let like = document.getElementById("Like");
let change = true;

function likeBtn() {
  if (change) {
    switchImg.src = "assets/happy.avif";
    thumbBtn.style.color = "blue";
    like.style.backgroundColor = "blue";
    change = false;
  }
  else{
    switchImg.src = "assets/sad.webp";
    thumbBtn.style.color = "gray";
    like.style.backgroundColor = "gray";
    change = true;
  }
}
