export default function Pricing() {
  return (
    <div id="pricing" className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
            Pricing Plans
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Choose the plan that fits your needs.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-x-5">
          {/* Basic Plan */}
          <div className="card bg-white dark:bg-gray-800 shadow-lg">
            <div className="card-body p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                Basic
              </h3>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                Perfect for small projects and personal use.
              </p>
              <div className="mt-6">
                <p className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
                  ?
                  <span className="text-base font-medium text-gray-500 dark:text-gray-300">/mo</span>
                </p>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                    NextJs & FastAPI Boilerplate.
                  </p>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                    Tailwind CSS & DaisyUi.
                  </p>
                </li>
              </ul>
              <div className="mt-8">
                <button className="btn btn-primary w-full">Get Started</button>
              </div>
            </div>
          </div>
          {/* Pro Plan */}
          <div className="card bg-white dark:bg-gray-800 shadow-lg">
            <div className="card-body p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                Pro
              </h3>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                Ideal for growing businesses and teams.
              </p>
              <div className="mt-6">
                <p className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
                  ?
                  <span className="text-base font-medium text-gray-500 dark:text-gray-300">/mo</span>
                </p>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                    Everything in Basic.
                  </p>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                    Advanced Analytics.
                  </p>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                    Priority Support.
                  </p>
                </li>
              </ul>
              <div className="mt-8">
                <button className="btn btn-primary w-full">Get Started</button>
              </div>
            </div>
          </div>
          {/* Enterprise Plan */}
          <div className="card bg-white dark:bg-gray-800 shadow-lg">
            <div className="card-body p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                Enterprise
              </h3>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                Best for large organizations and enterprises.
              </p>
              <div className="mt-6">
                <p className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
                  ?
                  <span className="text-base font-medium text-gray-500 dark:text-gray-300">/mo</span>
                </p>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                    Everything in Pro.
                  </p>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                    Dedicated Account Manager.
                  </p>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                    Custom Integrations.
                  </p>
                </li>
              </ul>
              <div className="mt-8">
                <button className="btn btn-primary w-full">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}