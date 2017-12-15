<template>
    <div>
        <h3>{{ risk[0]['risk']['type'] }}</h3>
        <!-- <p>risk: {{ risk[1] }}</p> -->
        <ul class="fields">
            <li v-for="field in risk[1]['fields']" :key="field.name">
                <div class="row">
                    <label :for="field.name" class="active left">{{field.name}}</label>
                    <input name="field.name" :type="field.data_type" :placeholder="field.name">
                </div>
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
    label {
        font-size: 20px;
        text-transform: capitalize;
    }

    ul {
        list-style: none;
    }

    .fields {
        margin-bottom: 100px;
        display: flex;
        flex-direction: column;
    }

    input {
        margin-top: 10px !important; 
        font-size: 30px !important;
    }
</style>