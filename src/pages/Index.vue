<template>

    <Layout :show-logo="false">
        <!-- List posts -->
        <v-container fluid>
            <v-layout row >
                <v-flex xs12


                        :style="{
               'background':  'url(' + require('~/assets/img/bg/blog.png' ) + ') no-repeat center center ',
               backgroundSize: '100%',
               backgroundPosition: '60% top'
               }"

                >
                    <!--
                    <nav class="navbar navbar-inverse  navbar-fixed-top" role="navigation">
                        <div class="container">
                            <div class="navbar-header">
                                <a class="scroll-smooth" href="index.html">
                                    <img class="navbar-brand" src="images/logo.png" alt="logo">
                                </a>
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                            </div>
                            <div class="scroll-bootstrap collapse navbar-collapse">
                                <ul class="nav navbar-nav navbar-right">
                                    <li><a class="scroll-smooth" href="index.html">Home</a></li>
                                    <li><a class="scroll-smooth" href="work.html">Work</a></li>
                                    <li><a class="scroll-smooth" href="our-story.html">Our story</a></li>
                                    <li><a class="scroll-smooth active" href="blog-list.php">Blog</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
-->
                    <div class="container navigation-header"><b-navbar toggleable="lg" type="dark" variant="info">
                        <b-navbar-brand href="#">NavBar</b-navbar-brand>

                        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                        <b-collapse id="nav-collapse" is-nav>
                            <!-- Right aligned nav items -->
                            <b-link class="ml-auto">
                                <b-link>HOME</b-link>
                                <b-link>WORK</b-link>
                                <b-link>OUR STORY</b-link>
                                <b-link>BLOG</b-link>
                                <b-link style="    margin-right: -15px;">CONTACT</b-link>
                            </b-link>
                        </b-collapse>
                    </b-navbar>
                    </div>
                </v-flex>
            </v-layout>

            <v-layout row wrap>
                <v-flex lg4 pa-2 v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node">
                    <PostCard :post="edge.node"/>
                </v-flex>
            </v-layout>
        </v-container>
    </Layout>


</template>

<page-query>
    {
    posts: allPost {
    edges {
    node {
    id
    title
    author
    path
    tags {
    id
    title
    path
    }
    date (format: "D MMMM YYYY")
    timeToRead
    description
    coverImage (width: 770, height: 380, blur: 10)
    ...on Post {
    id
    title
    author
    path
    }
    }
    }
    }
    }
</page-query>

<script>
    import Author from '~/components/Author.vue'
    import PostCard from '~/components/PostCard.vue'
//https://wizardly-varahamihira-adb04e.netlify.com
    export default {
        components: {
            Author,
            PostCard
        },
        metaInfo: {
            title: 'Home'
        }
    }
</script>

<style lang="scss">

    .container {
        padding-top:0;
        padding-bottom:0;
    }

    .navbar .navbar-collapse a {
        font-family: 'Open Sans', sans-serif;
         margin-top: 0;
         -webkit-border-radius: 0;
         -moz-border-radius: 0;
         border-radius: 0;
         padding: 35px 20px;
         font-size: 18px;
         font-weight: 400;
         text-transform: uppercase;
        text-decoration: none;
        color: #ffffff;
        &:link , &:visited, &:active {
            color: #ffffff;
            opacity: 1;
        }

     }

    .bg-info {
        background-color: transparent !important;
        padding: 0;
        height: 90px;
    }

    .navigation-header {
        height: 350px;
        padding:0 !important;
        margin:0 auto;

    }

    .navigation {
        border: none;
        transition: background-color 0.6s ease;
    }
</style>


