<script lang="ts">
	import LinkDesktop from "./LinkDesktop.svelte";
</script>

<div
	class="flex items-center justify-between px-[var(--spacing-12)] py-[var(--spacing-6)] w-full"
>
	<p class="font-primary font-medium leading-[22px] text-[24px] text-[var(--color-link-default)] text-center whitespace-nowrap">
		W-D
	</p>
	<div class="flex gap-[24px] items-center">
		<LinkDesktop />
		<LinkDesktop />
	</div>
</div>

<style>
	:global(.font-primary) {
		font-family: var(--font-primary);
	}

	:global(.font-medium) {
		font-weight: var(--font-weight-medium);
	}
</style>
