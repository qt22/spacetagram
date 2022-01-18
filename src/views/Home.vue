<template>
  <v-container>
    <v-row>
      <v-col cols="12" v-for="image in nasaResponseData" :key="image.id">
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
              <v-btn
                :color="image.likeIconColor"
                icon
                @click="toggleLikeButton(image.id)"
              >
                <v-icon>{{ image.likeIcon }}</v-icon>
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

  async created(): Promise<void> {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.VUE_APP_NASA_API_KEY}&count=20`
      )
      .then((response) => {
        this.nasaResponseData = response.data;
        for (let i: number = 0; i < this.nasaResponseData.length; i++) {
          // remove video data types
          if (this.nasaResponseData[i].media_type === "video") {
            this.nasaResponseData.splice(i, 1);
          }
        }
        for (let i: number = 0; i < this.nasaResponseData.length; i++) {
          this.nasaResponseData[i].id = i;
          this.nasaResponseData[i].likeIcon = "mdi-heart-outline";
          this.nasaResponseData[i].likeIconColor = "grey";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  toggleLikeButton(id: number): void {
    // https://vuejs.org/v2/guide/reactivity.html#For-Arrays
    this.nasaResponseData[id]?.likeIcon === "mdi-heart-outline"
      ? this.nasaResponseData.splice(id, 1, {
          ...this.nasaResponseData[id],
          likeIcon: "mdi-heart",
        })
      : this.nasaResponseData.splice(id, 1, {
          ...this.nasaResponseData[id],
          likeIcon: "mdi-heart-outline",
        });

    this.nasaResponseData[id]?.likeIconColor === "grey"
      ? this.nasaResponseData.splice(id, 1, {
          ...this.nasaResponseData[id],
          likeIconColor: "red",
        })
      : this.nasaResponseData.splice(id, 1, {
          ...this.nasaResponseData[id],
          likeIconColor: "grey",
        });
  }
}
</script>

<style lang="scss" scoped></style>
