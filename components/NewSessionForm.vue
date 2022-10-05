<template>
    <form class="form">
        <label class="form__label" 
        for="groupName">Enter the name for your class (or any other group you're creating this lobby for):</label>
        <input class="form__input input" type="text" id="groupName" v-model="sessionName" />
        <label class="form__label" for="creatorName">Enter your name (This is what others will see you as):</label>
        <input class="form__input input" type="text" id="creatorName" v-model="creatorName" />
        <label class="form__label" for="creatorGender">Pick your gender (This is public to other lobby members!):</label>
        <div class="form__gender-picker" id="creatorGender">
            <div class="form__gender-option">
                <input type="radio" id="male" value="m" v-model="creatorGender" />
                <label class="form__label" for="male">Male</label>
            </div>
            <div class="form__gender-option">
                <input type="radio" id="female" value="f" v-model="creatorGender" />
                <label class="form__label" for="female">Female</label>    
            </div>
        </div>
        <Button 
        :disabled="!(sessionName && creatorName)" 
        type="button" name="submit"
        @click="handleSubmitNewSession">{{submitButtonText}}</Button>
    </form>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '~/components/common/Button.vue';

export default Vue.extend({
    name: "NewSessionForm",
    components: { Button },
    data() {
        return {
            sessionName: "",
            creatorName: "",
            creatorGender: "m",
            submitButtonText: "Create new lobby"
        }
    },
    methods: {
        async handleSubmitNewSession() {
            this.submitButtonText = "Submitting..."
            await this.$axios.$post('/api/sessions/create', {
                sessionName: this.sessionName,
                creatorName: this.creatorName,
                creatorGender: this.creatorGender
            });
            this.sessionName = "";
            this.creatorName = "";
            this.creatorGender = "m";
            this.submitButtonText = "Create new lobby";
            this.$emit('close-modal');
        }
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