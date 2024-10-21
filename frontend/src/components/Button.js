import Hero from './Hero';

const Button = () => {
  return (
	<div>
	  <Hero />
	  <div className="mt-8">
		<button className="btn btn-primary">Primary Button</button>
		<button className="btn btn-secondary">Secondary Button</button>
		<button className="btn btn-accent">Accent Button</button>
	  </div>
	</div>
  );
};

export default Button;