<template>
    <div id="app">
        <h1>Olá Vue!</h1>
    </div>
</template>

<script>
import Calculator from './main/Calculator'

export default {
    components: { Calculator }
}
</script>

<style>
    @font-face {
        font-family: "RobotoMono";
        src: url("./fonts/RobotoMono-Thin.ttf");
    }

    * {
        font-family: "RobotoMono", monospace;
    }

    #app {
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #fff;
        background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73))
    }
</style>