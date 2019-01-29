<template>
  <v-app dark>
    <Navbar/>
    <Toolbar/>
    <v-content>
      <MainContent/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Toolbar from './components/Toolbar'
import MainContent from './components/MainContent'

export default {
  name: 'App',
  components: {
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
