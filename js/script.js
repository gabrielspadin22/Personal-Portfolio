var canvas = document.getElementById( 'canvas' ),
		ctx = canvas.getContext( '2d' ),
    canvas2 = document.getElementById( 'canvas2' ),
    ctx2 = canvas2.getContext( '2d' ),
		// full screen dimensions
		cw = window.innerWidth,
		ch = window.innerHeight,
    charArr = ['|'],
    maxCharCount = 1,
    fallingCharArr = [],
    fontSize = 5,
    maxColums = cw/(fontSize);
    canvas.width = canvas2.width = cw;
    canvas.height = canvas2.height = ch;

    function randomInt( min, max ) {
    	return Math.floor(Math.random() * ( max - min ) + min);
    }

    function randomFloat( min, max ) {
    	return Math.random() * ( max - min ) + min;
    }

    function Point(x,y)
    {
    this.x = x;
    this.y = y;
    }

    Point.prototype.draw = function(ctx){

    this.value = charArr[randomInt(0,charArr.length-1)].toUpperCase();
    this.speed = randomFloat(.1,4);


    ctx2.fillStyle = "rgba(255,255,255,0.8)";
    ctx2.font = fontSize+"px san-serif";
    ctx2.fillText(this.value,this.x,this.y);

        ctx.fillStyle = "#3a8f99";
        ctx.font = fontSize+"px san-serif";
        ctx.fillText(this.value,this.x,this.y);



        this.y += this.speed;
        if(this.y > ch)
        {
        this.y = randomFloat(-100,0);
        this.speed = randomFloat(2,5);
        }
    }

    for(var i = 0; i < maxColums ; i++) {
    fallingCharArr.push(new Point(i*fontSize,randomFloat(-900,1)));
    }


    var update = function()
    {

    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,cw,ch);

    ctx2.clearRect(0,0,cw,ch);

    var i = fallingCharArr.length;

    while (i--) {
        fallingCharArr[i].draw(ctx);
        var v = fallingCharArr[i];
    }

    requestAnimationFrame(update);
    }

update();
//------------------

document.getElementById('contact').addEventListener('mouseover', ()=>{
  document.getElementById('rotatei').classList.toggle('rotatei');
  document.getElementById('rotatel').classList.toggle('rotatel');
});
document.getElementById('contact').addEventListener('mouseleave', ()=>{
  document.getElementById('rotatei').classList.toggle('rotatei');
  document.getElementById('rotatel').classList.toggle('rotatel');
});

//-------------------
document.getElementById('f-l').addEventListener('mouseover', ()=>{
  document.getElementById('f-l').classList.toggle('bi-align-start' && 'bi-linkedin')
});

document.getElementById('f-l').addEventListener('mouseleave', ()=>{
  document.getElementById('f-l').classList.toggle('bi-align-start' && 'bi-linkedin')
});

//-------------------
document.getElementById('f-g').addEventListener('mouseover', ()=>{
  document.getElementById('f-g').classList.toggle('bi-align-middle' && 'bi-github')
});
document.getElementById('f-g').addEventListener('mouseleave', ()=>{
  document.getElementById('f-g').classList.toggle('bi-align-middle' && 'bi-github')
});

//-------------------

document.getElementById('f-i').addEventListener('mouseover', ()=>{
  document.getElementById('f-i').classList.toggle('bi-align-end' && 'bi-instagram')
});
document.getElementById('f-i').addEventListener('mouseleave', ()=>{
  document.getElementById('f-i').classList.toggle('bi-align-end' && 'bi-instagram')
});

let it = 0;
let itdots = 0;
let txt1 = '¡Hola! Mi nombre es Gabriel, tengo 23 años y soy desarrollador frontend. Mi stack principal es ReactJS y .Net. Mis hobbies son los videojuegos, la creación de música, el modelaje 3D y obviamente, la programación.' ;

function typeWriter() {
  if (it < txt1.length) {
    document.getElementById("p1").innerHTML += txt1.charAt(it);
    it++;
    setTimeout(typeWriter, 20);
  }
}
let sample = document.getElementById("song");

document.getElementById('btn-go').addEventListener('click', ()=>{
  document.getElementById('btn-go').remove();
  document.getElementById('fade').classList.add('luz');
  document.getElementById('l-screen').classList.remove('d-none');
  sample.play();
  loader();
  dotsf();
})

function dotsf() {
  if (itdots < 12) {
    document.getElementById("dots").innerHTML += ". ";
    itdots++;
    setTimeout(dotsf, 600);
  }
}

function loader() {
  let inner = document.querySelector('.preloader_inner');
  let w = 0,
  t = setInterval(function() {
    w = w + 1;
    inner.textContent = w+'%';
    if (w === 100){
      w = 0;
      clearInterval(t);
      setTimeout(() => {
        let main = document.getElementsByClassName('main');
        for(let i=0; i< main.length; i++){
        main[i].classList.remove('d-none');
      }
        document.getElementById('fade').classList.add('fadeout');
        document.getElementById('spiner').remove();
      }, 1300);
      setTimeout(() => {
        document.getElementById('fade').remove();
      }, 2500);
      typeWriter()
    }
  },65
)};

document.getElementById('contact').addEventListener('click', ()=>{
  document.getElementById('form_container').classList.remove('d-none');
  setTimeout(() => {
    document.getElementById('rotatei').classList.toggle('rotatei');
    document.getElementById('rotatel').classList.toggle('rotatel');
    document.getElementById('form_container').classList.toggle('pe-click');
    document.getElementById('form_container').classList.toggle('fadein');
    document.getElementById('form_container').classList.toggle('fadeout');
    document.getElementById('form_container').classList.toggle('pe-none');
    document.getElementById('form_container').classList.toggle('hologram');
    document.getElementById('box').classList.add('rotate_box');
    document.getElementById('box').classList.remove('rotate_box-');
  }, 50);
  
});

document.getElementById('cerrar').addEventListener('click',()=>{
  document.getElementById('rotatei').classList.remove('rotatei');
  document.getElementById('rotatel').classList.remove('rotatel');
  document.getElementById('form_container').classList.toggle('pe-click');
  document.getElementById('form_container').classList.toggle('fadein');
  document.getElementById('form_container').classList.toggle('fadeout');
  document.getElementById('form_container').classList.toggle('pe-none');
  document.getElementById('box').classList.remove('rotate_box');
  document.getElementById('box').classList.add('rotate_box-');
  setTimeout(() => {
    document.getElementById('form_container').classList.add('d-none');
  }, 1000);
});