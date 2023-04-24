<script lang="ts">
	import classNames from 'classnames';
	import { ChevronRight, Icon } from 'components';
	import type { IconNameType } from 'components/types';

	export let type: 'button' | 'submit' = 'button';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let variant: 'solid' | 'outlined' | 'text' = 'solid';
	export let icon: IconNameType = '';
	export let hasChevron = false;
	export let disabled = false;

	const sizeClass = {
		lg: 'h-12 px-4',
		md: 'h-10 px-3',
		sm: 'h-8 px-3'
	};
	const iconSize = {
		lg: 24,
		md: 20,
		sm: 16
	};
	const variantClass = {
		solid: 'bg-primary text-white',
		outlined: 'bg-white text-primary border-2 border-primary',
		text: 'text-primary'
	};
</script>

<button
	class={classNames(
		sizeClass[size],
		variantClass[variant],
		icon && 'gap-1.5',
		'flex items-center rounded-[4px] justify-center font-bold text-sm leading-6',
		disabled && 'cursor-not-allowed',
		$$props.class
	)}
	{type}
	on:click
	{disabled}
>
	{#if icon}
		<Icon
			name={icon}
			size={iconSize[size]}
			color={variant === 'solid' ? 'text-white' : 'text-primary'}
		/>
	{/if}
	<slot />
	{#if hasChevron}
		<ChevronRight color={variant === 'solid' ? 'text-white' : 'text-primary'} />
	{/if}
</button>
