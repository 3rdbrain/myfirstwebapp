const Navbar = () => {
  return (
	<div className="navbar bg-base-100">
	  <div className="flex-1">
		<a className="btn btn-ghost normal-case text-xl">Brand</a>
	  </div>
	  <div className="flex-none">
		<ul className="menu menu-horizontal p-0">
		  <li><a>Home</a></li>
		  <li><a>About</a></li>
		  <li><a>Contact</a></li>
		</ul>
	  </div>
	</div>
  );
};

export default Navbar;