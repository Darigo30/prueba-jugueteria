<template>
  <div v-if="editar" class="mb-5 pb-5 text-start">
    <h2 class="text-center">Editar Datos</h2>
    <label>Nombre</label>
    <b-form-input v-model="jugueteEditar.nombre"></b-form-input>
    <label>Stock</label>
    <b-form-input v-model="jugueteEditar.stock" ></b-form-input>
    <label>Precio</label>
    <b-form-input v-model="jugueteEditar.precio"></b-form-input>
    <b-button
      size="sm"
      @click="actualizar(jugueteEditar)"
      class="my-1"
      variant="success"
      >Actualizar Información</b-button
    >
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Editar",
  data() {
    return {
      nombre: "",
      stock: 0,
      precio: 0,
    };
  },
  computed: {
    ...mapState(["editar", "jugueteEditar"]),
  },
  methods: {
    ...mapActions(["updateProducto"]),
    actualizar(juguete) {
      this.updateProducto(juguete);
    },
  },
};
</script>
