import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import GoogleIcon from '../../assets/icons8-google.svg';
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess } from '../../redux/authReduccer';
import { useEffect } from 'react';
import { isLoggedUser } from '../../redux/auth/actionAuth';

const Login = () => {

    const dispatch = useDispatch();
    const { user, isLogged } = useSelector((state: any) => state.userReducer);

    useEffect(() => {
        if (user.email) {
            console.log(user)
        }
    }, [user]);

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Email inválido').required('Campo obrigatório'),
        password: Yup.string().required('Campo obrigatório'),
    });

    const handleLogin = (values: any) => {
        dispatch(isLoggedUser(values))
    };

    const handleGoogleLogin = () => {
        console.log("login com o google");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleLogin}
                >
                    <Form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
                                Email
                            </label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Digite seu email"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
                                Senha
                            </label>
                            <Field
                                type="password"
                                id="password"
                                name="password"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Digite sua senha"
                            />
                            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Entrar
                        </button>
                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            className="w-full flex py-2 items-center justify-center bg-red-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                        >
                            <img src={GoogleIcon} alt="Google Icon" className="w-6 h-6 mr-2" />
                            Entrar com Google
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Login;
