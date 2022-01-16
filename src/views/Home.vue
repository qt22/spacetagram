<template>
  <v-container>
    <v-row>
      <v-col>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          blanditiis.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component
export default class Home extends Vue {}
</script>

<style lang="scss" scoped></style>
