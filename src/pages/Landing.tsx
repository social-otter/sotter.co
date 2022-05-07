/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          rose: colors.rose,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { ChevronRightIcon, StarIcon } from '@heroicons/react/solid'
import { signInWithGoogle, signInWithMicrosoft, signInWithGithub } from '../Auth';

// const stats = [
//   { label: 'Founded', value: '2021' },
//   { label: 'Employees', value: '5' },
//   { label: 'Beta Users', value: '521' },
//   { label: 'Raised', value: '$25M' },
// ]
// const logos = [
//   { name: 'Transistor', url: 'https://tailwindui.com/img/logos/transistor-logo-gray-400.svg' },
//   { name: 'Mirage', url: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg' },
//   { name: 'Tuple', url: 'https://tailwindui.com/img/logos/tuple-logo-gray-400.svg' },
//   { name: 'Laravel', url: 'https://tailwindui.com/img/logos/laravel-logo-gray-400.svg' },
//   { name: 'StaticKit', url: 'https://tailwindui.com/img/logos/statickit-logo-gray-400.svg' },
//   { name: 'Workcation', url: 'https://tailwindui.com/img/logos/workcation-logo-gray-400.svg' },
// ]

export default function Landing() {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-r from-indigo-100 via-white to-pink-100">
      <main className='mb-auto'>
        {/* Hero section */}
        <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
            <div>
              <div className="mt-20">
                <div>
                  <a href="#" className="inline-flex space-x-4">
                    <span className="rounded bg-indigo-200 px-2.5 py-1 text-xs font-semibold text-indigo-900 tracking-wide uppercase">
                      Twitter
                    </span>
                    {/* <span className="inline-flex items-center text-sm font-medium text-rose-500 space-x-1">
                      <span>Just shipped version 0.1.0</span>
                      <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                    </span> */}
                  </a>
                </div>
                <div className="mt-6 sm:max-w-xl">
                  <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                    Track what people talk about your business.
                  </h1>
                  <p className="mt-6 text-xl text-gray-700">
                    Get notification in your favorite channel in every tweet pushed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="hidden sm:block">
                <div className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
                <svg
                  className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                  width={404}
                  height={392}
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={404} height={392} fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
                </svg>
              </div>
              <div className="relative sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                <div className="sm:max-w-md">
                  <div className="bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10">

                    <div className="mt-6">

                      <div className="grid gap-2">
                        <button disabled type="button" onClick={signInWithGoogle} className="flex flex-row text-gray-900 justify-center bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mb-2">
                          <span className='basis-1/4'>
                            {/* <svg className="w-6 h-6 mr-5 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg> */}
                            <svg className="w-6 h-6 mr-5 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill='currentColor'><path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
                          </span>
                          <span className='basis-2/4'>
                            Sign up with Google
                          </span>
                        </button>

                        <button disabled type="button" onClick={signInWithGithub} className="flex flex-row text-gray-900 justify-center bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mb-2">
                          <span className='basis-1/4'>
                            <svg className="w-6 h-6 mr-5 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill='currentColor'><path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path></svg>
                          </span>
                          <span className='basis-2/4'>Sign up with Github</span>
                        </button>

                        <button disabled type="button" onClick={signInWithMicrosoft} className="flex flex-row text-gray-900 justify-center bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mb-2">
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
                          onClick={() => }
                          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Sign in
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


        {/* <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-gray-400 h-12 w-12"></div>
                        <div className="flex-1 space-y-4 py-1">
                            <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-400 rounded"></div>
                                <div className="h-4 bg-gray-400 rounded w-5/6"></div>
                            </div>
                        </div>
                    </div>
                </div> */}



        {/* Logo cloud section */}
        {/* <div className="mt-32">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  Backed by world-renowned investors
                </h2>
                <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-500">
                  Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque
                  tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus
                  morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.
                </p>
                <div className="mt-6">
                  <a href="#" className="text-base font-medium text-rose-500">
                    Meet our investors and advisors&nbsp&rarr;
                  </a>
                </div>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                {logos.map((logo) => (
                  <div key={logo.name} className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                    <img className="max-h-12" src={logo.url} alt={logo.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        {/* CTA section */}
        {/* <div className="relative mt-24 sm:mt-32 sm:py-16">
          <div aria-hidden="true" className="hidden sm:block">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
            <svg className="absolute top-8 left-1/2 -ml-3" width={404} height={392} fill="none" viewBox="0 0 404 392">
              <defs>
                <pattern
                  id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={392} fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
            </svg>
          </div>
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative rounded-2xl px-6 py-10 bg-rose-500 overflow-hidden shadow-xl sm:px-12 sm:py-20">
              <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                <svg
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 1463 360"
                >
                  <path
                    className="text-rose-400 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-rose-600 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>
              <div className="relative">
                <div className="sm:text-center">
                  <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                    Get notified when we&rsquo;re launching.
                  </h2>
                  <p className="mt-6 mx-auto max-w-2xl text-lg text-rose-100">
                    Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque
                    tristique pellentesque.
                  </p>
                </div>
                <form action="#" className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                  <div className="min-w-0 flex-1">
                    <label htmlFor="cta-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="cta-email"
                      type="email"
                      className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full rounded-md border border-transparent px-5 py-3 bg-gray-900 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"
                    >
                      Notify me
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> */}
      </main>


    </div>
  )
}
