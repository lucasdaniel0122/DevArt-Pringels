gsap.registerPlugin(SplitText);

// MAPEANDO INTERAÇÕES

const latasMenores = document.querySelectorAll(".latas img:nth-child(2)");

const slides = document.querySelectorAll(".slide");

// SEGMENTAR, ESPECIFICAR OS ELEMENTOS DE UM GRUPO -> TORNAR INDIVIDUAL = forEach

// CONTADOR -> 0 + 1 = 1 

let contador = 0;

let cliques = true;

console.log(contador)

latasMenores.forEach(lataMenor=> {
    lataMenor.onclick = () => {
      console.log(cliques)

        if(cliques){
            cliques = false;
        
         const slideAtivo = document.querySelector(".slide.ativo");
        
         slideAtivo.classList.remove("ativo");

         // CONDICIONAIS -> IF e ELSE

         if (contador == 3){
            contador = 0;
         } else {
            contador = contador + 1;
         }

         console.log(contador)

         slides[contador].classList.add("ativo");

         animarTitulo();

         setTimeout(()=> {
          cliques = true
         }, 1000)
       }
    };
        
});

function animarTitulo(){
    const split = SplitText.create(".slide.ativo h2", {
      type: "chars",
      mask: "chars"
    });

    console.log(split);

    gsap.from(split.chars, {
      y: "100%",
      duration: .5,
      stagger: 0.06,
      delay: .5
    });
}