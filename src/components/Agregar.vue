<template>
    <div class="my-5 pb-1 text-start">
    <h2 class="text-center">Agregar Datos</h2>
    <b-row>
        <b-col cols="6"> 
            <label>Código</label>
            <b-form-input v-model="prod.codigo"></b-form-input>
        </b-col>
        <b-col cols="6"> 
            <label>Nombre</label>
            <b-form-input v-model="prod.nombre"></b-form-input>
        </b-col>
        <b-col cols="6">
            <label>Stock</label>
            <b-form-input v-model="prod.stock" ></b-form-input>
        </b-col>
        <b-col cols="6">
             <label>Precio</label>
            <b-form-input v-model="prod.precio"></b-form-input>
        </b-col>
    </b-row>
    <b-button size="sm" @click="agregarJuguete()" class="my-3 agr-ju" variant="success">Agregar Juguete</b-button>
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
    color: #ea9dda;
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
.form-control{
    border: 1px solid #d99dcd;
    border-radius: 10px;
    margin: 5px 0;
    padding: 10px;
}
label{
    font-family: 'Londrina Solid';
    font-weight: 300;
}
.agr-ju:hover {
    color: #fff;
    background-color: #7fbbb1;
}
</style>