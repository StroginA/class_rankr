<template>
    <button class="button"
    v-on="$listeners">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import Vue from 'vue';


export default Vue.extend({
    name: "Button"
})
</script>

<style lang="scss" scoped>
.button {
    background-color: $primary;
    padding: 0.5rem;
    border-width: 0;
    border-style: solid;
    border-radius: 0.25rem;
    cursor: pointer;
    vertical-align: middle;
    &:hover, &:active {
        filter: brightness(0.9);
    }
    &_small-icon {
        background-color: inherit;
        filter: brightness(0.9);
        width: 2rem;
        height: 2rem;
        border-radius: 9999px;
        &:hover, &:active {
            filter: brightness(0.8);
        }
    }
}
</style>