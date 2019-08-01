<template>
    <Layout>
        <div class="post content-box">
            <div class="post__header">
                <g-image alt="Cover image" v-if="$page.post.coverImage" :src="$page.post.coverImage"/>
            </div>
            <h1 class="post-title__text">
                {{ $page.post.title }}
            </h1>
            <PostMeta :post="$page.post"/>
            <div class="post__content" v-html="$page.post.content"/>
            <!--
                 <div class="post__footer">
                   <PostTags :post="$page.post" />
            </div>
            -->
        </div>
        <!--
            <div class="post-comments">
               Add comment widgets here
        </div>
        -->
        <!--
          <Author class="post-author" />
          -->
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

                /*

                // Open Graph
                    { name: 'og:title', content: this.post.title },
                    { name: 'og:description', content: this.post.body },
                    { name: 'og:type', content: 'website' },
                    { name: 'og:url', content: 'https://nuxtjs.org' },
                    { name: 'og:image', content: 'https://nuxtjs.org/meta_640.png' },

                    // Twitter Card
                    { name: 'twitter:card', content: 'summary' },
                    { name: 'twitter:site', content: '@nuxt_js' },
                    { name: 'twitter:title', content: this.post.title  },
                    { name: 'twitter:description', content: this.post.body  },
                    { name: 'twitter:image', content: 'https://nuxtjs.org/meta_640.png' },
                    { name: 'twitter:image:alt', content: 'Nuxt.js Logo' }

                 */
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

    .content-box {
        margin-bottom: 30px;
    }

    .post-title {
        padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
        text-align: center;
    }

    .post {

        &__header {
            width: calc(100% + var(--space) * 2);
            margin-left: calc(var(--space) * -1);
            margin-top: calc(var(--space) * -1);
            margin-bottom: calc(var(--space) / 2);
            overflow: hidden;
            border-radius: var(--radius) var(--radius) 0 0;

            img {
                width: 100%;
            }

            &:empty {
                display: none;
            }
        }

        &__content {
            h2:first-child {
                margin-top: 0;
            }

            p:first-of-type {
                font-size: 1.2em;
                color: var(--title-color);
            }

            img {
                width: calc(100% + var(--space) * 2);
                margin-left: calc(var(--space) * -1);
                display: block;
                max-width: none;
            }
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
</style>
