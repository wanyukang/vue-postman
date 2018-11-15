<template>
  <div>
    <v-card>
      <v-container fluid grid-list-xs>
        <!-- <v-layout row wrap> -->
          <!-- <v-divider></v-divider> -->
          <v-flex xs12>
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
                  <v-layout row wrap>
                  <v-flex xs12>
                    <v-card flat>
                      <!-- hide-details -->
                      <v-text-field
                        color='red'
                        label="name"
                        v-model="theName"
                      ></v-text-field>
                        <!-- hide-details -->
                    </v-card>
                  </v-flex>

                  <!-- <v-card flat> -->
                    <v-flex xs1>
                      <v-select
                        color='red'
                        :items="requestType"
                        label="Type"
                        outline
                      ></v-select>
                    </v-flex>

                    <v-flex xs9>
                      <v-text-field
                        color='red'
                        label="Url"
                        outline
                        hide-details
                      ></v-text-field>
                    </v-flex>

                    <v-flex xs1>
                      <v-btn 
                        color="info"
                        large
                      >
                        Send
                      </v-btn>
                    </v-flex>
                    
                    <v-flex xs1>
                      <v-btn 
                        light
                        depressed
                        large
                      >
                        Save
                      </v-btn>
                    </v-flex>

                    <v-flex xs12>
                      <v-tabs
                        v-model="active"
                        dark
                        show-arrows
                        min=300
                        slider-color="red"
                      >
                        <v-tab>
                          Params
                        </v-tab>
                          <v-tab-item>
                            <v-data-table
                              disable-initial-sort
                              v-model="selected"
                              :headers="headers"
                              :items="desserts"
                              item-key="name"
                              hide-actions
                              select-all
                              class="elevation-1"
                            >
                              <template slot="items" slot-scope="props">
                                <td>
                                  <v-checkbox
                                    v-model="props.selected"
                                    color='red'
                                    hide-details
                                  ></v-checkbox>
                                </td>
                                 <!-- class="text-xs-right" -->
                                <td>
                                  <v-text-field
                                    v-model="props.item.key"
                                    color='red'
                                    label=""
                                    single-line
                                    outline
                                    hide-details
                                  >
                                  </v-text-field>
                                </td>
                                <td>
                                  <v-text-field
                                    v-model="props.item.value"
                                    color='red'
                                    label=""
                                    single-line
                                    outline
                                    hide-details
                                  >
                                  </v-text-field>
                                </td>
                                <td>
                                  <v-text-field
                                    v-model="props.item.description"
                                    color='red'
                                    label=""
                                    single-line
                                    outline
                                    hide-details
                                  >
                                  </v-text-field>
                                </td>
                              </template>
                            </v-data-table>
                          </v-tab-item>

                        <v-tab>
                          Authorization
                        </v-tab>
                          <v-tab-item>
                          </v-tab-item>

                        <v-tab>
                          Headers
                        </v-tab>
                          <v-tab-item>
                          </v-tab-item>

                      </v-tabs>
                    </v-flex>
                  <!-- </v-card> -->

                </v-layout>
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
            
          </v-flex>

          <v-flex xs12>
            
          </v-flex>
        <!-- </v-layout> -->
      </v-container>
      
      
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
      requestType: [
        {text: 'GET'},
        {text: 'POST'},
        {text: 'PUT'},
        {text: 'DELETE'},
      ],
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
      ],
      selected: [],
      headers: [
        {
          text: 'KEY',
          align: 'left',
          sortable: false,
          value: 'key'
        },
        { 
          text: 'VALUE', 
          align: 'left',
          sortable: false,
          value: 'value' 
        },
        {
          text: 'DESCRIPTION', 
          align: 'left',
          sortable: false,
          value: 'description' 
        }
      ],
      desserts: [
        {
          key: 'Frozen Yogurt',
          value: 159,
          description: '1%'
        },
        {
          key: 'Ice cream sandwich',
          value: 237,
          description: '1%'
        },
        {
          key: 'Eclair',
          value: 262,
          description: '7%'
        },
        {
          key: 'Cupcake',
          value: 4.3,
          description: '8%'
        },
        {
          key: 'Gingerbread',
          value: 356,
          description: '16%'
        },
        {
          key: 'Jelly bean',
          value: 375,
          description: '10%'
        }
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
