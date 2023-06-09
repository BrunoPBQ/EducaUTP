import React from 'react';
import bg1 from "../../assets/bg1.svg";
import bg2 from "../../assets/bg2.svg";
import logo from "../../assets/logo-Color.svg";
import logo2 from "../../assets/logo.svg";
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import UseInput from '../../Components/InputPassword/UseInput';
import { useAuth } from '../../Auth/AuthContext';

const Register = () => {
    const { SignUp } = useAuth()

    return (
        <div className='centrar w-100 h-100'>
            <div className='bg'>
                <img src={bg1} alt="" />
                <img src={bg2} alt="" />
            </div>
            <div className='formulario'>
                <div className="w-100">
                    <img src={logo} alt="Logo EducaUTP" className='d-none d-md-block' />
                    <img src={logo2} alt="Logo EducaUTP" className='d-md-none' />
                </div>
                <Formik
                    initialValues={{name: '', email: '', password: ''}}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'is-invalid';
                        } 
                        if (!values.password) {
                            errors.password = 'is-invalid';
                        }
                        if (!values.name) {
                            errors.name = 'is-invalid';
                        }

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        SignUp(values.name, values.email, values.password)
                        setSubmitting(false);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                    }) => (
                        <form onSubmit={handleSubmit} className='w-100'>
                            <h1 className='text-center py-2 fs-4 Poetsen'>Registro</h1>
                            <div className="form-floating mb-3">
                                <UseInput
                                    type="text"
                                    className={`form-control ${errors.name && touched.email && errors.name}`}
                                    name="name"
                                    id="input_name"
                                    placeholder="nombres y apellidos"
                                    autoComplete="username"
                                    text="Nombres y Apellidos"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                            </div>
                            <div className="form-floating mb-3">
                                <UseInput
                                    type="email"
                                    className={`form-control ${errors.email && touched.email && errors.email}`}
                                    name="email"
                                    id="input_email"
                                    placeholder="name@example.com"
                                    autoComplete="username"
                                    text="Correo Institucional"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </div>
                            <div className="form-floating input-group mb-3">
                                <UseInput
                                    type="password"
                                    className={`form-control ${errors.password && touched.password && errors.password}`}
                                    name="password"
                                    id="input_password"
                                    placeholder="Password"
                                    text="Contraseña"
                                    autoComplete="current-password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                            </div>
                            <div className='w-100 centrar mt-4'>
                                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Registrase</button>
                            </div>
                            <div className='w-100 text-center mt-4 d-md-none'>
                                <div className='text-muted '>
                                    ¿Ya tienes cuenta?
                                    <Link to="/login" className='mx-1 text-decoration-none'>
                                        Inicia Sesión
                                    </Link>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
                <div className='footer text-center w-100'>
                    <div className='text-muted d-none d-md-block'>
                        ¿Ya tienes cuenta?
                        <Link to="/login" className='mx-1 text-decoration-none'>
                            Inicia Sesión
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
