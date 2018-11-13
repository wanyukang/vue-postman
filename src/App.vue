<template>
  <v-app dark>

    <Navbar/>

    <Toolbar/>

    <!-- <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar> -->

    <v-content>
      <MainContent/>
      <!-- <HelloWorld/> -->
    </v-content>

  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Navbar from './components/Navbar'
import Toolbar from './components/Toolbar'
import MainContent from './components/MainContent'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Navbar,
    Toolbar,
    MainContent
  },
  data () {
    return {
      //
    }
  }
}
</script>
