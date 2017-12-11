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
              <!-- Modal Trigger -->


        <!-- Modal Structure -->
        <div id="addFieldModal" class="modal">
            <div class="modal-content">
            <h4>Add A Field and a Data Type</h4>
            <div class="row">
                <label for="new-field-name" class="left">New Field Name</label>
                <input 
                    type="text" 
                    name="newFieldName" 
                    id="new-field-name"
                    placeholder="Address"
                    @input="setFieldName"
                >
            </div>
            <br>
            <h6>Select the Data Type of this Field</h6>
            <div class="row radio-container">
                <!-- <label for="new-field-type" class="left">New Field Value</label> -->
                <p>
                    <input name="group1" type="radio" id="radio1" data="text" @click="setFieldType"/>
                    <label for="radio1">Text</label>
                </p>
                
                <p>
                    <input name="group1" type="radio" data="number" id="radio2" @click="setFieldType"/>
                    <label for="radio2">Number</label>
                </p>
                <p>
                    <input name="group1" type="radio" data="date" id="radio3" @click="setFieldType"/>
                    <label for="radio3">Date</label>
                </p>

            </div>
            <div class="modal-footer">
            <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat" @click="addField({type: fieldType, name: fieldName})">Add Field</a>
            </div>
        </div>
        </div>
        <ul>
            <li v-for="field in fields" :key="field.name">
                    <div class="row">

                        <label for="new-field-name" class="left">{{field.name}}</label>
                        <input 
                            name="field.name" 
                            :type="field.type" 
                            :id="field.name" 
                            @input="setFieldValue"
                        />
                    </div>
            </li>
        </ul>
        <div class="row">
            <a class="waves-effect waves-light btn modal-trigger" href="#addFieldModal">Add Field</a>
        </div>    
        <div class="row">
            <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                <i class="material-icons right">send</i>
            </button>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                title: 'Create a New Risk',
                fieldType: '',
                fieldName: ''
            }
        },
        created (){
            $(document).ready(() => {
            console.log('created');
                $('.modal').modal();
            })
        },
        computed: {
            ...mapGetters('addRisk', [
                'fields'
            ]),
            riskType: {
                get() {
                    return this.$store.getters['addRisk/riskType']
                },
                set() {
                    return this.updateRiskType(event.target.value)
                }
            },
        },
        methods: {
            ...mapActions('addRisk', [
                'updateRiskType',
                'addField'
            ]),
            setFieldType() {
                this.fieldType = event.target.attributes.data.value
            },
            setFieldName() {
                this.fieldName = event.target.value
            },
            setFieldValue() {
                console.log(event.target.id);
                
                console.log(event.target.value);
                this.$store.dispatch('addRisk/addFieldValue', {fieldName: event.target.id, fieldValue: event.target.value})
                
            }
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
    .radio-container{
        display: flex;
        justify-content: space-between;
    }
    ul {
        list-style: none;
    }
</style>