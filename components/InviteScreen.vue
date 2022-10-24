<template>
    <main class="invite">
        <p v-if="$fetchState.pending">
            Please wait...
        </p>
        <template v-else-if="$fetchState.error">
            <p>
                There has been an error processing this invite code.
                <br>
                Perhaps it was copied incorrectly or was used already?
            </p>
            <Button class="invite__button" @click="$router.push('/')">Return to the main page</Button>
        </template>
        <template v-else>
            <span class="invite__text">
                You have {{inviteDetails?.isAdmin ? "successfully created" : "been invited to"}}
            </span>
            <span class="invite__name">
                {{inviteDetails?.sessionName}}
            </span>
            <span class="invite__text">
                under the name
            </span>
            <span class="invite__name">
                {{inviteDetails?.name}}
            </span>
            <Button class="invite__button">Proceed</Button>
        </template>
    </main>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/common/Button.vue'

export default Vue.extend({
  name: "InviteScreen",
  components: { Button },
  props: {
    inviteCode: String
  },
  data() {
    return {
        inviteDetails: null as null | {name: string, isAdmin: boolean, sessionName: string}
    }
  },
  async fetch() {
    const {$axios} = this.$nuxt.context;
    this.inviteDetails = await $axios.$get(
        'api/users/getInviteDetails', {
            params: {
                inviteCode: this.inviteCode
            }
        }
    ) as {name: string, isAdmin: boolean, sessionName: string};
  },
  fetchOnServer: false
})
</script>

<style lang="scss" scoped>
.invite {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0.75rem;

    &__text {
        margin-bottom: 1rem;
    }
    &__name {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
}
</style>