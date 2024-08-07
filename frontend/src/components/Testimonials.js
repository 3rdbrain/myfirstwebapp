export default function Testimonials() {
  return (
	<section className="p-8 bg-gray-100 dark:bg-gray-900">
	  <h2 className="text-3xl font-semibold text-center">Testimonials</h2>
	  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
		<div className="p-4 bg-gray-200 dark:bg-gray-800 rounded">
		  <p>"This is the best service ever!"</p>
		  <p className="mt-2 text-right">- Happy Customer</p>
		</div>
		<div className="p-4 bg-gray-200 dark:bg-gray-800 rounded">
		  <p>"I love using this product!"</p>
		  <p className="mt-2 text-right">- Satisfied User</p>
		</div>
	  </div>
	</section>
  );
}