<template>
    <footer class="footer">
        <a class="footer__link link" 
        href="https://palewebserial.wordpress.com/about/">Concept belongs to J. C. 'Wildbow' McCrae</a>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: "AppFooter",
})
</script>

<style lang="scss" scoped>
.footer {
    background-color: $grey-1;
    color: $white-1;
    display: flex;
    height: 2.5rem;
    &__link {
        align-self: flex-end;
        margin-left: auto;
        margin-right: 0.5rem;
    }
}
</style>