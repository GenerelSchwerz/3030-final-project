import './NavBar.css'

export default function NavBar(props) {
	return (
		<nav className='nav-bar'>
			<div className='nav-bar_topDiv'>
				<h1>cosmic commerse</h1>
				<input type="text" placeholder="Search.." />
				{(() => 
				{
					switch (props.auth) {
						case true: return (
							<div className='nav-bar_buttonGroup'>
								<button type="button" className='nav-bar_home'>Home</button>
								<button type="button" className='nav-bar_support'>Support</button>
							</div>
						);
						case false: return (
							<div className='nav-bar_buttonGroup'>
								<button type="button" className='nav-bar_login'>Login</button>
								<button type="button" className='nav-bar_signup'>Sign Up</button>
							</div>
						);
						default: return "Undefined";
					}
				})()}

			</div>
			<div className='nav-bar_bottomDiv'>
				<button type="button" className='nav-bar_womens'>Womens</button>
				<button type="button" className='nav-bar_mens'>Mens</button>
				<button type="button" className='nav-bar_childrens'>Children</button>
				<button type="button" className='nav-bar_colors'>Colors</button>
				<button type="button" className='nav-bar_price'>Price</button>
			</div>
		</nav>
	);
}
