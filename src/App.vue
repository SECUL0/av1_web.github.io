<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <section>
    <RouterView />
  </section>
</template>

<style>
@import '@/assets/base.css';

section {
  background-color: var(--cinzaFundo);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  border: 1px solid black;
  min-width: 400px;
  width: min-content;
  height: fit-content;
  background-color: var(--cinzaEscuro);
  padding: 24px;

}

form h2 {
  color: var(--ouro);
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 8px;
  text-transform: uppercase;
}

form p {
  color: var(--texto);
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
}

.inputs {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.inputs__personagens {
  grid-template-columns: repeat(4, 1fr);
}

.inputs img {
  display: block;
  width: 100%;
  margin-bottom: 16px;
}

.inputs__full {
  grid-column: span 2;
}
.inputs__full-personagem {
  grid-column: span 4;
}

.inputs__grupo label {
  color: var(--texto);
  font-size: 16px;
  margin-bottom: 8px;
  display: block;
  font-weight: 700;
}

.inputs__grupo input,
select {
  padding: 8px;
  color: var(--texto);
  outline: none;
  border: 1px solid var(--cinzaClaro);
  background-color: var(--cinza);
  box-shadow: inset 0 0 24px var(--sombra);
  font-size: 12px;
  width: 100%;
}


.inputs__grupo input[type="file"] {
  display: none;
}

.inputs__grupo input:focus {
  border: 1px solid var(--ouro);
  color: var(--ouro);
}

.inputs__radios label {
  margin-right: 16px;
}

.inputs__radios [type="radio"]:checked,
.inputs__radios [type="radio"]:not(:checked) {
  position: absolute;
  left: -9999px;
}

.inputs__radios [type="radio"]:checked+label,
.inputs__radios [type="radio"]:not(:checked)+label {
  position: relative;
  padding-left: 24px;
  cursor: pointer;
  line-height: 20px;
  display: inline-block;
  color: var(--texto);
}

.inputs__radios [type="radio"]:checked+label:before,
.inputs__radios [type="radio"]:not(:checked)+label:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  border: 1px solid var(--cinzaClaro);
  background: var(--cinza);
  box-shadow: inset 0 0 24px var(--sombra);

}

.inputs__radios [type="radio"]:checked+label:after,
.inputs__radios [type="radio"]:not(:checked)+label:after {
  content: '';
  width: 12px;
  height: 12px;
  background: var(--ouro);
  position: absolute;
  top: 4px;
  left: 4px;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.inputs__radios [type="radio"]:not(:checked)+label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}

.inputs__radios [type="radio"]:checked+label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

.inputs__colors{
  display: flex;
  justify-content: space-between;
  align-items: center;
} 

.inputs__colors [type="color"] {

  appearance: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 32px;
}

.inputs__colors label {
  color: var(--texto);
  font-size: 16px;
}
.input__sliders{
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.input__sliders [type="range"] {
  appearance: none;
  width: 100%;
  height: 25px;
  outline: none;
}


.input__sliders [type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 25px;
  height: 25px;
  background: var(--ouro);
  cursor: pointer;
}

.inputs__botao {
  text-transform: uppercase;
  font-weight: 700;
  width: 100%;
  margin-top: 16px;
  margin-inline: auto;
  padding: 8px;
  border-radius: 0;
  border: none;
  background-color: var(--ouro);
  font-size: 16px;
}

.inputs__botao a {
  text-decoration: none;
  color: var(--cinzaEscuro);
}

.inputs__botao:hover {
  background-color: var(--ouroEscuro);
}

.inputs__botao:active {
  background-color: var(--ouroClaro);
}
</style>
