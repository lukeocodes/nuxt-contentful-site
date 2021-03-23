<template>
  <div>
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <ul
        v-if="posts.items.length > 0"
        class="grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12"
      >
        <li
          v-for="(post, index) in posts.items"
          :key="index"
          class="flex flex-col"
        >
          <nuxt-link
            :to="`blog/${post.fields.slug}`"
            class="flex-grow block mt-4"
          >
            <p class="text-xl font-semibold text-gray-900">
              {{ post.fields.title }}
            </p>
            <p class="mt-3 text-base text-gray-500">
              {{ post.fields.description }}
            </p>
          </nuxt-link>
          <ContentfulAuthor :author="post.fields.author" />
        </li>
      </ul>
      <p v-else>No posts...</p>
    </div>
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";

const client = createClient();

export default {
  data() {
    return {
      posts: [],
    };
  },

  async fetch() {
    this.posts = await client.getEntries({
      content_type: "blogPost",
      order: "-sys.createdAt",
    });

    console.log(this.posts);
  },
};
</script>
