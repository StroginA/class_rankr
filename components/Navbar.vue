<template>
    <nav>
        <div class="bg-gray-800 text-gray-100 h-10">
            <NuxtLink to="/">Class_RankR</NuxtLink>
        </div>
        <div class="bg-gray-600 text-gray-100 h-10">
            <NuxtLink to="/about">About</NuxtLink>
        </div>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: "Navbar",
})
</script>