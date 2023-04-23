<script>
	import { Icon } from 'components';

	const toggleTheme = () => {
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
</script>

<nav
	class="bg-white dark:bg-grey h-14 flex md:hidden items-center justify-between fixed top-0 z-50 w-full"
>
	<div class="flex items-center">
		<button class="p-4 pr-3"><Icon icon="Navigation" /></button>
		<img src="/logo/logo-black.svg" alt="App logo" class="block dark:hidden mt-1 h-6" />
		<img src="/logo/logo-white.svg" alt="App logo" class="hidden dark:block mt-1 h-6" />
	</div>

	<button on:click={toggleTheme} class="p-4">
		<Icon icon="Moon" class="block dark:hidden" />
		<Icon icon="Sun" class="hidden dark:block" />
	</button>
</nav>
