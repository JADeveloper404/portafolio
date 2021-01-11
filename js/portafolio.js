const desplegar = () => {
  const despliegue = document.querySelector('.despliegue');
  const opciones = document.querySelector('.opciones');
  const li = document.querySelectorAll('.opciones li');

  despliegue.addEventListener('click', ()=>{
    opciones.classList.toggle('opt-active');
    opciones.style.transition = 'transform 0.5s ease-in';

    //Animar los li

    li.forEach((link, index) => {
      if(link.style.animation){
        link.style.animation = '';
      }else {
        link.style.animation = `li-desvanecer 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
  });
}

desplegar();

const enlaces = document.querySelectorAll('.opciones a');

enlaces.forEach(enl => {
  enl.addEventListener('click', (e)=>{
    e.preventDefault();
    enlaces.forEach(enlace => { enlace.classList.remove('active'); });
    e.target.classList.add('active');
  });
});