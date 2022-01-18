<template>
  <v-app>
    <app-header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AppHeader from "@/components/AppHeader.vue";
import Component from "vue-class-component";

@Component({
  components: {
    AppHeader,
  },
})
export default class App extends Vue {}
</script>
