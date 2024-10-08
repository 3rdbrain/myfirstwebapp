export default function Features() {
	const feature = {
		title: 'Launch Your App With <span className="text-indigo-600">Lighting Speed</span>',
		description: 'Get your landing page with login & CTAs, Email Notifications, Styling, SEO & more. Spend your time building your startup, not integrating APIs.',
		imageUrl: '/feature1.png',
	};

	return (
		<div className="relative bg-white dark:bg-gray-900 overflow-hidden">
			<div className="max-w-7xl mx-auto">
				<div className="relative z-10 pb-8 bg-white dark:bg-gray-900 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
					<div className="relative pt-6 px-4 sm:px-6 lg:px-8">
						<main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
							<div className="lg:grid lg:grid-cols-2 lg:gap-8">
								<div className="sm:text-center lg:text-left">
									<h1 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
										<span className="block xl:inline">Launch Your App With</span>{' '}
										<span className="block text-indigo-600 xl:inline">Lighting Speed</span>
									</h1>
									<p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
										{feature.description}
									</p>
									<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
										<div className="rounded-md shadow">
											<button className="btn btn-primary">Learn More</button>
										</div>
									</div>
								</div>
								<div className="mt-12 lg:mt-0 lg:flex lg:items-center">
									<img
										className="mx-auto lg:max-w-lg rounded-lg shadow-2xl"
										src={feature.imageUrl}
										alt="Feature Image"
									/>
								</div>
							</div>
						</main>
					</div>
				</div>
			</div>
		</div>
	);
}