import React from 'react';
import PageWrapper from '../PageWrapper/PageWrapper';
import { Formik, Form, useField, FieldArray } from 'formik';
import * as yup from 'yup';
import './NewRecipeTemplate.css';

const initialValues = {
    nazev_receptu: '',
    uvodni_text: '',
    ingredients: [
        {
            name: '',
        },
        {
            name: '',
        },
    ],
    postup: '',
    cas: '',
};

let ContactFormSchema = yup.object().shape({
    nazev_receptu: yup
        .string('Vložte pouze text')
        .min(3, 'Minimální počet znaků je 3')
        .required('Toto pole je povinné')
        .matches(/(Ackee|ackee)/, 'Název musí obsahovat ackee nebo Ackee'),
    uvodni_text: yup
        .string('Vložte pouze text')
        .min(3, 'Minimální počet znaků je 3')
        .required('Toto pole je povinné'),
    ingredients: yup.array().of(
        yup.object().shape({
            name: yup
                .string('Vložte pouze text')
                .min(3, 'Minimální počet znaků je 3')
                .required('Toto pole je povinné'),
        }),
    ),

    postup: yup
        .string('Vložte pouze text')
        .min(3, 'Minimální počet znaků je 3')
        .required('Toto pole je povinné'),
    cas: yup
        .number()
        .typeError('Vložte pouze číslo')
        .min(1, 'Minimální počet znaků je 1')
        .required('Toto pole je povinné'),
});

async function sendData(data) {
    const arr = data.ingredients.map((ingredient) => {
        return ingredient.name;
    });

    const rawResponse = await fetch(
        `https://private-anon-3ea9070e39-cookbook3.apiary-proxy.com/api/v1/recipes`,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.nazev_receptu,
                description: data.uvodni_text,
                ingredients: [...arr],
                duration: data.cas,
                info: data.postup,
            }),
        },
    );
    const content = await rawResponse.json();
    console.log(content);
}

export default function NewRecipeTemplate() {
    return (
        <PageWrapper backButton={true} text="New recipe">
            <div className="formik-wrapper">
                <Formik
                    initialValues={initialValues}
                    validationSchema={ContactFormSchema}
                    onSubmit={(values, { resetForm }) => {
                        sendData(values);
                        resetForm({});
                    }}
                >
                    {({ values }) => (
                        <Form>
                            <CustomField
                                label="Název receptu"
                                name="nazev_receptu"
                                type="text"
                            />
                            <CustomField
                                label="Úvodní text"
                                name="uvodni_text"
                                type="text"
                            />
                            <FieldArray name="ingredients">
                                {({ insert, remove, push }) => (
                                    <>
                                        <h2>INGREDIENCE</h2>
                                        {values.ingredients.length > 0 &&
                                            values.ingredients.map(
                                                (friend, index) => (
                                                    <CustomField
                                                        key={index}
                                                        label={`Vaše ingredience`}
                                                        name={`ingredients.${index}.name`}
                                                        type="text"
                                                    />
                                                ),
                                            )}
                                        <button
                                            type="button"
                                            className="add-ingredient-btn"
                                            onClick={() => push({ name: '' })}
                                        >
                                            <i
                                                className="fa fa-plus"
                                                aria-hidden="true"
                                            ></i>
                                            PŘIDAT
                                        </button>
                                    </>
                                )}
                            </FieldArray>
                            <CustomField
                                label="Postup"
                                name="postup"
                                type="text"
                            />
                            <CustomField label="Čas" name="cas" type="text" />
                            <button
                                type="submit"
                                className="submit-ingredient-btn"
                            >
                                VLOŽIT RECEPT
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </PageWrapper>
    );
}

function CustomField({ name, label, ...props }) {
    const [field, meta] = useField(name);
    const error = meta.touched && meta.error;
    return (
        <div className="form-row">
            <label className="db">{label}:</label>
            <input {...field} {...props} />
            {error && <div className="red">{error}</div>}
        </div>
    );
}
