<template lang="html">

<section class="post">
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">


    <div class="container contact-form mt-4">
            <div class="contact-image">
                <img src="../img/ForoCriptosPost.png" alt="rocket_contact"/>
            </div>
            <form method="post">
                <h3 class="titulo">Crea tu post con el siguiente formulario</h3>
               <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" v-model="titulo" name="txtName" class="form-control" placeholder="Titulo *" value="" />
                        </div>
                        <div class="form-group">
                            <textarea name="txtMsg" class="form-control" v-model="descripcion" placeholder="¿Que quieres contar? *" style="width: 100%; height: 150px;"></textarea>
                        </div>
                        
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" v-model="tag" name="txtPhone" class="form-control" placeholder="Tag *" value="" />
                        </div>
                        <!-- <div class="form-group">
                            <input type="file" accept="image/*" />
                        </div> -->
                        <div class="form-group">
                            <input type="text" v-model="autor" name="txtPhone" class="form-control" placeholder="autor" value="" />
                        </div>
                    </div>

                <div class="col-md-12 mt-3">

                    <div>
                        <router-link to="/">
                            <button class="btn boton" @click.prevent="añadirPost()"> Enviar</button>
                        </router-link>
                    </div>
                </div>
                        
                </div>
            </form>
</div>
    
</section>

</template>

<script lang="js">
import{db} from '../db.js'

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

  export default  {
    name: 'post',
    props: [],
    mounted () {

    },
    data () {
      return {
        titulo:"",
        descripcion:"",
        tag:"",
        autor:"",
        time:""      }
    },
    methods: {
        añadirPost(){
          db.collection('Post').doc().set({
            titulo:this.titulo,
            descripcion: this.descripcion,
            tag:this.tag,
            autor: this.autor,
            time: dateTime,
          })
        },

    },
    computed: {

    }
}


</script>

<style>

.titulo{
  color: #fde888;
  font-weight: normal;
  font-size: 35px;
  font-family: Arial;
  text-transform: uppercase;
}
 
.contact-form{
    background: #fff;
    margin-top: 10%;
    margin-bottom: 5%;
    width: 70%;
}
.contact-form .form-control{
    border-radius:1rem;
}
.contact-image{
    text-align: center;
}
.contact-image img{
    margin-bottom: -19%;
}
.contact-form form{
    padding: 14%;
}
.contact-form form .row{
    margin-bottom: -7%;
}
.contact-form h3{
    margin-bottom: 8%;
    margin-top: -10%;
    text-align: center;
    color: #0062cc;
}
.contact-form .btn {
    width: 50%;
    border: none;
    border-radius: 1rem;
    padding: 1.5%;
    background: #dc3545;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
}
.btn
{
    width: 50%;
    border-radius: 1rem;
    padding: 1.5%;
    color: #fff;
    background-color: #0062cc;
    border: none;
    cursor: pointer;
}
</style>
