import React from 'react'
import { Form, Field, useForm } from "@leveluptuts/fresh";
import { useDispatch, useSelector } from 'react-redux';


export default function From() {
    const dispatch = useDispatch()
    const Form_data = useSelector(state => state.form_data)
    const { data } = useForm()

    const onSubmit = () => {

        let formData = data.defaults
        Form_data.push(formData)
        dispatch({ type: 'FORM_DATA', payload: Form_data })
    }

    return (
        <div>
            <Form formId="defaults" onSubmit={onSubmit} cancelButton={false} >
                <Field>Name of the Dish</Field> <br />
                <Field>Ingredient Name</Field> <br />
                <Field>Ingredient Quantity</Field><br />
                <Field>Unit Ingredient QTY</Field><br />
                <Field>Steps to Cook</Field><br />
                <Field>Picture URL</Field><br />
            </Form>
        </div>
    )
}