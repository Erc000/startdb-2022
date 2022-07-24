class Forca {
  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta;
    this.palavra = '_'.repeat(palavraSecreta.length);
    this.vidas = 6;
    this.estado = "aguardando chute";
    this.letrasChutadas = [];
  }

  chutar(letra) {
    if (letra.length > 1 || !isNaN(letra) || this.letrasChutadas.includes(letra)) {//verifica se "letra" é maior que o esperado, se é um numero ou se ja foi chutada
      console.log('nao fez nada');
      return;
    }
    else {
      this.letrasChutadas.push(letra);//registra a letra chutada

      if (!this.palavraSecreta.includes(letra)) {//verifica se a palavra contem a letra
        console.log('\n nao tem a letra: ', letra);
        this.vidas--;

        if (this.vidas == 0) {// verifica se as vidas ja acabaram
          this.estado = "perdeu";
        }
      }
      else {
        while (this.palavraSecreta.includes(letra)) {// percorre pela string "palavra" e adiciona a letra correspondente
          this.palavra =
            this.palavra.substring(0, this.palavraSecreta.indexOf(letra))
            + letra
            + this.palavra.substring(this.palavraSecreta.indexOf(letra) + 1);

          this.palavraSecreta = this.palavraSecreta.replace(letra, "#");
        }
        if ((this.palavraSecreta.match(/#/g)).length == this.palavraSecreta.length) {//verifica se todas as letras ja foram encontradas
          this.estado = "ganhou";
          console.log("ganhooooww");
        }
      }
    }
  }

  buscarEstado() {
    return this.estado;
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavra.split('') // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}

module.exports = Forca;