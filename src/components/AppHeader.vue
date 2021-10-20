<template>
    <div>
        <div class="ui secondary pointing menu">
            <a class="item active">
                Image Storage
            </a>

            <div class="right menu">
                <a class="ui item" @click="login">
                    Login
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'AppHeader',
    methods: mapActions(['login'])
     
}
</script>
