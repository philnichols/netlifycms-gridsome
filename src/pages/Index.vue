<template>
    <div>
        <v-toolbar>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>Title</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat>Link One</v-btn>
                <v-btn flat>Link Two</v-btn>
                <v-btn flat>Link Three</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <Layout :show-logo="false">
            <!-- Author intro -->
            <Author :show-title="true"/>

            <!-- List posts -->
            <div class="posts">
                <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
            </div>

        </Layout>
    </div>
</template>

<page-query>
    {
    posts: allPost {
    edges {
    node {
    id
    title
    path
    tags {
    id
    title
    path
    }
    date (format: "D. MMMM YYYY")
    timeToRead
    description
    coverImage (width: 770, height: 380, blur: 10)
    ...on Post {
    id
    title
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
