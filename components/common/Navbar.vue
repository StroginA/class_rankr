<template>
    <nav class="navbar">
        <div class="navbar__upper">
            <NuxtLink class="navbar__brand" to="/"><Brand /></NuxtLink>
        </div>
        <div class="navbar__lower">
            <div class="navbar__menu">
                <NuxtLink class="navbar__link" to="/about">About</NuxtLink>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import Brand from './Brand.vue';

export default Vue.extend({
    name: "Navbar",
    components: { Brand }
})
</script>

<style lang="scss" scoped>
.navbar {
    color: $white-1;
    &__upper {
        background-color: #1a1a1a;
        height: 2.5rem;
        padding-left: 0.5rem;
        display: flex;
        align-items: center;
    }
    &__brand {
        display: block;
        font-size: 2rem;

    }
    &__lower {
        background-color: #4d4d4d;
        height: 2.5rem;
    }
    &__link {
        color: $white-1;
    }
}
</style>