<template>
  <div>
    <b-container style="height: 100vh">
      <b-row class="m-auto" cols="12" md="6">
        <b-col cols="12">
          <Agregar />
        </b-col>
        <b-col>
          <h1 class="my-3">Tabla de datos</h1>
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
import { mapState } from "vuex";

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
};
</script>
