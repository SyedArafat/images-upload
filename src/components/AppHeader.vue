<template>
    <div>
        <div class="ui secondary pointing menu">
            <a class="item active">
                Image Storage
            </a>
            <div class="right menu">
                <div v-if="isLoggedIn" class="horizontal">
                    <a class="item">Galleries</a>
                    <a class="item">Upload</a>
                    <a class="item">Galleries</a>
                </div>
                <div v-else>
                    <a class="ui item" @click="login">
                        Login
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'AppHeader',
    computed: mapGetters(['isLoggedIn']),
    methods: mapActions(['login']),
     
}
</script>

<style scoped>
.horizontal {
    display: flex;
    flex-direction: row;
}
</style>
