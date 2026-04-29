<script lang="ts">
	import TopBar from "$lib/components/TopBar.svelte";
	import Card from "$lib/components/Card.svelte";
	import { cardImages, imgPolitecnicoBianco1 } from "$lib/constants/images";

	let selectedTab: "giorno" | "notte" = $state("giorno");

	const cards = [
		{ title: "titolo", subtitle: "sottotitolo" },
		{ title: "titolo", subtitle: "sottotitolo" },
		{ title: "titolo", subtitle: "sottotitolo" },
		{ title: "titolo", subtitle: "sottotitolo" },
		{ title: "titolo", subtitle: "sottotitolo" },
		{ title: "titolo", subtitle: "sottotitolo" }
	];

	const heroText =
		"Una curiosità che mi è venuta in mente, appunto adesso, mentre stavamo parlando, noi abbiamo visto anche che all'interno delle brigate sono stati chiamati anche degli chef professionisti, per esempio abbiamo visto Stefano Paganini con la sua brigata";
</script>

<div class="min-h-screen bg-[var(--color-background-primary)] text-[var(--color-content-primary)]">
	<!-- TopBar -->
	<div class="sticky top-0 z-50">
		<TopBar />
	</div>

	<!-- Hero Section -->
	<section class="px-[var(--spacing-12)] py-[var(--spacing-13)] flex items-center">
		<p class="font-primary font-normal text-[var(--spacing-7)] w-[893px] leading-[1]">
			{heroText}
		</p>
	</section>

	<!-- Content Section -->
	<section class="px-[var(--spacing-12)] flex flex-col gap-[var(--spacing-7)]">
		<!-- Tab Navigation -->
		<div class="flex gap-[var(--spacing-5)] items-center cursor-pointer">
			<button
				class="bg-[var(--color-filter-background-selected)] flex items-center justify-center pb-[var(--spacing-2)] pt-[var(--spacing-1)] px-[var(--spacing-4)] rounded-[var(--radius-full)] text-[var(--color-filter-content-selected)]"
				class:active={selectedTab === "giorno"}
				onclick={() => (selectedTab = "giorno")}
			>
				<p class="font-primary font-normal text-[var(--spacing-5)] text-center whitespace-nowrap">
					giorno
				</p>
			</button>
			<a
				href="#"
				class="flex items-center justify-center pb-[var(--spacing-2)] pt-[var(--spacing-1)] px-[var(--spacing-4)] rounded-[var(--radius-full)] text-[var(--color-content-primary)] hover:bg-gray-800 transition-colors"
				onclick={(e) => {
					e.preventDefault();
					selectedTab = "notte";
				}}
			>
				<p class="font-primary font-normal text-[var(--spacing-5)] text-center whitespace-nowrap">
					notte
				</p>
			</a>
		</div>

		<!-- Card Grid -->
		<div class="grid grid-cols-2 gap-x-[24px] gap-y-[24px] w-full pb-[var(--spacing-12)]">
			{#each cards as card, i}
				<Card src={cardImages[i]} title={card.title} subtitle={card.subtitle} />
			{/each}
		</div>
	</section>

	<!-- Footer -->
	<footer class="flex flex-col items-center justify-center py-[var(--spacing-5)]">
		<div class="h-[78px] w-[201px]">
			<img alt="Politecnico Milano" class="w-full h-full object-cover" src={imgPolitecnicoBianco1} />
		</div>
	</footer>
</div>

<style>
	:global(.font-primary) {
		font-family: var(--font-primary);
	}

	:global(.font-normal) {
		font-weight: var(--font-weight-regular);
	}

	:global(.font-medium) {
		font-weight: var(--font-weight-medium);
	}
</style>
