<template>
  <div>
    <div>
      <b-navbar toggleable="sm" type="light" variant="light" class="py-2">
        <b-container class="d-flex justify-content-end">
          <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
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
          <h1 class="my-2">Tabla de datos</h1>
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
    width: 20%;
    padding: 10px;
    border-radius: 28px;
    background: #b2e1d9;
    font-weight: bold;
    border: 0px;
  }  

</style>