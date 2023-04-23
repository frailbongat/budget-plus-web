<script>
	import { Icon, Text } from 'components';
</script>

<div class="hidden md:block bg-white dark:bg-grey pt-6 px-8 pb-8">
	<img src="/logo/logo-black.svg" alt="App logo" class="block dark:hidden mt-1 h-6" />
	<img src="/logo/logo-white.svg" alt="App logo" class="hidden dark:block mt-1 h-6" />

	<ul class="mt-[49px] space-y-4">
		<li>
			<a
				href="/"
				class="flex h-[42px] px-4 items-center bg-primary text-white rounded-[10px] gap-3"
			>
				<Icon name="Grid" size={20} />
				<Text size="sm" bold>Dashboard</Text>
			</a>
		</li>
		<li>
			<a href="/" class="flex h-[42px] px-4 items-center text-white rounded-[10px] gap-3">
				<Icon name="Settings" size={20} />
				<Text size="sm" bold>Settings</Text>
			</a>
		</li>
	</ul>
</div>
