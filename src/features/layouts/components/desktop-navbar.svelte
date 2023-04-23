<script>
	import { Icon, Text } from 'components';
	import { toggleTheme } from 'features/layouts';
</script>

<div class="items-center justify-end gap-4 hidden md:flex mb-10">
	<a href="/" class="flex gap-3 items-center">
		<Icon name="Chat Bubbles Question" color="text-grey-label dark:text-line" />
		<p class="text-base leading-[26px] text-grey-label dark:text-line">Need Help?</p>
	</a>
	<button on:click={toggleTheme} class="p-4">
		<Icon name="Moon" class="block dark:hidden" color="text-grey-label dark:text-line" />
		<Icon name="Sun" class="hidden dark:block" color="text-grey-label dark:text-line" />
	</button>
	<button class="flex gap-3 items-center">
		<img src="/avatar.jpg" alt="User avatar" class="w-8 h-8 rounded-full" />
		<Text size="xs"
			>Gautham Reddy
			<Icon
				name="Chevron Down"
				size={16}
				class="inline-block ml-1"
				color="text-grey-label dark:text-line"
			/>
		</Text>
	</button>
</div>
