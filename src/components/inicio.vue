<template lang="html">

  <section class="inicio">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css">
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/3.2.89/css/materialdesignicons.min.css">
    <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    <div class="card card0 border-0">
        <div class="row d-flex">
            <div class="col-lg-6">
                <div class="card1 pb-5">
                    <div class="row"> <img src="../img/Logo1.png" class="logo"> </div>
                    <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="../img/muro.png" class="image"> </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card2 card border-0 px-4 py-5">
                  <form @submit.prevent="login">
                    <div class="row mb-4 px-3">
                        <h6 class="mb-0 mr-4 mt-2">Iniciar sesión</h6>
                        <div class="row justify-content-start mt-4">
                    <div class="col">
                       <button @click.prevent="loginGoogle" class="btn btn-danger btn-block"> Iniciar sesión con <b>Google</b></button> 
                    </div>
                  </div>
                    </div>
                    <div class="row px-3 mb-4">
                        <div class="line"></div> <small class="or text-center">O</small>
                        <div class="line"></div>
                    </div>
                    <div class="row px-3"> <label class="mb-1">
                            <h6 class="mb-0 text-sm">Correo electronico</h6>
                        </label> <input class="form-control mb-4" type="email" name="email" v-model="email" placeholder="Introduce un correo electronico válido"> </div>
                    <div class="row px-3"> <label class="mb-1">
                            <h6 class="mb-0 text-sm">Contraseña</h6>
                        </label> <input type="password" name="password" v-model="password" placeholder="Introduce tu contraseña"> </div>
                    <div class="row px-3 mb-4">
                    </div> 
                    <div class="row mb-3 px-3"> 
                      <button class="btn btn-blue text-center">Iniciar sesión</button> 
                      </div>
                            </form>
<div class="row mb-4 px-3">
    <router-link to="/registro">

   <small class="font-weight-bold">¿No tienes cuenta? <a class="text-danger ">¡Registrate!</a></small>
    </router-link>
    </div>
                </div>
            </div>
        </div>
    </div>
</div>


  </section>

</template>

<script lang="js">

import '@/db.js'
import Firebase from '../db'
import Firebasegoogle from '@/db.js'

  export default  {
    name: 'login',
    props: [],
    mounted () {

    },
    data () {
      return {
        email:'',
         password:'',
         error:''
      }
    },
    methods: {
      login(){
        if (this.email && this.password){
             Firebase.auth.signInWithEmailAndPassword(this.email, this.password)
               .then(user => {
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
                 text: 'El correo o contraseña no existe en los registros'
               })
              })
        }else{
        //   this.$notify({
        //   group: 'foo',
        //   type: 'error',
        //   position:'top left',
        //   title: 'Ups, algo no ha salido bien',
        //   text: 'Comprueba que todos tus campos se han completado.'
        // });
        }
       },
       loginGoogle(){
         Firebasegoogle.loginGoogle();
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
/*   
body{
    width: 100%;
    background-color:#ecf0f3;
  }
  .box{
    box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);
  }
  .tabs.forum{
    background-color:#fff;
    border-radius:5px;
    margin-bottom:0em;
    box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);
  }
  .tabs a {
    padding: 0.7em 1.2em ;
  }
  .love {
    opacity : 0.1;
    color: #444;
  }
  .love.active{
    color:#ff3860 !important;
  }

  .love:hover{
    opacity : 1;
    color:#ff3860;
  }
  .love span{
    font-size:2em;
    display:block;
  }
  .box.forum{
    margin-bottom:0.7em;
  }
  .text-content{
    font-size:1.4em;
    margin-bottom:0.1em !important;
  }
  .text-content a{
    color:#444;
  }
  .text-content a:hover{
    color:#777;
  }
  .solved{
    color:#23d160;
  }
  .tags-content{
    margin-bottom:0.5em !important;
  }
  .info-content{
    font-size:20px;
  }
  .info-content a {
    color:#777;
    margin-right:0.5em;
  }
  .image.avatar{
    margin-top:0.7em;
  }

  @media only screen and (min-width: 600px) {
    .hero-forum {
        width:100%
    }
  } */
</style>
