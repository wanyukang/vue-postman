<template>
  <!-- <v-container fluid> -->
    <!-- <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    > -->
      <!-- clipped -->
    <v-navigation-drawer
      v-bind:mini-variant="this.isDrawer"
      persistent
      enable-resize-watcher
      fixed
      app
      permanent
    >
      <v-toolbar dense class="red">
        <v-list-tile-action>
          <img src="@/assets/logo-glyph.png" alt="Vuetify.js" class="xs-1" width="32" height="32">
        </v-list-tile-action>
        <v-list-tile-title class="title" >
          <span id="title">Postman</span>
        </v-list-tile-title>
      </v-toolbar>
        <!-- class="mx-3" -->
        <!-- flat÷ -->
        <!-- solo-inverted -->
      <div>
      <v-text-field
        hide-details
        label="Search"
        prepend-inner-icon="search"
        outline
      ></v-text-field>
      </div>

      <!-- <v-divider></v-divider> -->

    <div>
      <v-tabs
        v-model="active"
        slider-color="red"
        centered
      >
        <v-tab>history</v-tab>
        <v-tab-item>

        </v-tab-item>

        <v-tab>collections</v-tab>
        <v-tab-item>
          <v-list dense>
            <v-list-tile v-for="item in items" :key="item.text" @click="">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-subheader class="mt-3 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
            <v-list>
              <v-list-tile v-for="item in items2" :key="item.text" avatar @click="">
                <v-list-tile-avatar>
                  <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt="">
                </v-list-tile-avatar>
                <v-list-tile-title v-text="item.text"></v-list-tile-title>
              </v-list-tile>
            </v-list>
            <v-list-tile class="mt-3" @click="">
              <v-list-tile-action>
                <v-icon color="grey darken-1">add_circle_outline</v-icon>
              </v-list-tile-action>
              <v-list-tile-title class="grey--text text--darken-1">Browse Channels</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon color="grey darken-1">settings</v-icon>
              </v-list-tile-action>
              <v-list-tile-title class="grey--text text--darken-1">Manage Subscriptions</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-tab-item>
      </v-tabs>
    </div>
    </v-navigation-drawer>
  <!-- </v-container> -->
</template>

<script>
  export default {
    name: 'Navbar',
    components: {

    },
    data: () => ({
      active: true,
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
    computed: {
      isDrawer () {
        return this.$store.state.drawer
      }
    },
    props: {
      source: String,
      value: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
