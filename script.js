swal(
  `Seja Bem vindo a Bateria Dev!

Novo por aqui? 

Existem 2 maneiras de utilizar a bateira:

1- Pressione em seu teclado as teclas indicados no painel da bateira

2- Informe qual sequência deseja tocar e logo em seguida aparte o play!

Boa diversão!!`,
  {
    className: "teste-bg",
  }
);

document.body.addEventListener("keyup", (event) => {
  playSound(event.code.toLocaleLowerCase());
});

document.querySelector(".composer button").addEventListener("click", () => {
  let song = document.querySelector("#input").value;
  if (song !== "") {
    let songArray = song.split("");
    playComposition(songArray);
  }
});

function playComposition(songArray) {
  let wait = 0;
  for (let songItem of songArray) {
    setTimeout(() => {
      playSound(`key${songItem}`);
    }, wait);
    wait += 250;
  }
}

function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);
  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }

  if (keyElement) {
    keyElement.classList.add("active");
    setTimeout(() => {
      keyElement.classList.remove("active");
    }, 300);
  }
}
