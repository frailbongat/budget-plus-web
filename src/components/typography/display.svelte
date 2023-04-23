<script lang="ts">
	import classNames from 'classnames';

	export let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1';
	export let size: 'lg' | 'md' | 'sm' = 'lg';
	export let color = 'text-grey dark:text-white';
	export let bold = false;

	const sizeClass = {
		lg: 'text-[64px] leading-[66px]',
		md: 'text-5xl leading-[50px]',
		sm: 'text-[32px] leading-[34px]'
	};
</script>

<svelte:element
	this={tag}
	class={classNames('tracking-[1px]', sizeClass[size], bold && 'font-bold', color, $$props.class)}
>
	<slot />
</svelte:element>
