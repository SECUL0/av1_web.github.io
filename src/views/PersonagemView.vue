<template>
    <form action="">
        <h2>Crie seu Personagem</h2>
        <div class="inputs">
            <img src="../assets/roma.png" alt="" class="inputs__full">

            <div class="inputs__grupo" required>
                <label for="personagem">Nome</label>
                <input type="text" id="personagem">
            </div>

            <div class="inputs__grupo" required>
                <label for="classe">Classe</label>
                <select id="classe">
                    <option value="mago">Mago</option>
                    <option value="guerreiro">Guerreiro</option>
                    <option value="lutador">Lutador</option>
                    <option value="curandeiro">Curandeiro</option>
                    <option value="necromante">Necromante</option>
                    <option value="arqueiro">Arqueiro</option>
                </select>
            </div>

            <div class="inputs__radios inputs__full" required>
                <p>Sexo:</p>
                <input type="radio" id="feminino" name="sexo" value="feminino" checked>
                <label for="feminino">Feminino</label>

                <input type="radio" id="masculino" name="sexo" value="masculino">
                <label for="masculino">Masculino</label>
            </div>

            <div class="inputs__full" required>
                <p>Defina as cores do personagem: </p>
                <div class="inputs__colors">
                    <input type="color" id="cabelo" value="">
                    <label for="cabelo">Cabelo</label>

                    <input type="color" id="olho" name="olho" value="">
                    <label for="olho">Olho</label>

                    <input type="color" id="corpo" name="corpo" value="">
                    <label for="corpo">Corpo</label>
                </div>
            </div>

            <p>Parametros:</p>

            <div class="inputs__grupo input__sliders inputs__full" required>
                <div class="input__sliders-grupo">
                    <label for="cabeca">Cabeça</label>
                    <input type="range" id="cabeca" name="cabeca" min="0" max="10" value="">
                </div>

                <div class="input__sliders-grupo">
                    <label for="orelha">Orelha</label>
                    <input type="range" id="orelha" name="orelha" min="0" max="10" value="">
                </div>

                <div class="input__sliders-grupo">
                    <label for="olho">Olho</label>
                    <input type="range" id="olho" name="olho" min="0" max="10" value="">
                </div>

                <div class="input__sliders-grupo">
                    <label for="nariz">Nariz</label>
                    <input type="range" id="nariz" name="nariz" min="0" max="10" value="">
                </div>

                <div class="input__sliders-grupo">
                    <label for="boca">Boca</label>
                    <input type="range" id="boca" name="boca" min="0" max="10" value="">
                </div>

                <div class="input__sliders-grupo">
                    <label for="queixo">Queixo</label>
                    <input type="range" id="queixo" name="queixo" min="0" max="10" value="">
                </div>

                <div class="input__sliders-grupo">
                    <label for="braço">Braço</label>
                    <input type="range" id="braço" name="braço" min="0" max="10" value="">
                </div>

                <div class="input__sliders-grupo">
                    <label for="tronco">Tronco</label>
                    <input type="range" id="tronco" name="tronco" min="0" max="10" value="">
                </div>

                <div class="input__sliders-grupo">
                    <label for="perna">Perna</label>
                    <input type="range" id="perna" name="perna" min="0" max="10" value="">
                </div>

                <div class="input__sliders-grupo">
                    <label for="pe">Pé</label>
                    <input type="range" id="pe" name="pe" min="0" max="10" value="">
                </div>

            </div>


            <button class="inputs__botao" type="reset" value="Resetar">Resetar</button>
            <button class="inputs__botao" type="submit" value="Criar Personagem">Criar Personagem</button>
        </div>

    </form>
</template>
<!-- <script>

    function gerarCor() {
      let n = (Math.random() * 0xfffff * 1000000).toString(16);
      return '#' + n.slice(0, 6);
      };
 console.log(gerarCor())
</script> -->