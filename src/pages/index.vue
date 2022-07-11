<script setup="" lang="ts">
import tulisan from "../tulisan";
document.title = "Github";
</script>

<template>
  <div class="bg-black sm:min-h-screen sm:p-15">
    <div class="bg-white w-800px max-w-100% mx-auto">
      <div class="p-5 sm:p-10">
        <h1 class="text-3xl">Github</h1>
        <p>Kumpulan info tentang akun Githubku</p>
      </div>

      <ol class="p-5 sm:p-10">
        <li v-for="x in tulisan" class="mb-3">
          <router-link :to="`/tulisan/${x.slug}`" class="underline">{{
            x.judul
          }}</router-link>
        </li>
      </ol>
    </div>
  </div>
</template>
