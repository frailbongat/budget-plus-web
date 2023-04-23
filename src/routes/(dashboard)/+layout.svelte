<script>
	import { DesktopNavbar, MobileNavbar, Sidebar } from 'features/layouts';
</script>

<MobileNavbar />
<div class="grid md:grid-cols-[256px,auto] h-screen">
	<Sidebar />
	<div class="px-[15px] pb-6 pt-20 md:px-8 md:pt-[9px] md:pb-[60px] overflow-y-auto">
		<DesktopNavbar />
		<div class="space-y-6">
			<slot />
		</div>
	</div>
</div>
