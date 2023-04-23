export const toggleTheme = () => {
	switch (localStorage.theme) {
		case 'light':
			localStorage.theme = 'dark';
			document.documentElement.classList.add('dark');
			break;
		default:
			localStorage.theme = 'light';
			document.documentElement.classList.remove('dark');
			break;
	}
};
