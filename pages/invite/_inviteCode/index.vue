<template>
    <InviteScreen
    :name="inviteDetails.name"
    :isAdmin="inviteDetails.isAdmin"
    :sessionName="inviteDetails.sessionName"
    />
</template>

<script lang="ts">
import Vue from 'vue';
import InviteScreen from '@/components/InviteScreen.vue';

export default Vue.extend({
    name: "IndexPage",
    components: { InviteScreen },
    async asyncData({params, $axios}) {
        const inviteDetails = await $axios.$get(
            'api/users/getInviteDetails', {
                params: {
                    inviteCode: params.inviteCode
                }
            }
        ) as {name: string, isAdmin: boolean, sessionName: string};
        return { inviteDetails }
    }
})
</script>