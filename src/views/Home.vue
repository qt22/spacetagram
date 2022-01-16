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
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

@Component
export default class Home extends Vue {
  async created(): Promise<void> {
    console.log(process.env.VUE_APP_NASA_API_KEY);
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.VUE_APP_NASA_API_KEY}`
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
</script>

<style lang="scss" scoped></style>
