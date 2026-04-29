<script lang="ts">
	import { imgVector } from "$lib/constants/images";

	interface Props {
		showLeadingIcon?: boolean;
		showTrailingIcon?: boolean;
	}

	let { showLeadingIcon = true, showTrailingIcon = true }: Props = $props();
</script>

<div class="flex flex-col items-center justify-center gap-0 px-[16.769px] py-[8.385px] rounded-[1047.016px]">
	<div class="flex gap-[4.192px] items-center">
		{#if showLeadingIcon}
			<div class="relative shrink-0 size-[25.154px]">
				<div class="absolute left-0 overflow-clip size-[25.154px] top-0">
					<div class="absolute inset-[16.67%_11.41%_16.67%_7.46%]">
						<div class="absolute inset-[-6.25%_-5.14%]">
							<img
								alt=""
								class="block max-w-none size-full"
								src={imgVector}
							/>
						</div>
					</div>
				</div>
			</div>
		{/if}
		<p
			class="font-primary font-medium leading-[23.057px] text-[25.154px] text-[var(--color-link-default)] text-center whitespace-nowrap"
		>
			About
		</p>
		{#if showTrailingIcon}
			<div class="h-[25.154px] relative shrink-0 w-[26.202px]">
				<div class="absolute left-0 overflow-clip size-[25.154px] top-0">
					<div class="absolute inset-[16.67%_11.41%_16.67%_7.46%]">
						<div class="absolute inset-[-6.25%_-5.14%]">
							<img
								alt=""
								class="block max-w-none size-full"
								src={imgVector}
							/>
						</div>
					</div>
				</div>
			</div>
		{/if}
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
