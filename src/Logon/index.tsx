import { useState } from 'react'
import './style.scss'
import * as yup from 'yup';

import { Formik, Field, Form, FormikHelpers } from 'formik';

const Logon: React.FC = () => {

    const [page, setPage] = useState<number>(1)
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const schemaRegister = yup.object().shape({
        firstName: yup.string().min(3, "O nome deve ter mais de 3 letras").required('Preencha este campo'),
        lastName: yup.string().required('Preencha este campo'),
        passwordRegister: yup.string().min(8, 'No mínimo 8 caracteres').required('Preencha este campo'),
        passwordLogin: yup.string().min(8, 'No mínimo 8 caracteres').required('Preencha este campo'),
        emailAnddressRegister: yup.string().email('Deve ser do tipo Email').required('Preencha este campo'),
        emailAnddressLogin: yup.string().email('Deve ser do tipo Email').required('Preencha este campo'),
        url: yup.string().url('Url inválida').required('Preencha este campo'),
        phone: yup.string().min(8, 'Telefone precisa ter no mínimo 9 caracteres').required('Preencha este campo').matches(phoneRegExp, 'Formato de número inválido')
    })

    const schemaLogin = yup.object().shape({
        passwordLogin: yup.string().min(8, 'No mínimo 8 caracteres').required('Preencha este campo'),
        emailAnddressLogin: yup.string().email('Deve ser do tipo Email').required('Preencha este campo'),
    })

    function submit(values: any) {
        console.log(values)
    }

    return (
        <section className="containerLogon">
            <div className='headerLogon'>
                <div className={`boxHeaderLogon ${page == 1 ? 'active' : ''}`} id='login' onClick={() => setPage(1)}>
                    <span>Sing Up</span>
                </div>
                <div className={`boxHeaderLogon ${page == 2 ? 'active' : ''}`} id='register' onClick={() => setPage(2)}>
                    <span>Log in</span>
                </div>
            </div>
            <div className='bodyLogon'>
                <h2>{page == 1 ? 'Sing Up' : 'Log in'}</h2>
                <Formik
                    onSubmit={submit}
                    initialValues={page == 1 ? {
                        firstName: '',
                        lastName: '',
                        passwordRegister: '',
                        emailAnddressRegister: '',
                        phone: '',
                        url: '',
                    } : {
                        emailAnddressLogin: '',
                        passwordLogin: ''
                    }}
                    validateOnChange={true}
                    validationSchema={page == 1 ? schemaRegister : schemaLogin}
                    render={({ values, errors, handleChange }) => {
                        return (
                            <>
                                <Form>
                                    {page == 1 && (
                                        <>
                                            <section className='sectionDivisor'>
                                                <div className='groupInput'>
                                                    <label htmlFor="firstName">First Name</label>
                                                    <Field id={'firstName'} name={'firstName'} />
                                                    <span>{errors.firstName}</span>
                                                </div>
                                                <div className='groupInput'>
                                                    <label htmlFor="lastName">Last Name</label>
                                                    <Field id={'lastName'} name={'lastName'} />
                                                    <span>{errors.lastName}</span>
                                                </div>
                                            </section>
                                            <div className='groupInput'>
                                                <label htmlFor="passwordRegister">Password</label>
                                                <Field id={'passwordRegister'} name={'passwordRegister'} type={'password'} />
                                                <span>{errors.passwordRegister}</span>
                                            </div>
                                            <div className='groupInput'>
                                                <label htmlFor="emailAnddressRegister">Email anddress</label>
                                                <Field id={'emailAnddressRegister'} name={'emailAnddressRegister'} />
                                                <span>{errors.emailAnddressRegister}</span>
                                            </div>
                                            <section className='sectionDivisor'>
                                                <div className='groupInput'>
                                                    <label htmlFor="phone">Phone</label>
                                                    <Field id={'phone'} name={'phone'} />
                                                    <span>{errors.phone}</span>
                                                </div>
                                                <div className='groupInput'>
                                                    <label htmlFor="url">Profile picture url</label>
                                                    <Field id={'url'} name={'url'} />
                                                    <span>{errors.url}</span>
                                                </div>
                                            </section>
                                            <button type='submit'>Sign up</button>
                                        </>
                                    )}
                                </Form>
                                <Form>
                                    {page == 2 && (
                                        <>
                                            <div className='groupInput' style={{ width: '468px' }}>
                                                <label htmlFor="emailAnddressLogin">Email anddress</label>
                                                <Field id={'emailAnddressLogin'} name={'emailAnddressLogin'} />
                                                <span>{errors.emailAnddressLogin}</span>
                                            </div>
                                            <div className='groupInput' style={{ width: '468px' }}>
                                                <label htmlFor="passwordLogin">Password</label>
                                                <Field id={'passwordLogin'} name={'passwordLogin'} type={'password'} />
                                                <span>{errors.passwordLogin}</span>
                                            </div>
                                            <button type='submit'>Log in</button>
                                        </>
                                    )}
                                </Form>
                            </>)
                    }}

                >
                </Formik>
            </div>
        </section >
    )
}

export default Logon