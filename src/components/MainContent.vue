<template>
  <div>
    <v-card>
      <v-divider></v-divider>
      <v-tabs
        v-model="active"
        dark
        show-arrows
        min=300
        slider-color="red"
      >
        <!-- <v-tabs-slider color="red"></v-tabs-slider> -->
    
        <v-tab>
          Get Cookies
        </v-tab>
        <!-- <v-tabs-items> -->
          <v-tab-item>
            <v-card flat>
                <!-- hide-details -->
              <v-text-field
                color='red'
                label="name"
                v-model="theName"
                hide-details
              ></v-text-field>
            </v-card>

            <v-card flat>
              <v-flex xs1 sm1 md1>
                <v-select
                  :items="items"
                  label="get"
                  solo
                  box
                  hide-details
                  dense
                ></v-select>
              </v-flex>
            </v-card>

          </v-tab-item>
        <!-- </v-tabs-items> -->

          <v-tab>
          Set Cookies
          </v-tab>
          <!-- <v-tabs-items> -->
            <v-tab-item>
              <v-card flat>
                <v-text-field
                  color='red'
                  hide-details
                  label="name"
                  v-model="theName1"
                ></v-text-field>
              </v-card>
            </v-tab-item>
          <!-- </v-tabs-items> -->
      </v-tabs>
      
      <!-- <chrome-tabs
        ref="tabs"
        v-model="tabs"
        :tab-id.sync="tabId"
        :default-tab="{ title: 'Default tab' }"
      >
      </chrome-tabs> -->
      <!-- <p>
        <button @click="toggleDarkTheme">Toggle dark theme</button> &nbsp;
        <button @click="addTab">Add new tab</button> &nbsp;
        <button @click="removeTab">Remove current tab</button>
      </p> -->
    
      <!-- <v-card-text>
        <v-layout row wrap>
          <v-flex xs6>
            <v-select
              label='优先级test'
            ></v-select>
          </v-flex>
        </v-layout>
      </v-card-text> -->
    </v-card>
  </div>
</template>

<script>
  // import 'vue-chrome-tabs/dist/vue-chrome-tabs.css'
  // import { ChromeTabs } from 'vue-chrome-tabs/dist/vue-chrome-tabs.common'

  export default {
    name: 'Main',
    components: {
      // 'chrome-tabs': ChromeTabs
    },
    data: () => ({
      theName: 'Get Cookies',
      theName1: 'Set Cookies',
      tabs: [],
      tabId: null,
      drawer: true,      
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
    mounted () {
      // this.toggleDarkTheme()
    },
    created () {

    },
    methods: {
      // toggleDarkTheme: function () {
      //   if (this.$refs.tabs.$el.classList.contains('chrome-tabs-dark-theme')) {
      //     document.documentElement.classList.remove('dark-theme')
      //     this.$refs.tabs.$el.classList.remove('chrome-tabs-dark-theme')
      //   } else {
      //     document.documentElement.classList.add('dark-theme')
      //     this.$refs.tabs.$el.classList.add('chrome-tabs-dark-theme')
      //   }
      // },
      // addTab () {
      //   this.$refs.tabs.addTab({
      //     title: 'New Tab',
      //     favicon: 'default-favicon.png'
      //   })
      // },
      // removeTab () {
      //   this.$refs.tabs.removeTab(this.$refs.tabs.currentTab)
      // }
    },
    props: {
      source: String,
      value: []
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html.dark-theme {
  background: #2b2b2b;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin: 16px;
}
@media (min-width: 800px) {
  body {
    margin: 60px;
  }
}
button {
  font-family: inherit;
  display: inline-block;
  background: #e0e0e0;
  border: 0;
  border-radius: 3px;
  padding: .6em 1em .7em;
  font-size: 13px;
  cursor: pointer;
  box-shadow: 0 .5px rgba(0, 0, 0, .5);
}
html.dark-theme p button {
  background: #505050;
  color: #fff;
  box-shadow: 0 .5px #000;
}
</style>
