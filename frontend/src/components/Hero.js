const Hero = () => {
  return (
	<div className="hero min-h-screen bg-base-200">
	  <div className="hero-content flex-col lg:flex-row-reverse">
		<img src="/hero-image.jpg" className="max-w-sm rounded-lg shadow-2xl" alt="Hero Image" />
		<div>
		  <h1 className="text-5xl font-bold">Welcome to Our Site</h1>
		  <p className="py-6">This is a fancy landing page built with Tailwind CSS and DaisyUI. Join us today and explore our features.</p>
		  <button className="btn btn-primary">Get Started</button>
		</div>
	  </div>
	</div>
  );
};

export default Hero;