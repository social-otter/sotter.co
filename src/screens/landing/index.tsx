import styles from './index.module.css';
import Login from "../../components/login";

export default function Landing() {

  return (
    <div className="flex mb-10 flex-col bg-gradient-to-r from-indigo-100 via-white to-pink-100">
      <main className='mb-auto'>
        <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
            <div>
              <div className="mt-20">
                <div>
                  <a href="https://github.com/social-otter" className="inline-flex space-x-4">
                    <span className="rounded bg-indigo-200 px-2.5 py-1 text-xs font-semibold text-indigo-900 tracking-wide">
                      See all projects on Github.
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
                  <p className="mt-6 text-xl font-medium text-gray-600">
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
                <div className="sm:w-full sm:max-w-md">
                  <div className="bg-gray-50 py-8 mt-5 px-1 shadow-xl sm:rounded-lg sm:px-4">
                    <Login />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* #your-channels section */}
        <div className="mb-10">
          <h1 className='text-2xl text-center font-extrabold text-slate-700 tracking-tight sm:text-3xl mb-5'>#your-channels</h1>

          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid">
            <div className='flex flex-row flex-wrap gap-4'>
              <div className="md:basis-1/3 lg:basis-1/3 sm:w-full border-dashed border-2 md:mt-6 w-full border-gray-300 shadow-sm rounded-md p-4 max-w-sm m-auto">
                <div className="flex space-x-4">
                  <div className="rounded-full h-12 w-12">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill='currentColor'><path fill="#FFB300" d="M31.2,10.6l-6.6,2.3l-1.4-4.3c-0.6-1.8,0.3-3.8,2.2-4.4c1.8-0.6,3.8,0.3,4.4,2.2L31.2,10.6z M29.2,26.6l6.6-2.3l-2.3-7.1l-6.6,2.3L29.2,26.6z M32.6,36.8c0.5,1.4,1.9,2.4,3.3,2.4c0.4,0,0.8-0.1,1.1-0.2c1.8-0.6,2.8-2.6,2.2-4.4L38,31l-6.6,2.3L32.6,36.8z"></path><path fill="#00BFA5" d="M17.2,15.5l-6.6,2.3l-1.4-4.2c-0.6-1.8,0.3-3.8,2.2-4.4c1.8-0.6,3.8,0.3,4.4,2.2L17.2,15.5z M18.6,41.8c0.5,1.4,1.9,2.4,3.3,2.4c0.4,0,0.8-0.1,1.1-0.2c1.8-0.6,2.8-2.6,2.2-4.4l-1.2-3.7l-6.6,2.3L18.6,41.8z M19.4,22.2l-6.6,2.3l2.3,7.1l6.6-2.3L19.4,22.2z"></path><path fill="#00BCD4" d="M33.4,17.3l-2.2-6.6l4.1-1.4c1.8-0.6,3.8,0.3,4.4,2.2c0.6,1.8-0.3,3.8-2.2,4.4L33.4,17.3z M26.8,19.6l-2.2-6.6l-7.4,2.6l2.2,6.6L26.8,19.6z M6.4,19.3c-1.8,0.6-2.8,2.6-2.2,4.4c0.5,1.5,1.9,2.4,3.3,2.4c0.4,0,0.8-0.1,1.1-0.2l4.1-1.4l-2.2-6.6L6.4,19.3z"></path><path fill="#E91E63" d="M15.1,31.5l2.2,6.6l-4.7,1.6c-0.4,0.1-0.8,0.2-1.1,0.2c-1.5,0-2.8-0.9-3.3-2.4c-0.6-1.8,0.3-3.8,2.2-4.4L15.1,31.5z M43.7,25.3c-0.6-1.8-2.6-2.8-4.4-2.2l-3.5,1.2L38,31l3.6-1.2C43.4,29.1,44.4,27.1,43.7,25.3z M21.7,29.2l2.2,6.6l7.4-2.6l-2.2-6.6L21.7,29.2z"></path><path fill="#388E3C" d="M33.4 17.3L31.2 10.6 24.6 12.9 26.8 19.6z"></path><path fill="#00897B" d="M17.2 15.5L10.6 17.8 12.8 24.5 19.4 22.2z"></path><path fill="#BF360C" d="M29.2 26.6L31.4 33.3 38 31 35.8 24.3z"></path><path fill="#4E342E" d="M15.1 31.5L17.3 38.2 23.9 35.9 21.7 29.2z"></path></svg>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor'><linearGradient id="_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1" x1="10.341" x2="40.798" y1="8.312" y2="38.769" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4"></stop><stop offset="1" stopColor="#007ad9"></stop></linearGradient><path fill="url(#_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1)" d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758	c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582	c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322	c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419	c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963	c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41	c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"></path></svg> */}
                  </div>
                  <div className="animate-pulse flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-400 rounded"></div>
                      <div className="h-4 bg-gray-400 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:basis-1/3 lg:basis-1/3 sm:w-full border-dashed border-2 md:mb-6 w-full border-gray-300 shadow-sm rounded-md p-4 max-w-sm m-auto">
                <div className="flex space-x-4">
                  <div className="rounded-full h-12 w-12">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill='currentColor'><path fill="#6c19ff" d="M44,20l0,9.749c0,3.285-2.532,6.15-5.816,6.249C34.786,36.099,32,33.375,32,30l3.109-10H44z M38,16	c2.209,0,4-1.791,4-4s-1.791-4-4-4s-4,1.791-4,4S35.791,16,38,16z"></path><path fill="#a64aff" d="M34.878,35.125c-1.04,4.709-5.457,8.183-10.542,7.854C19.02,42.634,15,37.983,15,32.656V20h17	C32,20,35.029,34.44,34.878,35.125z M25,17c3.314,0,6-2.686,6-6s-2.686-6-6-6s-6,2.686-6,6S21.686,17,25,17z"></path><path fill="#6c19ff" d="M15.089,34H4V14h15.809L24,16.91V20L15.089,34z"></path><path fill="#2100c4" d="M19.809,14c0.87,1.52,2.4,2.61,4.19,2.91V14H19.809z M14.999,20v12.66c0,0.45,0.03,0.9,0.09,1.34	h8.91V20H14.999z"></path><path fill="#ddbaff" d="M18.068,18.999H9.932v1.72h3.047v8.28h2.042v-8.28h3.047V18.999z"></path><path fill="#2100c4" d="M37.999,8c-2.21,0-4,1.79-4,4s1.79,4,4,4c2.21,0,4-1.79,4-4S40.209,8,37.999,8z M31.999,20v10	c0,2.17,1.15,4.07,2.88,5.12c0.15-0.68,0.23-1.39,0.23-2.12V20H31.999z"></path></svg>
                  </div>
                  <div className="animate-pulse flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-400 rounded"></div>
                      <div className="h-4 bg-gray-400 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:basis-1/3 lg:basis-1/3 sm:w-full border-dashed border-2 md:mt-6 w-full border-gray-300 shadow-sm rounded-md p-4 max-w-sm m-auto">
                <div className="flex space-x-4">
                  <div className="rounded-full h-12 w-12">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill='currentColor'><path fill="#536dfe" d="M39.248,10.177c-2.804-1.287-5.812-2.235-8.956-2.778c-0.057-0.01-0.114,0.016-0.144,0.068	c-0.387,0.688-0.815,1.585-1.115,2.291c-3.382-0.506-6.747-0.506-10.059,0c-0.3-0.721-0.744-1.603-1.133-2.291	c-0.03-0.051-0.087-0.077-0.144-0.068c-3.143,0.541-6.15,1.489-8.956,2.778c-0.024,0.01-0.045,0.028-0.059,0.051	c-5.704,8.522-7.267,16.835-6.5,25.044c0.003,0.04,0.026,0.079,0.057,0.103c3.763,2.764,7.409,4.442,10.987,5.554	c0.057,0.017,0.118-0.003,0.154-0.051c0.846-1.156,1.601-2.374,2.248-3.656c0.038-0.075,0.002-0.164-0.076-0.194	c-1.197-0.454-2.336-1.007-3.432-1.636c-0.087-0.051-0.094-0.175-0.014-0.234c0.231-0.173,0.461-0.353,0.682-0.534	c0.04-0.033,0.095-0.04,0.142-0.019c7.201,3.288,14.997,3.288,22.113,0c0.047-0.023,0.102-0.016,0.144,0.017	c0.22,0.182,0.451,0.363,0.683,0.536c0.08,0.059,0.075,0.183-0.012,0.234c-1.096,0.641-2.236,1.182-3.434,1.634	c-0.078,0.03-0.113,0.12-0.075,0.196c0.661,1.28,1.415,2.498,2.246,3.654c0.035,0.049,0.097,0.07,0.154,0.052	c3.595-1.112,7.241-2.79,11.004-5.554c0.033-0.024,0.054-0.061,0.057-0.101c0.917-9.491-1.537-17.735-6.505-25.044	C39.293,10.205,39.272,10.187,39.248,10.177z M16.703,30.273c-2.168,0-3.954-1.99-3.954-4.435s1.752-4.435,3.954-4.435	c2.22,0,3.989,2.008,3.954,4.435C20.658,28.282,18.906,30.273,16.703,30.273z M31.324,30.273c-2.168,0-3.954-1.99-3.954-4.435	s1.752-4.435,3.954-4.435c2.22,0,3.989,2.008,3.954,4.435C35.278,28.282,33.544,30.273,31.324,30.273z"></path></svg>
                  </div>
                  <div className="animate-pulse flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-400 rounded"></div>
                      <div className="h-4 bg-gray-400 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        
        {/* moving tweets ... 🚀 */}
        {/* <div className="animate-move hover:animate-ping border mt-2 w-full border-gray-300 shadow rounded-md p-4 max-w-sm absolute">
            <div className="flex space-x-4">
              <div className="rounded-full h-12 w-12">
                <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor'><linearGradient id="_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1" x1="10.341" x2="40.798" y1="8.312" y2="38.769" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4"></stop><stop offset="1" stopColor="#007ad9"></stop></linearGradient><path fill="url(#_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1)" d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758	c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582	c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322	c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419	c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963	c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41	c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"></path></svg>
              </div>
              <div className="animate-pulse flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-400 rounded"></div>
                  <div className="h-4 bg-gray-400 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div> */}
      </main>
    </div>
  )
}
