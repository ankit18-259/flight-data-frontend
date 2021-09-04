function Nav() {
	return (
		<nav>Hello {localStorage.getItem('username')}</nav>
		)
}

export default Nav;