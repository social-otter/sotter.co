import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle, signInWithGithub, signInWithMicrosoft } from '../../auth/index'
import { IUserResult } from '../../auth/index';
import { auth } from '../../auth/index';


const Login = () => {
    const [open, setOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState<any>();
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
    }, [])


    const handleLoginError = (error: any) => {
        console.error('Wooopps! Something went wrong.')
        console.error(error)
    }
    
    const handleLoginResult = (result: IUserResult) => {    
        console.info('Handle Login Result', result);

        if (result.succeed) {
            navigate('/app/dashboard')
        }else {
            handleLoginError(result.error)
        }
    }
    
    const handleLogin = async (provider: any) => {
        if (provider == 'google'){
            handleLoginResult(await signInWithGoogle())
        }
        if (provider == 'github'){
            handleLoginResult(await signInWithGithub())
        }
        if (provider == 'microsoft'){
            handleLoginResult(await signInWithMicrosoft())
        }
    }

    return (
        <>
            <div>
                {/* { currentUser && <>
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <div className='flex justify-center -mt-5'>
                            <span className='text-6xl'>🦦</span>
                        </div>
                        <span className='flex justify-center text-2xl'>Welcome back!</span>
                    </div>
                </>} */}

                <div className="grid gap-2">
                    <button disabled type="button" onClick={() => handleLogin('google')} className="flex flex-row text-gray-900 justify-center bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mb-2">
                        <span className='basis-1/4'>
                            <svg className="w-6 h-6 mr-5 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill='currentColor'><path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
                        </span>
                        <span className='basis-2/4'>
                            Sign up with Google
                            {/* {`Sign ${isSignIn ? '': ''} up with Google`} */}
                        </span>
                    </button>

                    <button disabled type="button" onClick={() => handleLogin('github')} className="flex flex-row text-gray-900 justify-center bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mb-2">
                        <span className='basis-1/4'>
                            <svg className="w-6 h-6 mr-5 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill='currentColor'><path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path></svg>
                        </span>
                        <span className='basis-2/4'>Sign up with Github</span>
                    </button>

                    <button disabled type="button" onClick={() => handleLogin('microsoft')} className="flex flex-row text-gray-900 justify-center bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mb-2">
                        <span className='basis-1/4'>
                            <svg className="w-6 h-6 mr-5 -ml-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" fill='currentColor'><path fill="#ff5722" d="M6 6H22V22H6z" transform="rotate(-180 14 14)"></path><path fill="#4caf50" d="M26 6H42V22H26z" transform="rotate(-180 34 14)"></path><path fill="#ffc107" d="M26 26H42V42H26z" transform="rotate(-180 34 34)"></path><path fill="#03a9f4" d="M6 26H22V42H6z" transform="rotate(-180 14 34)"></path></svg>
                        </span>
                        <span className='basis-2/4'>Sign up with Microsoft</span>
                    </button>
                </div>

                <div className="relative mt-8 mb-5">
                    <h1 className="text-sm text-center mb-2 font-black text-gray-500">Already have an account?</h1>
                </div>

                <div>
                    <button
                        type="submit"
                        onClick={() => setOpen(true)}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        {currentUser ? 'Welcome back! Open the app' : 'Sign in'}
                    </button>

                    <Transition.Root show={open} as={Fragment}>
                        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
                            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                </Transition.Child>

                                {/* This element is to trick the browser into centering the modal contents. */}
                                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                                    &#8203;
                                </span>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                >
                                    <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">

                                        <div>

                                            <div className="mt-3 text-center sm:mt-5">
                                                <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                                    Sign into your account.
                                                </Dialog.Title>
                                                <div className="mt-5">
                                                    <div className="grid gap-2">
                                                        <button type="button" onClick={() => handleLogin('google')} className="flex flex-row text-gray-900 justify-center bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mb-2">
                                                            <span className='basis-1/4'>
                                                                <svg className="w-6 h-6 mr-5 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill='currentColor'><path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
                                                            </span>
                                                            <span className='basis-2/4'>
                                                                Sign in with Google
                                                            </span>
                                                        </button>

                                                        <button type="button" onClick={() => handleLogin('github')} className="flex flex-row text-gray-900 justify-center bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mb-2">
                                                            <span className='basis-1/4'>
                                                                <svg className="w-6 h-6 mr-5 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill='currentColor'><path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path></svg>
                                                            </span>
                                                            <span className='basis-2/4'>Sign in with Github</span>
                                                        </button>

                                                        <button type="button" onClick={() => handleLogin('microsoft')} className="flex flex-row text-gray-900 justify-center bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mb-2">
                                                            <span className='basis-1/4'>
                                                                <svg className="w-6 h-6 mr-5 -ml-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" fill='currentColor'><path fill="#ff5722" d="M6 6H22V22H6z" transform="rotate(-180 14 14)"></path><path fill="#4caf50" d="M26 6H42V22H26z" transform="rotate(-180 34 14)"></path><path fill="#ffc107" d="M26 26H42V42H26z" transform="rotate(-180 34 34)"></path><path fill="#03a9f4" d="M6 26H22V42H6z" transform="rotate(-180 14 34)"></path></svg>
                                                            </span>
                                                            <span className='basis-2/4'>Sign in with Microsoft</span>
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Transition.Child>
                            </div>
                        </Dialog>
                    </Transition.Root>

                </div>
            </div>
        </>
    );
};

export default Login;
