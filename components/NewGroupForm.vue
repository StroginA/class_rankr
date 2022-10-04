<template>
    <form>
        <label>Enter the name for your class or any other group you're creating this lobby for:</label>
        <input type="text" />
        <label>Enter your name:</label>
        <input type="text" />
        <label>Pick your gender (This is public to other lobby members!):</label>
        <div>
            <input type="radio" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" id="female" value="female" />
            <label for="female">Female</label>
        </div>
        <button class="button" type="button" name="submit">Submit and create lobby</button>
    </form>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '~/components/common/Button.vue';

export default Vue.extend({
    name: "NewGroupForm",
    components: { Button }
})
</script>