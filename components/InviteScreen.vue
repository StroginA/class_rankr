<template>
    <main class="invite">
        <p class="invite__text">
            You have {{isAdmin ? "successfully created" : "been invited to"}}
        </p>
        <p class="invite__name">
            {{sessionName}}
        </p>
        <p class="invite__text">
            under the name
        </p>
        <p class="invite__name">
            {{name}}
        </p>
    </main>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: "InviteScreen",
  props: {
    name: String,
    isAdmin: Boolean,
    sessionName: String
  }
})
</script>

<style lang="scss" scoped>
.invite {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.75rem;

    &__text {
        text-align: center;
        margin-bottom: 1.25rem;
    }
    &__name {
        font-size: 1.25rem;
    }
}
</style>