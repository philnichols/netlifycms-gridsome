<template>
    <Layout class="post">
        <v-container fluid>
            <v-layout row>
                <v-flex xs12>
                    <div class="bg-gradient">x</div>
                    <div class="container navigation-header ">
                        <b-navbar toggleable="lg" type="dark" variant="info">
                            <b-navbar-brand href="#">
                                <img :src="require('~/assets/img/logo.png') " alt="Logo">
                            </b-navbar-brand>
                            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                            <b-collapse id="nav-collapse" is-nav>
                                <!-- Right aligned nav items -->
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
            <v-layout row>
                <div class="post-content">
                    <div class="post__header">
                        <g-image alt="Cover image" v-if="$page.post.coverImage" :src="$page.post.coverImage"/>
                    </div>
                    <div class="post_body">
                        <g-link class="link-back" to="/">
                            <i class="material-icons back-icon">
                                arrow_back_ios
                            </i>
                            <span>Back</span></g-link>
                        <h1 class="post-title text-xs-center mb-4">
                            {{ $page.post.title }}
                        </h1>
                        <PostMeta class="text-xs-center my-4" :post="$page.post"/>
                        <div class="post__content" v-html="$page.post.content">
                        </div>
                    </div>
                </div>

            </v-layout>
        </v-container>
    </Layout>
</template>

<script>
    import PostMeta from '~/components/PostMeta'
    import PostTags from '~/components/PostTags'
    import Author from '~/components/Author.vue'

    export default {
        components: {
            Author,
            PostMeta,
            PostTags
        },
        metaInfo() {
            return {
                title: this.$page.post.title,
                //https://timdeschryver.dev/posts/gridsome-social-cards
                meta: [
                    {
                        name: 'description',
                        content: this.$page.post.description
                    },
                    // Open Graph
                    {
                        key: 'og:title',
                        name: 'og:title',
                        content: this.$page.post.title,
                    },
                    {
                        key: 'og:description',
                        name: 'og:description',
                        content: this.$page.post.description,
                    },
                    {name: 'og:type', content: 'website'},
                    {name: 'og:url', content: 'https://www.desq.co.uk'},
                    {name: 'og:image', content: 'https://nuxtjs.org/meta_640.png'},
                    // Twitter Card
                    {
                        key: 'twitter:title',
                        name: 'twitter:title',
                        content: this.$page.post.title,
                    },
                    {
                        key: 'twitter:description',
                        name: 'twitter:description',
                        content: this.$page.post.description,
                    },
                    {name: 'twitter:card', content: 'summary'},
                    {name: 'twitter:site', content: '@desqEd'},
                    {name: 'twitter:image', content: 'https://nuxtjs.org/meta_640.png'},
                    {name: 'twitter:image:alt', content: 'Nuxt.js Logo'}
                ]

            }
        }
    }
</script>

<page-query>
    query Post ($path: String!) {
    post: post (path: $path) {
    title
    author
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
    id
    title
    path
    }
    description
    content
    coverImage (width: 860, blur: 10)
    }
    }
</page-query>

<style lang="scss">

    .bg-gradient {
        background-image: linear-gradient(to bottom, rgba(25, 28, 45, 1), rgba(25, 28, 45, 0));
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 75px;
    }

    .content-box {
        margin-bottom: 30px;
    }

    .post-title {
        font-size: 2.5em;
        width: 60%;
        margin-left: auto;
        margin-right: auto;
        font-weight: 800;
    }

    .post-content {
        a,
        a:hover,
        a:active,
        a:visited {
            color: #000000 !important;
            text-decoration: underline;

        }
    }

    .post {



        &_body {
            position: relative;
            width: auto;
            margin: 60px 20%;

        }

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
            padding: 0 !important;
            margin: 0 auto;
            position: absolute;
            left: 0;
            right: 0;

        }

        .navigation {
            border: none;
            transition: background-color 0.6s ease;
        }


        .navbar-collapse {
            position: relative;
            z-index: 1;
        }


    }


    .post__header {


        h2:first-child {
            margin-top: 0;
        }

        p:first-of-type {
            font-size: 1.2em;
            color: var(--title-color);
        }

        img {
            //width: calc(100% + var(--space) * 2);
            width: 100%;

        }
    }

    .post-comments {
        padding: calc(var(--space) / 2);

        &:empty {
            display: none;
        }
    }

    .post-author {
        margin-top: calc(var(--space) / 2);
    }


    .navbar-brand {
        padding: 0;
        margin: 0;
        margin-top: -15px;
        width: 118px;
    }

    a.link-back {
        position: absolute;
        top: 0px;
        left: -30%;
    }


    a.link-back,
    a.link-back:hover,
    a.link-back:active,
    a.link-back:visited {

        line-height: 50px;
        display: inline-block;
        font-weight: 600;
        font-size: 1.1em;

        text-decoration: none;

        .back-icon {
            height: 30px;
            width: 20px;
            vertical-align: text-top;

        }

        span {
            height: 30px;
            display: inline-block;
            line-height: 50px;
        }

    }


    @media only screen and (max-width: 767px) {

        .content-box {
            margin-bottom: 15px;
        }

        a.link-back {
            left: -15%;
        }

        .post_body {
            margin: 70px 15%;
        }

        .post-title {
            font-size: 2em;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            font-weight: 600;
        }


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

        .post .navbar .navbar-collapse a {

            background: #0D2538;

            padding-bottom: 16px;
            padding-top: 16px;


        }

        a.link-back,
        a.link-back:hover,
        a.link-back:active,
        a.link-back:visited {

            margin-top: -60px;
            font-weight: 600;
            font-size: 1em;

        }
    }


</style>
