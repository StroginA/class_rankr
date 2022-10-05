<template>
    <form class="form">
        <label class="form__label" 
        for="groupName">Enter the name for your class (or any other group you're creating this lobby for):</label>
        <input class="form__input input" type="text" id="groupName" v-model="groupName" />
        <label class="form__label" for="creatorName">Enter your name (This is what others will see you as):</label>
        <input class="form__input input" type="text" id="creatorName" v-model="creatorName" />
        <label class="form__label" for="creatorGender">Pick your gender (This is public to other lobby members!):</label>
        <div class="form__gender-picker" id="creatorGender">
            <div class="form__gender-option">
                <input type="radio" id="male" value="male" v-model="creatorGender" />
                <label class="form__label" for="male">Male</label>
            </div>
            <div class="form__gender-option">
                <input type="radio" id="female" value="female" v-model="creatorGender" />
                <label class="form__label" for="female">Female</label>    
            </div>
        </div>
        <Button :disabled="!(groupName && creatorName)" type="button" name="submit">Submit and create lobby</Button>
    </form>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '~/components/common/Button.vue';

export default Vue.extend({
    name: "NewGroupForm",
    components: { Button },
    data() {
        return {
            groupName: "",
            creatorName: "",
            creatorGender: "male",
        }
    },
    methods: {

    }
})
</script>

<style lang="scss" scoped>
.form {
    display: flex;
    flex-direction: column;
    &__input {
        margin-bottom: 0.5rem;
    }
    &__gender-picker {
        padding: 1rem;
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 2rem;
    }
}
</style>