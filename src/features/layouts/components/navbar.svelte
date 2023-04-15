<script>
	import { Bars3CenterLeft } from 'svelte-heros-v2';
	import { pageTitle } from 'stores';
</script>

<div class="w-full justify-between flex items-center">
	<div class="flex items-center gap-3">
		<div class="pagination sm:hidden">
			<label for="sidebar-mobile-fixed" class="btn">
				<Bars3CenterLeft variation="solid" size="18" />
			</label>
		</div>
		<h1 class="text-2xl sm:text-3xl">{$pageTitle}</h1>
	</div>
	<div class="avatar avatar-ring avatar-md">
		<div class="dropdown-container">
			<div class="dropdown">
				<button class="btn btn-ghost flex cursor-pointer px-0" tabindex="0">
					<img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="avatar" />
				</button>
				<div class="dropdown-menu dropdown-menu-bottom-left">
					<a class="dropdown-item text-sm" href="/profile">Profile</a>
					<button tabindex="-1" class="dropdown-item text-sm text-error">Logout</button>
				</div>
			</div>
		</div>
	</div>
</div>
