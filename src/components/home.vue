<template>

  <section class="home">
    <div class="container">
            <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bienvenido a ForoCriptos!</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css">
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/3.2.89/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
  </head>
  <body>
    <section class="hero is-warning">
        <div class="hero-body">
            <div class="container hero-forum has-text-centered">
                <h1 class="title">
                  ForoCriptos.es
                </h1>
                <h2 class="subtitle">
                 Tu foro de Criptomonedas
                </h2>
            </div>
        </div>
    </section>
    
    <br/>
    <div class="container">
        <div class="columns">
            <div class="column is-three-quarters">
                <div class="tabs forum">
                  
                  <div style="height:62px; background-color: #FFFFFF; overflow:hidden; box-sizing: border-box; border: 1px solid #56667F; border-radius: 4px; text-align: right; line-height:14px; block-size:62px; font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #56667F;padding:1px;padding: 0px; margin: 0px; width: 100%;"><div style="height:40px; padding:0px; margin:0px; width: 100%;"><iframe src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover=no" width="100%" height="36px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;"></iframe></div><div style="color: #FFFFFF; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box; padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif;"></div></div>                    <!-- </ul> -->
                  
                </div>

                <div v-for="Post in datosposts" v-bind:key="Post.id" class="box forum">
                    <article class="media">
                        <div class="media-left">
                            <!-- <figure class="image avatar is-64x64">
                                <img :src="Post.img" :alt=Post.img class="is-rounded">
                            </figure> -->
                        </div>
                        <div class="media-content">
                            <div class="content list-forum">
                              <p class="text-content">
                                    <a href="#">{{Post.titulo}}
                              </a>
                                </p>
                                <p class="tags-content">
                                    <a class="tag is-rounded is-dark">{{Post.tag}}</a>
                                </p>

                                <p class="info-content">
                                    <a>
                                        <small> {{Post.descripcion}}</small>
                                    </a>
                                </p>

                                <p class="info-content">
                                    <a>
                                        <i class="mdi mdi-comment-text-multiple-outline"></i>
                                        <small> Escrito por {{Post.autor}}</small>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </article>
                    
                </div>
            </div>
            <div class="column">
                <div class="box">
                    <h5 class="title is-5">Trending Topics</h5>
                    <div class="tags">
                        <a class="tag is-rounded is-medium  is-primary">Ethereum</a>
                        <a class="tag is-rounded is-medium is-success">Bitcoin</a>
                        <a class="tag is-rounded is-medium is-warning">DogeCoin</a>
                        <a class="tag is-rounded is-medium is-danger">Binance</a>
                        <a class="tag is-rounded is-medium is-link">LiteCoin</a>
                        <a class="tag is-rounded is-medium  is-success">Cardano</a>
                        <a class="tag is-rounded is-medium is-info">ADA</a>
                        <a class="tag is-rounded is-medium is-success">Bitcoin Cash</a>
                        <a class="tag is-rounded is-medium is-danger">USDT</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </body>
  </div>
  </section>

</template>

<script lang="js">

import firebase from '../db'
  import {db} from '../db'

  export default  {
    name: 'home',
    props: [],

    data () {
      return {
        datosposts:[],
        user: {data: {}}
      }
    },
    methods: {

    },

    mounted:function () {      
    firebase.auth.onAuthStateChanged(user=>{
        if (user){
          this.user.data = user
        }else{
          this.user.data = null
        }
      })
    },

    computed: {

    },

    firestore: {
      datosposts:db.collection('Post').orderBy('time','desc'),
    },
}


</script>

<style>
  body{
    width: 100%;
    height: 100%;
    background-color:#ecf0f3;
  }
  .añadir{
    text-align: right;
    /* margin-left: 438px; */
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
  }
</style>
