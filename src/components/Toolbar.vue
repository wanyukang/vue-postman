<template>
  <v-toolbar
    color="red"
    dense
    app
  >
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-icon class="mx-3">fab fa-youtube</v-icon>
    <v-spacer></v-spacer>
    <v-layout row align-center style="max-width: 650px">
      <v-text-field
        placeholder="Search..."
        single-line
        append-icon="search"
        color="white"
        hide-details
      ></v-text-field>
    </v-layout>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'Toolbar',
    components: {
    },
    data: () => ({
      drawer: false,
      items: [
        { icon: 'trending_up', text: 'Most Popular' },
        { icon: 'subscriptions', text: 'Subscriptions' },
        { icon: 'history', text: 'History' },
        { icon: 'featured_play_list', text: 'Playlists' },
        { icon: 'watch_later', text: 'Watch Later' }
      ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' }
      ]
    }),
    props: {
      source: 'string or number',
      value: 'string or number'
    }
  }
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
