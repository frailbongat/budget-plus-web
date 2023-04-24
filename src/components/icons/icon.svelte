<script lang="ts">
	import classNames from 'classnames';
	import { iconD } from 'components/constants';
	import type { IconNameType } from 'components/types';

	export let name: IconNameType;
	export let color = 'text-grey dark:text-white';
	export let size = 24;
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	class={classNames(color, $$props.class)}
>
	<path d={iconD[name]} fill="currentColor" />
</svg>

<style>
	svg {
		position: relative;
	}
	svg:focus {
		outline: none;
	}
</style>
