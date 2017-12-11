<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ riskType }}</p>
        <button @click="updateRiskType">Update Risk Type</button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
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
        },
        methods: {
            ...mapActions('addRisk', [
                'updateRiskType'
            ])
        }
    }
</script>

<style scoped>

</style>