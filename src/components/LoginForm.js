import Link from 'next/link';
const LoginForm = () => {
    return (
        <>
            <h1 className="text-4xl font-semibold ">Hola!</h1>
            <h2 className='text-sm font-normal px-10 md:px-0 text-center'>Ingresa con tu cuenta de AlCostal para continuar</h2><br />
            <form className="flex flex-col md:w-1/2 space-y-3" onSubmit={login}>
                <input type="text" placeholder="Email" name="email" className='input-field' />
                <input type="password" placeholder="Contraseña" name="password" className='input-field' />
                <button className="button-primary" type="submit">Ingresar</button>
            </form>

            <div className='flex flex-col text-sm font-normal  justify-center items-center'>
                <p>¿Primera vez en AlCostal?</p>
                <p ><Link href='/register' >
                    <a className='underline font-semibold'>Crea una cuenta</a>
                </Link></p>
            </div>
        </>
    );
}

export default LoginForm;
