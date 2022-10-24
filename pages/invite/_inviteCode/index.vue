<template>
    <InviteScreen
    :inviteCode="$route.params.inviteCode"
    />
</template>

<script lang="ts">
import Vue from 'vue';
import InviteScreen from '@/components/InviteScreen.vue';

export default Vue.extend({
    name: "IndexPage",
    components: { InviteScreen }
})
</script>