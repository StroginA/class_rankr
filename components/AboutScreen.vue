<template>
    <main class="about">
        <p class="about__text">
            The concept and design of <strong>Class_RankR</strong>
            are taken from <em>Pale</em> by John 'Wildbow' McCrae.
            All rights belong to John 'Wildbow' McCrae. This is a fan implementation of the app.
        </p>

        <a class="about__link link" href="https://www.patreon.com/Wildbow">Support Wildbow</a>

        <a class="about__link link" href="https://palewebserial.wordpress.com/about/">Read Pale</a>
    </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: "AboutScreen",
})
</script>

<style lang="scss" scoped>
.about {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.75rem;

    &__text {
        margin-bottom: 1.25rem;
    }
    &__link {
        margin-bottom: 0.75rem;
        align-self: flex-start;
        &:last-child {
            margin: 0;
        }
    }
}
</style>