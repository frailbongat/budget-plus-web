<script lang="ts">
	import classNames from 'classnames';

	export let size: 'lg' | 'md' | 'sm' | 'xs' = 'md';
	export let bold = false;

	const sizeClass = {
		lg: 'text-2xl leading-[38px]',
		md: 'text-lg leading-[34px]',
		sm: 'text-base leading-[26px]',
		xs: 'text-sm leading-6'
	};
</script>

<p
	class={classNames(
		'tracking-[0.75px]',
		sizeClass[size],
		bold ? 'text-grey-body dark:text-line' : 'text-grey dark:text-white',
		$$props.class
	)}
>
	<slot />
</p>
