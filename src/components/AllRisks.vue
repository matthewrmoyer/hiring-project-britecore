<template>
    <div>
        <h3>{{ title }}</h3>
        <ul>
            <li v-for="risk in risks" :key="risk.id">
                {{ risk }}
            </li>
        </ul>
        <button @click="getRisks">getRisks</button>
        <li><router-link to="/risk/8">See One Risks</router-link></li>     

    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'

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
        },
        methods: {
            ...mapActions('allRisks', [
                'getRisks',
            ]),
            fetchData() {
                this.$http.get('https://britecore-backend.herokuapp.com/risks')
                    .then(response => {
                       return response.json();   
                    })
                    .then(data => console.log(data))
            }
        },
        mounted() {
            this.getRisks()
        }

    }
</script>

<style scoped>

</style>