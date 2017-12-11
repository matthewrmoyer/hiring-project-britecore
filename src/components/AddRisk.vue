<template>
    <div>
        <form class = "col s12">
            <h3>{{ title }}</h3>
            <div class="row">
            <label for="risk-type" class="left">Risk Type</label>
            <input 
                class="col s12"
                type="text" 
                name="riskType" 
                id="risk-type" 
                placeholder="Automobile" 
                v-model="riskType" 
            >
            </div>
        </form>
        <div class="row">
            <a class="waves-effect waves-light btn">Add Field</a>
        </div>
        <div class="row">
            <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                <i class="material-icons right">send</i>
            </button>
        </div>
        <p>Risk Type: {{ riskType }}</p>

    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                title: 'Add Risk',
            }
        },
        computed: {
            riskType: {
                get() {
                    return this.$store.getters['addRisk/riskType']
                },
                set() {
                    return this.updateRiskType(event.target.value)
                }
            }
        },
        methods: {
            ...mapActions('addRisk', [
                'updateRiskType'
            ])
        }
    }
</script>

<style scoped>
    .vertical-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>