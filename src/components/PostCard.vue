<template>
  <div class="post-card content-box" :class="{'post-card--has-poster' : post.poster}">
    <div class="post-card__header">
      <g-image alt="Cover image" v-if="post.coverImage" class="post-card__image" :src="post.coverImage" />
    </div>
    <div class="post-card__content">
      <h5 class="post-card__title my-4" v-html="post.title" />
      <!--
      <div class="post-card__description" v-html="post.description" />
      -->
      <PostMeta class="post-card__meta" :post="post" />
      <g-link class="post-card__link" :to="post.path">Link</g-link>
    </div>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['post'],
}
</script>

<style lang="scss">
.post-card {
  //margin-bottom: var(--space);
  position: relative;

  min-height: 300px;

  &__header {
    margin-left: calc(var(--space) * -1);
    margin-right: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    margin-top: calc(var(--space) * -1);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    &:empty {
      display: none;
    }
  }

  &__image {
    min-width: 100%;
  }

  &__title {
    min-height: 60px;
    font-weight: 800;
    margin-top: 0;
    font-size: 1.4em;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 10px 30px 0 rgba(0,0,0,.1);
  }

  &__tags {
    z-index: 1;
    position: relative;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}

@media only screen and (max-width: 767px) {

  .post-card {
    min-height: auto;
    &__title {
      min-height: 30px;

    }
  }

}
</style>
