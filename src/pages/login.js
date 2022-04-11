import Layout from "../components/layout/Layout";
import LoginForm from "../components/LoginForm";

const Login = () => {
    return (
        <Layout>
            <div className="flex flex-col md:flex-row h-screen items-center justify-center p-7 md:p-5 md:pl-0 w-screen backdrop-filter bg-[url(/images/bg-login.jpg)] bg-cover bg-no-repeat bg-top">
                <div className="flex justify-center">
                    <img src="images/logo_blanco.png" className="w-3/5" alt="logo_blanco" />
                </div>
                <div className="flex flex-col bg-white rounded-lg mt-8 md:mt-0 justify-center items-center w-full md:w-[80%] py-10 h-auto md:h-full space-y-3 text-gray-700 shadow-xl">
                    <LoginForm />
                </div>
            </div>
        </Layout>
    );
}

export default Login;
