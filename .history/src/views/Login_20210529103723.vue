<template>
  <b-container>
    <b-row style="height: 100vh">
      <b-col class="m-auto border p-4" cols="12" md="4">
        <b-form-group
          label="Correo Electrónico:"
          description="Introduzca su correo."
          class="text-start mb-4"
        >
          <b-form-input
            v-model="form.email"
            type="email"
            placeholder="correo electrónico"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Contraseña:"
          description="Introduzca su constraseña."
          class="text-start mb-4"
        >
          <label>Password</label>
          <b-form-input
            v-model="form.pass"
            type="password"
            placeholder="contraseña"
          ></b-form-input>
        </b-form-group>

        <b-button @click="login" variant="success" class="me-3"
          >Ingresar</b-button
        >
        <b-button @click="limpiar" variant="outline-primary">Limpiar</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        pass: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        if (!this.form && !this.form.email && !this.form.pass) return;
        const req = await firebase
          .auth()
          .signInWithEmailAndPassword(this.form.email, this.form.pass);
        console.log(req);
        // if (req && req != null) this.$router.push("/");

        if (req && req != null) {
          localStorage.setItem("login", "logueado");
          this.$router.push("/");
        }
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Código de Error", errorCode);
        console.log("Mensaje de Error", errorMessage);
      }
    },
    limpiar() {
      if (!this.form) return;
      this.form.email = "";
      this.form.pass = "";
    },
  },
};
</script>
