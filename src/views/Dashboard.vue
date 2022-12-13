<template>
    Dashboard
    <button @click="login">Login!</button>
</template>
<script>
import { mapStore } from 'pinia';
import userStore from '../stores/user'

export default {
    computed: {
        ...mapStore(userStore)
    },
    methods: {
        login() {
            this.userStore.signUp()
        }
    }
}
</script>