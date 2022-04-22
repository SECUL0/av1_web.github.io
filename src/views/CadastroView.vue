<script setup>
import { RouterLink} from 'vue-router'

'use strict';

const limparFormulario = (endereco) => {
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}


const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}


const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async () => {
    limparFormulario();

    const cep = document.getElementById('cep').value.replace("-", "");
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')) {
            document.getElementById('endereco').value = 'CEP não encontrado!';
        } else {
            preencherFormulario(endereco);
        }
    } else {
        document.getElementById('endereco').value = 'CEP incorreto!';
    }

}

window.onload=function(){
    document.getElementById('cep')
        .addEventListener('focusout', pesquisarCep);
}

</script>
<template>
        <form action="" id="cadastro">
            <h2>Crie sua Conta</h2>
            <div class="inputs">
                <img src="../assets/roma.png" alt="" class="inputs__full">

                <div class="inputs__grupo inputs__full" required>
                    <label for="nome">Nome</label>
                    <input type="text" id="nome">
                </div>

                <div class="inputs__grupo inputs__full" required>
                    <label for="email">Email</label>
                    <input type="email" id="email">
                </div>

                <div class="inputs__grupo inputs__full" required>
                    <label for="senha">Senha</label>
                    <input type="password" id="senha">
                </div>

                <div class="inputs__grupo" required>
                    <label for="nascimento">Nascimento</label>
                    <input type="date" id="nascimento">
                </div>

                <div class="inputs__grupo" required>
                    <label for="cep">Cep</label>
                    <input type="text" id="cep">
                </div>

                <div class="inputs__grupo inputs__full" required>
                    <label for="endereco">Endereço</label>
                    <input type="text" id="endereco">
                </div>

                <div class="inputs__grupo" required>
                    <label for="numero">Número</label>
                    <input type="number" id="numero">
                </div>

                <div class="inputs__grupo" required>
                    <label for="bairro">Bairro</label>
                    <input type="text" id="bairro">
                </div>

                <div class="inputs__grupo" required>
                    <label for="cidade">Cidade</label>
                    <input type="text" id="cidade">
                </div>

                <div class="inputs__grupo" required>
                    <label for="estado">Estado</label>
                    <input type="text" id="estado">
                </div>

                <button class="inputs__botao inputs__full" type="submit" form="cadastro"><RouterLink to="/personagem">Começar</RouterLink></button>
            </div>
        </form>
</template>