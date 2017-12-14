<template>
    <div>
        <h3>{{ title }}</h3>
        <p>id: {{ id }}</p>
        <p>risk: {{ risk }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                title: 'Single Risk View',
                id: this.$route.params.id
            }
        },
        computed : {
            ...mapGetters('singleRisk', [
                'risk'
            ])
        },
        methods: {
            ...mapActions('singleRisk', [
                'getRisk'
            ])
        },
        mounted() {
            this.getRisk(this.id)
        }
    }
</script>

<style scoped>

</style>