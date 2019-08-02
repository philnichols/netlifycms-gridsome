<template>

    <Layout :show-logo="false">
        <!-- List posts -->
        <v-container fluid>
            <v-layout row>
                <v-flex xs12


                        :style="{
               'background':  'url(' + require('~/assets/img/bg/blog.png' ) + ') no-repeat center center ',
               backgroundSize: '100%',
               backgroundPosition: '60% top'
               }"

                >
                    <div class="container navigation-header ">

                        <b-navbar toggleable="lg" type="dark" variant="info">

                            <b-navbar-brand href="#">
                                <img :src="require('~/assets/img/logo.png') " alt="Logo">
                            </b-navbar-brand>

                            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                            <b-collapse id="nav-collapse" is-nav>

                                <b-navbar-nav class="ml-auto">
                                    <b-nav-item href="http://www.desq.co.uk/index.html">HOME</b-nav-item>
                                    <b-nav-item href="http://www.desq.co.uk/work.html">WORK</b-nav-item>
                                    <b-nav-item href="http://www.desq.co.uk/our-story.html">OUR STORY</b-nav-item>
                                    <b-nav-item href="/">BLOG</b-nav-item>
                                    <b-nav-item href="http://www.desq.co.uk/contact.html">CONTACT</b-nav-item>
                                </b-navbar-nav>
                            </b-collapse>
                        </b-navbar>
                    </div>
                </v-flex>
            </v-layout>

            <v-layout row wrap class="py-4 px-3">
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
        padding-top: 0;
        padding-bottom: 0;
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

        &:link, &:visited, &:active {
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
        padding: 0 !important;
        margin: 0 auto;

    }



    .navbar-brand {
        padding: 0;
        margin: 0;
        margin-top: -15px;
        width: 118px;
    }


    .navigation {
        border: none;
        transition: background-color 0.6s ease;
    }

    .navbar-collapse {
        position: relative;
        z-index: 1;
    }

    @media only screen and (max-width: 767px) {
        .navigation-header {
            height: 90px;
            background: #0D2538;

        }


        .max-width {
            margin: 0 auto;
        }
        .navbar .navbar-collapse {
            ul li {
                margin-bottom: 0;
            }
        }

        .navbar .navbar-collapse a {

            background: #0D2538;

            padding-bottom: 16px;
            padding-top: 16px;


        }

    }

</style>


