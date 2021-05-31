<template>
  <div>
    <div>
      <b-navbar toggleable="sm" type="light" variant="light" class="py-3">
        <b-container class="d-flex">
          <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
          <h1>OttO KlauS</h1>
          <b-button variant="primary" class="btn-cerrar" @click="cerrar()">Cerrar Sesión</b-button>
        </b-container>
      </b-navbar>
    </div>
    <b-container style="height: 100vh">
      <b-row class="m-auto" cols="12" md="6">
        <b-col cols="12">
          <Agregar />
        </b-col>
        <b-col>
          <h2 class="my-2">Tabla de datos</h2>
          <Tabla :filas="productos" :encabezados="titulos" />
        </b-col>
        <b-col cols="12">
          <Editar />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Editar from "@/components/Editar.vue";
import Tabla from "@/components/Tabla.vue";
import Agregar from "@/components/Agregar.vue"
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Editar,
    Tabla,
    Agregar,
  },
  computed: {
    ...mapState(["productos", "titulos"])
  },
  methods: {
    ...mapActions(["cerrar"]),
  },
};
</script>
<style scoped>
  .btn-cerrar{ 
    width: 15%;
    padding: 10px;
    border-radius: 28px;
    background: #c1189f;
    font-weight: 400;
    border: 0px;
    font-family: 'Londrina Solid';
  }  
  h1{
    font-family: 'Londrina Solid';
    color: #B2E1D9;
  }
  h2{
    font-family: 'Londrina Solid';
    color: #ea9dda;
  }
 
</style>