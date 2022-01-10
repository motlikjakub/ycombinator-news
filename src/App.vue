<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { onMounted, reactive } from "vue"
import { getTop100StoriesId } from "./functions/getTop100StoriesId"
import { getStoriesDetail } from "./functions/getStoryDetail"

const state = reactive({
  stories: [],
})

onMounted(async () => {
  await getStoriesDetail(state.stories, await getTop100StoriesId())
})

</script>

<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Date Time</th>
        <th>Title</th>
        <th>internal URL</th>
        <th>external URL</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in state.stories">
        <td>{{ item.id }}</td>
        <td>{{ item.time.toLocaleString('cs-CZ') }}</td>
        <td>{{ item.title }}</td>
        <td><a :href="'https://news.ycombinator.com/item?id='+item.id">Internal link</a></td>
        <td><a v-if="item.url" :href="item.url">External link</a></td>
      </tr>
    </tbody>
  </table>
</template>

<style>
td {
  padding: 10px;
  border: 1px solid #000;
}
</style>
