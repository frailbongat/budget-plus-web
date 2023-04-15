<script>
	import { Navbar, Sidebar } from 'features/layouts';
</script>

<div class="flex flex-row">
	<Sidebar />
	<div class="flex w-full flex-col p-4">
		<Navbar />
		<div class="my-4 grid grid-cols-2 gap-4">
			<slot />
		</div>
	</div>
</div>
