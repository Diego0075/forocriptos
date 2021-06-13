<template>
  <section class="navbar">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css">
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/3.2.89/css/materialdesignicons.min.css">
   <nav class="navbar forum" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <router-link to="/">
                  <a class="navbar-item" href="">
                      <img src="../img/Logo1.png">
                  </a>
                </router-link>
                <a role="button" @click.prevent="hamburguesa" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="button is-success is-light is-rounded is-pulled-left mt-2 mr-4">
                          <router-link to="/post">
                          Crea un nuevo Post
                          </router-link>
                        </a>    
                </div>
              <template v-if="user">
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-ghost">
                                <strong>Bienvenido {{user.email}}</strong>
                            </a>
                            <a class="button is-danger" @click.prevent="cerrarSesion">
                            Cerrar Sesión
                            </a>
                        </div>
                    </div>
                </div>
              </template>

              <template v-else>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-warning">
                              <router-link to="/inicio">
                                <strong>Iniciar Sesion</strong>
                              </router-link>
                            </a>
                            <a class="button is-light">
                              <router-link to="/registro">
                          Registrarse
                          </router-link>
                        </a>
                        </div>
                    </div>
                </div>
                </template>
            </div>
        </div>
    </nav>
  </section>

</template>

<script lang="js">
// import {db} from '../db'
import Firebase from '../db'


  export default  {
    name: 'navbar',
    props: [],
    mounted () {

        Firebase.auth.onAuthStateChanged(user=>{
         if (user){
           this.user.loggedIn = true;
           this.user.data = user;
           // Le asigna al array imprime carrito el user actual
          
        //    this.$bind('imprimeCarrito',db.collection('Carrito').where("user","==",Firebase.auth.currentUser.email))
        // }else{
            // cunando se desconecta
             
          //  this.user.loggedIn = false;
          //  this.user.data = user;
           // lo limpia
          // this.$bind('imprimeCarrito',db.collection('Carrito').where("user","==",""))
         }
        })
    },
    data () {
      return {
        datos:[],
        user: null,
        // imprimeCarrito:[]
      }
    },
    methods: {

      hamburguesa(){
      var burger = document.querySelector('.burger')
      var menu = document.querySelector('#' + burger.dataset.target)
      burger.addEventListener('click', function () {
        burger.classList.toggle('is-active')
        menu.classList.toggle('is-active')
    })},

      cerrarSesion(){
        Firebase.auth.signOut().then(() =>{
          this.$router.push({name: 'login'})
        })
      }
    },
    computed: {
      //  totalcarrito(){
      //   return this.imprimeCarrito.length
      // }
    },
    firestore: {
      // datos:db.collection('Lenovo'),
      //  imprimeCarrito: db.collection("Carrito").where("user","==",Firebase.auth.currentUser ?Firebase.auth.currentUser.email:"")

    },

    created(){
      Firebase.auth.onAuthStateChanged(user=>{
        if (user){
          this.user = user
          console.log(user)
        }else{
          this.user = null
        }
      })
    }
}


</script>

<style>
 
  .navbar{
    width: 100%;
  }

  
  .navbar.forum{
    box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);
  }
</style>
