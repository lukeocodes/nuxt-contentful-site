<template>
  <div class="flex flex-col md:flex-row">
    <div class="flex-1">
      <h1>{{ person.fields.name }}</h1>
    </div>
    <div class="flex-none w-full max-w-xs mx-auto border md:mx-0"></div>
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";

const client = createClient();

export default {
  asyncData({ env }) {
    return Promise.all([
      client.getEntries({
        "sys.id": env.CONTENTFUL_PERSON,
      }),
    ])
      .then(([entries]) => {
        return {
          person: entries.items[0],
        };
      })
      .catch(console.error);
  },
};
</script>
