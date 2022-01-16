<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <v-card class="mx-auto" max-width="800">
          <v-img
            :src="
              nasaResponseData[0].hdurl
                ? nasaResponseData[0].hdurl
                : nasaResponseData[0].url
            "
            class="white--text align-end"
            height="auto"
            max-height="600px"
            cover
          >
            <v-card-title> card title </v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0"> card subtitle </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>some text</div>
            <div>more more text</div>
          </v-card-text>

          <v-card-actions>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { INasaApiData } from "@/types/nasa.type";
import axios from "axios";

@Component
export default class Home extends Vue {
  nasaResponseData: INasaApiData[] = [];

  async created(): Promise<void> {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.VUE_APP_NASA_API_KEY}&count=5`
      )
      .then((response) => {
        this.nasaResponseData = response.data;
        console.log(this.nasaResponseData[0].url);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
</script>

<style lang="scss" scoped></style>
