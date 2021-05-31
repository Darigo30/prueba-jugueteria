<template>
    <div class="my-5 pb-1 text-start">
    <h2 class="text-center">Agregar Datos</h2>
    <label>Código</label>
    <b-form-input v-model="prod.codigo"></b-form-input>
    <label>Nombre</label>
    <b-form-input v-model="prod.nombre"></b-form-input>
    <label>Stock</label>
    <b-form-input v-model="prod.stock" ></b-form-input>
    <label>Precio</label>
    <b-form-input v-model="prod.precio"></b-form-input>
    <b-button size="sm" @click="agregarJuguete()" class="my-1 agr-ju" variant="success">Agregar Juguete</b-button>
  </div>
</template>
<script>
    import { mapActions } from "vuex";
    export default {
    name: "Agregar",
        data() {
            return {
                prod: {
                    codigo: "",
                    nombre: "",
                    stock: 0,
                    precio: 0,
                }
            };
        },
        methods: {
            ...mapActions(["crearNuevoProducto"]),
                agregarJuguete() {
                this.crearNuevoProducto(this.prod);
            },
        },
    };
</script>
<style scoped>
h2{
    font-family: 'Londrina Solid';
}
.agr-ju{
    background: #b2e1d9;
    border: 0;
    color: #fff;
    font-weight: 400;
    padding: 10px;
    font-size: 18px;
    border-radius: 28px;
    font-family: 'Londrina Solid';
    width: 20%;

}
</style>