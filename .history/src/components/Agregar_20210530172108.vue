<template>
    <div class="mb-5 pb-5 text-start">
    <h2 class="text-center">Agregar Datos</h2>
    <label>Código</label>
    <b-form-input v-model="codigo"></b-form-input>
    <label>Nombre</label>
    <b-form-input v-model="nombre"></b-form-input>
    <label>Stock</label>
    <b-form-input v-model="stock" ></b-form-input>
    <label>Precio</label>
    <b-form-input v-model="precio"></b-form-input>
    <b-button size="sm" @click="agregarJuguete()" class="my-1" variant="success">Agregar Juguete</b-button>
  </div>
</template>
<script>
    export default {
    name: "Agregar",
        data() {
            return {
                codigo: "",
                nombre: "",
                stock: 0,
                precio: 0,
            };
        },
        methods: {
            ...mapActions(["crearNuevoProducto"]),
        },
    };
</script>