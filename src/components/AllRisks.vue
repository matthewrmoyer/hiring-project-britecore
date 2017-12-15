<template>
    <div>
        <h3>{{ title }}</h3>
        <p class="flow-text">Select a risk type below, to see the details associated with that risk type, or to create a new instance of that risk type</p>
        <ul>
            <li v-for="risk in risks" :key="risk.id">
                <router-link :to="`/risk/${risk.id}`">{{ risk.type }}</router-link>                    
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                title: 'All Risk Types'
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
            }
        },
        mounted() {
            this.getRisks()
        }
    }
</script>

<style scoped>
    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 50vh;
    }
    li {
        margin-top: 20px !important; 
        font-size: 30px !important;
    }
    p {
        line-height: 1.25;
    }
</style>