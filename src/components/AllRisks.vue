<template>
    <div>
        <h3>{{ title }}</h3>
        <ul>
            <li v-for="risk in risks" :key="risk">
                {{ risk }}
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                title: 'Showing All Risk Types'
            }
        },
        computed: {
            ...mapGetters('allRisks', [
                'risks'
            ])
        }
    }
</script>

<style scoped>

</style>