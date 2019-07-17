<template>

    <Layout :show-logo="false">
        <!-- List posts -->
        <v-container fluid>
            <v-layout row wrap>
                <v-flex sm4 pa-2 v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node">
                    <PostCard :post="edge.node"/>
                </v-flex>
            </v-layout>
        </v-container>
        <!-- Author intro -->
        <Author :show-title="true"/>

    </Layout>

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
