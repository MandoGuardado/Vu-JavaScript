
<template>
    <ul>
        <!-- has to be capital V, was giving me an error using small case v. -->
        <li v-for="ninja in ninjas">{{ninja }}</li>
    </ul>
</template>

<script>
export default {
    data () {
        return {
          ninjas: ['Yoshi', 'Mario', 'Ryu', 'Armando']
        }
    }
}
</script>

<style>
</style>