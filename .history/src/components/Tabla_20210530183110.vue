<template>
  <b-table
    v-if="filas && encabezados"
    striped
    hover
    sort-desc.sync="false"
    sort-direction="asc"
    :fields="encabezados"
    :items="filas"
    :sort-by.sync="ordenarPor"
  >
    <template #cell(actions)="row">
      <b-button
        size="sm"
        @click="editar(row.item)"
        class="my-1 me-4"
        variant="primary"
        >Editar</b-button
      >
      <b-button size="sm" @click="borrar(row.item)" class="my-1" variant="danger">Eliminar</b-button>
      <b-button v-b-modal.my-modal>mostrar Modal</b-button>
      <!-- The modal -->
      <b-modal id="my-modal">Holi</b-modal>
    </template>
  </b-table>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  name: "TablaDeDatos",
  data() {
    return {
      ordenarPor: "",
    };
  },
  props: {
    filas: {
      type: Array,
    },
    encabezados: {
      type: Array,
    },
  },
  methods: {
    borrar(juguete) {
      this.deleteProducto(juguete);
    },
    editar(juguete) {
      this.booleanEditar();
      this.editarJuguete(juguete);
    },
    ...mapActions(["deleteProducto"]),
    ...mapMutations(["booleanEditar", "editarJuguete"]),
  },
};
</script>
