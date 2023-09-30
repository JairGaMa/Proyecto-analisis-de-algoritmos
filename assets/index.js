
function pageLoaded() {
    let loaderSection = document.querySelector('.loader-section');       loaderSection.classList.add('loaded');
  }
  document.onload = pageLoaded();

function integrantes() {
  Swal.fire({
    title: 'Integrantes del equipo    5EJ',
    color: 'black',
    background: '#fff',
    backdrop: `
      rgba(0,0,123,0.4)
    `,
    html: '<p>Camacho García Julia Guadalupe<br>Garcia Mayorga Brayan Jair<br>Ramirez Vazquez Wendy Itzel</p>'
  })
}