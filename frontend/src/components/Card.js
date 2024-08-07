const Card = () => {
  return (
	<div className="card w-96 bg-base-100 shadow-xl">
	  <div className="card-body">
		<h2 className="card-title">Card Title</h2>
		<p>Card content goes here.</p>
		<div className="card-actions justify-end">
		  <button className="btn btn-primary">Action</button>
		</div>
	  </div>
	</div>
  );
};

export default Card;