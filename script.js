// alert("Hola Mundo <3");
let app = document.getElementById('app');
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
// reconoces una accion porque tiene paréntesis después del nombre de la accion
// a veces tiene el operador punto
typewriter
  .pauseFor(2500) // milisegundos 2.5 segundos
  .typeString('Carolina Cervera-Torres')
  .pauseFor(300)
  .deleteAll()
  .typeString('Maestra en Ciencias')
  .pauseFor(1000)
  .start();
let frase = document.getElementById('frase');
let typewriterFrase = new Typewriter(frase, {
  loop: true,
  delay: 75,
});
// reconoces una accion porque tiene paréntesis después del nombre de la accion
// a veces tiene el operador punto
typewriterFrase
  .pauseFor(2500) // milisegundos 2.5 segundos
  .typeString('"...Por lo tanto, lo que debemos hacer es esforzarnos y perseverar y NUNCA RENDIRNOS."')
  .pauseFor(300)
  .deleteAll()
  .typeString('Dalai Lama IX')
  .pauseFor(1000)
  .start();

  async function copiarAlPortapapeles(texto) {
    try {
      await navigator.clipboard.writeText(texto);
      alert('Texto copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  }