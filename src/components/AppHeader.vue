<template>
  <v-card class="overflow-hidden">
    <v-app-bar app height="88px" color="#F5F5F5" hide-on-scroll>
      <div class="d-flex align-center ml-xs-2 ml-sm-8">
        <v-img :src="spaceIcon" height="64px" width="64px" contain></v-img>
        <v-toolbar-title class="ml-8">Spacetagram</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>
    <!-- <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1500px"> </v-container>
    </v-sheet> -->
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppHeader extends Vue {
  get spaceIcon() {
    return "https://img.icons8.com/external-itim2101-flat-itim2101/344/external-space-space-and-galaxy-itim2101-flat-itim2101.png";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
