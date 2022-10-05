<template>
    <div class="brand">
        <img src="@/assets/icon.png" class="brand__icon" />
        <span class="brand__name">Class_Rank</span>
        <span class="brand__r">R</span>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: "Brand",
})
</script>

<style lang="scss" scoped>
.brand {
    display: flex;
    align-items: center;
    font-size: 1em;
    &__icon {
        display: block;
        height: 1em;
        margin-right: 0.25rem;
    }
    &__name {
        font-family: 'Russel Write TT';
        color: $white-1;
    }

    &__r {
        font-family: 'Magic Frankie';
        color: red;
    }
}
</style>