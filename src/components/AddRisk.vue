<template>
    <div class="vertical-container">
        <h1>{{ title }}</h1>
        <input 
            type="text" 
            name="riskType" 
            id="risk-type" 
            placeholder="Enter Risk Type" 
            v-model="riskType" 
        >
        <button>+</button>
        <button>Submit</button>

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