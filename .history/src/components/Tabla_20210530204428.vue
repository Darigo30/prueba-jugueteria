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
      <b-button size="sm" @click="editar(row.item)" class="my-1 me-4" variant="primary">Editar</b-button>
      
      <b-button size="sm" id="show-btn" variant="danger" class="my-1 me-4" @click="showModal(row.item)">Eliminar</b-button>
      
      <b-modal ref="my-modal" hide-footer title="¡Advertencia!">
      <div class="d-block text-center">
        <h4>¿Estás seguro que deseas eliminar este producto?</h4>
      </div>
      <div class="d-flex justify-content-between">
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Cancelar</b-button>
        <b-button class="mt-3" variant="outline-success" block @click="borrar">Aceptar</b-button>
      </div>
      
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
      campoeliminar:"",
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
    borrar() {
      this.deleteProducto(this.campoeliminar);
    },
    editar(juguete) {
      this.booleanEditar();
      this.editarJuguete(juguete);
    },
    ...mapActions(["deleteProducto"]),
    ...mapMutations(["booleanEditar", "editarJuguete"]),
      showModal(valor) {
        this.campoeliminar = valor;
          this.$refs['my-modal'].show()
        },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
  },
};
</script>
<style scoped>
.btn-primary{
  background: #7fbbb1;
  border: none;
  border-radius: 15px;
}
.btn-danger{
  background: #c1189f;
   border: none;
  border-radius: 15px;
  
}
.btn-primary, .btn-danger{
  width: 20%!important;
  font-family: 'Londrina Solid';
 }
</style>