<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ riskType }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                title: 'Add Risk'
            }
        },
        computed: {
            ...mapGetters('addRisk', [
                'riskType'
            ])
        }
    }
</script>

<style scoped>

</style>