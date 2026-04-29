<script lang="ts">
	interface Props {
		src: string;
		title: string;
		subtitle: string;
	}

	let { src, title, subtitle }: Props = $props();
</script>

<div class="flex flex-col gap-[var(--spacing-3)] h-[503px] items-start overflow-clip pb-[var(--spacing-4)] w-[664px]">
	<!-- Image Box -->
	<div class="flex-[1_0_0] min-h-px overflow-clip relative rounded-tl-[var(--radius-m)] rounded-tr-[var(--radius-m)] w-full">
		<div class="absolute inset-0 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 h-[445px] w-[664px]">
			<img
				alt={title}
				class="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
				{src}
			/>
		</div>
	</div>

	<!-- Metadata -->
	<div class="flex items-center justify-between w-full">
		<div class="flex gap-[4px] items-center text-[var(--spacing-5)]">
			<p class="text-[var(--color-content-primary)]">
				{title}
			</p>
			<p class="text-[var(--color-content-secondary)]">
				/
			</p>
			<p class="text-[var(--color-content-secondary)]">
				{subtitle}
			</p>
		</div>
	</div>
</div>

<style>
	:global(div) {
		font-family: var(--font-primary);
		font-weight: var(--font-weight-regular);
		line-height: normal;
		white-space: nowrap;
	}
</style>
