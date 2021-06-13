<template lang="html">

  <section class="registro">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css">
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/3.2.89/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    <div class="card card0 border-0">
        <div class="row d-flex">
            <div class="col-lg-6">
                <div class="card1 pb-5">
                    <div class="row"> <img src="../img/Logo1.png" class="logo"> </div>
                    <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="../img/muro.png" class="image"> </div>
                </div>
            </div>
          <!-- <form @submit.prevent="registro"> -->
            <div class="col-lg-6">
                <div class="card2 card border-0 px-4 py-5">
                    <div class="row mb-4 px-3">
                        <h6 class="mb-0 mr-4 mt-2">¡Únete a nosotros!</h6>
                    </div>
                    <div class="row px-6 mb-4">
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                    
                    <div class="row mx-md-n5">
                      <div class="col px-md-5">
                        <label class="mb-1">
                            <h6 class="mb-0 text-sm">Correo electronico</h6>
                        </label>
                        
                      </div>
                      <div class="col px-md-5"><input class="mb-4" type="email" name="email" required placeholder="Introduce un correo electronico válido" v-model="email"></div>
                    </div>

                    <div class="row mx-md-n5">
                      <div class="col px-md-5">
                        <label class="mb-1">
                            <h6 class="mb-0 text-sm">Contraseña</h6>
                        </label>
                        
                      </div>
                      <div class="col px-md-5"><input class="mb-4" type="password" required name="password" placeholder="Escribe la contraseña" v-model="password"></div>
                    </div>

                    <div class="row mx-md-n5">
                      <div class="col px-md-5">
                        <label class="mb-1">
                            <h6 class="mb-0 text-sm">Repite tu contraseña</h6>
                        </label>
                        
                      </div>
                      <div class="col px-md-5"><input class="mb-4" type="password" required name="password" placeholder="Confirma la contraseña" v-model="passwordconfirm"></div>
                    </div>

                    <!-- <div class="row px-3"> <label class="mb-1">
                            <h6 class="mb-0 text-sm">Correo electronico</h6>
                        </label> <input class="mb-4" type="text" name="email" placeholder="Introduce un correo electronico válido"> </div>
                    <div class="row px-3"> <label class="mb-1">
                            <h6 class="mb-0 text-sm">Contraseña</h6>
                        </label> <input type="password" name="password" placeholder="Introduce tu contraseña"> </div>
                    <div class="row px-3 mb-4">
                    </div>  -->
                    <div class="row mb-4 px-3">
                      <div class="row mb-4 px-3">
                        <h6 class="mt-4"><button @click.prevent="registro" class="btn btn-blue text-center">Registrarse</button></h6>
                    </div>
                    </div>
                </div>
            </div>         
            <!-- </form> -->
        </div>
    </div>
</div>
  </section>

</template>



<script lang="js">

import '@/db.js'
import firebase from 'firebase'


  export default  {
    name: 'registro',
    props: [],
    mounted () {

    },
    data () {
       return {
         email:'',
         password:'',
         error:'',
         passwordconfirm:''
      }
    },
    methods: {
      registro(){
        if (this.email && this.password && this.passwordconfirm){

            if(this.password == this.passwordconfirm){

             firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
             .then(user => {
               this.email = ''
               this.password = ''
              this.$router.push({ name: 'Home' })
              console.log(user)

                this.$notify({
                  group: 'foo',
                  type: 'success',
                  position:'top left',
                  title: 'Bienvenido',
                  text: 'Se ha registrado satisfactoriamente'
                })
              })
             .catch( () => {
               this.$notify({
                 group: 'foo',
                 type: 'error',
                position:'top left',
                title: 'Ups, algo no ha salido bien',
                 text: 'No se ha podido llevar a cabo el registro, vuelve a intentarlo.'
              })
             })
        }else{
          this.$notify({
          group: 'foo',
          type: 'error',
          position:'top left',
          title: 'Ups, algo no ha salido bien',
          text: 'Comprueba que todos tus campos se han completado o que coinciden las contraseñas.'
        });
        }
       }
      }
    },
    computed: {

    }
}


</script>

<style>
  body {
    color: #000;
    overflow-x: hidden;
    height: 100%;
    background-color: #ffffff;
    background-repeat: no-repeat
}

.card0 {
    box-shadow: 0px 4px 8px 0px #0a0a0a;
    border-radius: 0px
}

.card2 {
    margin: 0px 40px
}

.logo {
    width: 300px;
    height: 65px;
    margin-top: 20px;
    margin-left: 35px
}

.image {
    width: 1200px;
    /* height: 280px */
}

.border-line {
    border-right: 1px solid #EEEEEE
}



.line {
    height: 1px;
    width: 45%;
    background-color: #E0E0E0;
    margin-top: 10px
}

.or {
    width: 10%;
    font-weight: bold
}

.text-sm {
    font-size: 14px !important
}

::placeholder {
    color: #BDBDBD;
    opacity: 1;
    font-weight: 300
}

:-ms-input-placeholder {
    color: #BDBDBD;
    font-weight: 300
}

::-ms-input-placeholder {
    color: #BDBDBD;
    font-weight: 300
}

input,
textarea {
    padding: 10px 12px 10px 12px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    margin-bottom: 5px;
    margin-top: 2px;
    width: 100%;
    box-sizing: border-box;
    color: #2C3E50;
    font-size: 14px;
    letter-spacing: 1px
}

input:focus,
textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #304FFE;
    outline-width: 0
}

button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0
}

a {
    color: inherit;
    cursor: pointer
}

.btn-blue {
    background-color: #1A237E;
    width: 150px;
    color: #fff;
    border-radius: 2px
}

.btn-blue:hover {
    background-color: #000;
    cursor: pointer
}

.bg-blue {
    color: #fff;
    background-color: #1A237E
}

@media screen and (max-width: 991px) {
    .logo {
        margin-left: 0px
    }

    .image {
        width: 300px;
        height: 220px
    }

    .border-line {
        border-right: none
    }

    .card2 {
        border-top: 1px solid #EEEEEE !important;
        margin: 0px 15px
    }
}
</style>
