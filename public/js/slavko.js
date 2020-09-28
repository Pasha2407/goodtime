const openModal = (e) => {
  const { srcElement : { currentSrc }} = e;
  const modal = document.getElementById("myModal");


  const image = document.getElementById('modal-image') 
  image.src = currentSrc;
  image.style.cssText = "width: 100%; height: auto"
  
  console.log(modal.childNodes)
  document.querySelector('.modal-content').appendChild(image)
  modal.style.display = "block";


}

const initializationPage = () => {
  const images = Array.from(document.getElementsByClassName('width'));
  const modal = document.getElementById("myModal");
  const span = document.getElementsByClassName("close")[0];
  const modalContent = document.querySelector('.modal-content')
  images.forEach(element => {
    element.addEventListener("click", openModal);
  });

  span.addEventListener("click", () => {
    modal.style.display = "none";

  })

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";

    }
  }
}

const createModal = () => {

}