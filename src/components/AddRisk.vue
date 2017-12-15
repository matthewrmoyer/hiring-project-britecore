<template>
    <div>
        <form class = "col s12">
            <h3>{{ title }}</h3>
            <div class="row">
            <label for="risk-type" class="left">Type the New Risk Type Below</label>
            <input 
                class="col s12 risk-type-input"
                type="text" 
                name="riskType" 
                id="risk-type" 
                placeholder="Automobile" 
                v-model="riskType" 
            >
            </div>
        </form>
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
                    v-model="fieldName"
                    @input="setFieldName"
                >
            </div>
            <br>
            <h6>Select the Data Type of this Field</h6>
            <div class="row radio-container">
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
                <a href="#/addRisk" class="modal-action modal-close waves-effect waves-green btn-flat addFieldModal" @click="submitField">Add Field</a>
            </div>
        </div>
        </div>
        <ul class="addedFields">
            <li v-for="field in fields" :key="field.name">
                <div>
                    <h5 class="addedFieldsHeading left">{{field.name}} Field of type {{field.type}}<i class="material-icons right green-check">check_circle</i></h5>
                </div>                 
            </li>
        </ul>
        <div class="row">
            <a class="waves-effect waves-light btn modal-trigger" href="#addFieldModal">Add Field</a>
        </div>    
        <div class="row">
            <button class="btn waves-effect waves-light" type="submit" name="action" @click="submitRisk">Submit
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
                'addField',
                'postRisk'
            ]),
            setFieldType() {
                this.fieldType = event.target.attributes.data.value
            },
            setFieldName() {
                this.fieldName = event.target.value
            },
            setFieldValue() {
                this.$store.dispatch('addRisk/addFieldValue', {fieldName: event.target.id, fieldValue: event.target.value})
            },
            async submitField(){
                await this.addField({type: this.fieldType, name: this.fieldName})
                this.clearFields()
            },
            clearFields() {
                this.fieldName = ''
            },
            submitRisk() {
                this.postRisk({type: this.riskType, fields: this.fields})
            }
        }
    }
</script>

<style scoped>
    label {
        font-size: 20px;
    }
    .radio-container{
        display: flex;
        justify-content: space-between;
    }
    ul {
        list-style: none;
    }
    .addedFields {
        margin-bottom: 100px;
        display: flex;
        flex-direction: column;
    }
    .addedFieldsHeading {
        text-transform: capitalize;
    }
    .green-check {
        color: green;
    }
    .risk-type-input {
        margin-top: 10px !important; 
        font-size: 30px !important;
    }
    .addFieldModal {
        background-color: #00af9c;
        color: white;
        box-shadow: 1px 1px 5px gray;
    }
</style>