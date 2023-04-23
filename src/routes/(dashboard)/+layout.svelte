<script>
	import { MobileNavbar, Sidebar } from 'features/layouts';
</script>

<MobileNavbar />
<div class="grid md:grid-cols-[256px,auto] h-screen">
	<Sidebar />
	<div class="px-[15px] pb-6 pt-20 space-y-6 md:px-8 md:py-0 overflow-y-auto">
		<slot />
	</div>
</div>
