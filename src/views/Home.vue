<template>
  <v-container>
    <v-row>
      <v-col cols="12" v-for="image in nasaResponseData" :key="image.title">
        <v-card class="mx-auto" max-width="800">
          <v-img
            :src="image.hdurl ? image.hdurl : image.url"
            height="600px"
            cover
          >
          </v-img>

          <div class="d-flex justify-space-between align-center">
            <v-card-title>{{ image.title }}</v-card-title>
            <v-card-actions>
              <v-btn :color="likeButtonColor" icon @click="toggleLikeButton()">
                <v-icon>{{ likeIcon }}</v-icon>
              </v-btn>
            </v-card-actions>
          </div>

          <v-card-text class="text--primary pt-2">
            <div>{{ image.explanation }}</div>
          </v-card-text>

          <v-card-subtitle class="pt-0 pb-1">
            {{ image.date }}
          </v-card-subtitle>
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
  likeIcon: string = "mdi-heart-outline";
  likeButtonColor = "grey";

  async created(): Promise<void> {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.VUE_APP_NASA_API_KEY}&count=20`
      )
      .then((response) => {
        this.nasaResponseData = response.data;
        console.log(this.nasaResponseData[0].url);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  toggleLikeButton(): void {
    this.likeButtonColor = this.likeButtonColor === "grey" ? "red" : "grey";
    this.likeIcon =
      this.likeIcon === "mdi-heart-outline" ? "mdi-heart" : "mdi-heart-outline";
  }
}
</script>

<style lang="scss" scoped></style>
