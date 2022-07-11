<script setup="" lang="ts">
import { onMounted } from "vue";
import tulisan from "../tulisan";

function acak(array: Array<any>): Array<any> {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const tulisanLainnya = acak(tulisan).slice(0, 5);

onMounted(() => {
  const adaH1 = document.querySelector("h1");
  if (adaH1) {
    document.title = adaH1.innerText;
  }
});
</script>

<template>
  <div class="tulisan prose mx-auto p-3">
    <router-view></router-view>
    <h2>Tulisan Lainnya</h2>
    <ul>
      <li v-for="x in tulisanLainnya">
        <router-link :to="`/tulisan/${x.slug}`">{{ x.judul }}</router-link>
      </li>
    </ul>
  </div>
</template>
