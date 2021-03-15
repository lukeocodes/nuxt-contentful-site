<template>
  <div>
    <h1>{{ person.fields.name }}</h1>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        {{ post.fields.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";

const client = createClient();

export default {
  // `env` is available in the context object
  asyncData({ env }) {
    return Promise.all([
      // fetch the owner of the blog
      client.getEntries({
        "sys.id": env.CONTENTFUL_PERSON,
      }),
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: env.CONTENTFUL_POST_TYPE,
        order: "-sys.createdAt",
      }),
    ])
      .then(([entries, posts]) => {
        // return data that should be available
        // in the template
        return {
          person: entries.items[0],
          posts: posts.items,
        };
      })
      .catch(console.error);
  },
};
</script>
