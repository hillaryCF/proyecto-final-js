const formulario = document.querySelector('#form');
formulario.addEventListener('submit', agregonueva);
const crearItem = (name, artist, year, album, img, mp3, wav, ogg) => {
  let item = {
    name: name ,
    artist: artist,
    year: year,
    album: album,
    img: img,
    mp3: mp3,
    wav: wav,
    ogg: ogg
  }
  songsLocal.push(item);
  return(item);
}


// funciones
const guardarLocalStorage = () => {
  localStorage.setItem('TODO', JSON.stringify(songsLocal));
};

const  infInHtml= () => {
  songsLocal = JSON.parse(localStorage.getItem('TODO'));
  if (songsLocal === null) {
    songsLocal = [];
  }else  {
    
    songsLocal.forEach(element => {
			createLis(songsLocal);
    })
  }
};
// console.log(songsLocal);
function agregonueva (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const artist = document.getElementById('artist').value;
  const year = document.getElementById('year').value;
  const album = document.getElementById('album').value;
  const imgimport = document.getElementById('img').value;
  const mp3import = document.getElementById('mp3').value;
  const wavimport = document.getElementById('wav').value;
  const oggimport = document.getElementById('ogg').value;

  crearItem(name,artist,year,album,imgimport,mp3import,wavimport,oggimport);
  guardarLocalStorage();
}

document.addEventListener('DOMContentLoaded', infInHtml);
