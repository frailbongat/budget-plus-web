<script lang="ts">
	import classNames from 'classnames';

	export let size: 'lg' | 'md' | 'sm' | 'xs' = 'md';
	export let color: 'default' | 'label' | 'body' = 'default';
	export let bold = false;

	const sizeClass = {
		lg: 'text-2xl leading-[38px]',
		md: 'text-lg leading-[34px]',
		sm: 'text-base leading-[26px]',
		xs: 'text-sm leading-6'
	};
	const colorClass = {
		default: 'text-grey dark:text-white',
		label: 'text-grey-label dark:text-line',
		body: 'text-grey-body dark:text-line'
	};
</script>

<p
	class={classNames(
		'tracking-[0.75px]',
		colorClass[color],
		sizeClass[size],
		bold && 'font-bold',
		$$props.class
	)}
>
	<slot />
</p>
