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
      <b-button id="show-btn" @click="showModal">Abrir Modal</b-button>
      
      <b-modal ref="my-modal" hide-footer title="¡Advertencia!">
      <div class="d-block text-center">
        <h4>¿Estás seguro que deseas eliminar este producto?</h4>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Cancelar</b-button>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Aceptar</b-button>
    </b-modal>

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
      showModal() {
          this.$refs['my-modal'].show()
        },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
  },
};
</script>
