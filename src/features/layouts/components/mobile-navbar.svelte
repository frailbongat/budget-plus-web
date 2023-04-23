<script>
	import { Icon } from 'components';
	import { toggleTheme } from 'features/layouts';
</script>

<nav
	class="bg-white dark:bg-grey h-14 flex md:hidden items-center justify-between fixed top-0 z-50 w-full"
>
	<div class="flex items-center">
		<button class="p-4 pr-3">
			<Icon name="Navigation" color="text-grey-body dark:text-white" />
		</button>
		<img src="/logo/logo-black.svg" alt="App logo" class="block dark:hidden mt-1 h-6" />
		<img src="/logo/logo-white.svg" alt="App logo" class="hidden dark:block mt-1 h-6" />
	</div>

	<button on:click={toggleTheme} class="p-4">
		<Icon name="Moon" class="block dark:hidden" color="text-grey-body dark:text-white" />
		<Icon name="Sun" class="hidden dark:block" color="text-grey-body dark:text-white" />
	</button>
</nav>
