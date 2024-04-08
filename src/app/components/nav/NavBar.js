import './NavBar.css'
import Link from "next/link";

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
								<button type="button" className='nav-bar_home'><Link href="/AddItem">Add Item</Link></button>
								<button type="button" className='nav-bar_support'><Link href="/">Log Out</Link></button>
							</div>
						);
						case false: return (
							<div className='nav-bar_buttonGroup'>
								<button type="button" className='nav-bar_login'><Link href="/auth">Login</Link></button>
								<button type="button" className='nav-bar_signup'><Link href="/auth">Sign Up</Link></button>
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
