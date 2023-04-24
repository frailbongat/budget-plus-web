<script>
	import { Button, Icon, Text } from 'components';
</script>

<div class="hidden md:block relative bg-white dark:bg-grey pt-6 px-8 pb-8">
	<img src="/logo/logo-black.svg" alt="App logo" class="block dark:hidden mt-1 h-6" />
	<img src="/logo/logo-white.svg" alt="App logo" class="hidden dark:block mt-1 h-6" />

	<ul class="mt-[49px] space-y-4">
		<li>
			<a
				href="/"
				class="flex h-[42px] dark:px-4 items-center dark:bg-primary text-primary dark:text-white rounded-[10px] gap-3 text-base leading-[26px] font-bold"
			>
				<Icon name="Grid" size={20} color="text-primary dark:text-white " />
				Dashboard
			</a>
		</li>
		<li>
			<a href="/" class="flex h-[42px] dark:px-4 items-center rounded-[10px] gap-3">
				<Icon name="Settings" size={20} color="text-grey-label dark:text-white" />
				<Text size="sm" color="label" bold>Settings</Text>
			</a>
		</li>
	</ul>

	<div class="absolute bottom-0 max-w-[calc(100%-64px)] mb-8">
		<img
			src="/illustrations/mobile-app-light.svg"
			alt="Mobile illustration"
			class="block dark:hidden"
		/>
		<img
			src="/illustrations/mobile-app-dark.svg"
			alt="Mobile illustration"
			class="hidden dark:block"
		/>

		<Text color="label" size="xs" class="mt-1 text-center">
			Download our Mobile App and be updated
		</Text>
		<Button class="w-full mt-6" disabled>Coming Soon</Button>
	</div>
</div>
