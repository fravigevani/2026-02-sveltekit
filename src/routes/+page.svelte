<script lang="ts">
  import TopBar from "$lib/components/TopBar.svelte";
  import NavigationBar from "$lib/components/NavigationBar.svelte";
  import Card from "$lib/components/Card.svelte";
  import { theme } from "$lib/stores/theme";
  import {
    imgPolitecnicoBianco1,
    imgImg,
    imgImg1,
    imgImg2,
    imgImg3,
    imgImg4,
    imgImg5
  } from "$lib/constants/images";

  let selectedFilter: "luce naturale" | "luce artificiale" = $state("luce naturale");

  const cardsDark = [
    { src: imgImg4, title: "Dalla mia finestra", subtitle: "9:30", description: "Uno scorcio che mette in luce il tempo sospeso tra interno ed esterno." },
    { src: imgImg, title: "Anafora", subtitle: "12:00", description: "Un momento catturato nella luce calda del mezzogiorno." },
    { src: imgImg5, title: "L'isola che c'è", subtitle: "14:30", description: "Un paesaggio urbano che respira tra architettura e natura." },
    { src: imgImg1, title: "La musica di un luogo", subtitle: "17:23", description: "Un interno poetico dove la luce e gli oggetti raccontano una storia." },
    { src: imgImg2, title: "Il perimetro del cielo", subtitle: "18:00", description: "Un cielo che taglia l'orizzonte e porta il tempo nella fotografia." },
    { src: imgImg3, title: "Mosca cieca", subtitle: "19:30", description: "Dettagli notturni e ombre che giocano sul confine del visibile." }
  ];

  const cardsLight = [
    { src: imgImg4, title: "Una lettera", subtitle: "21.30", description: "Un messaggio sospeso nello spazio e nel tempo." },
    { src: imgImg, title: "Omaggio ad un maestro", subtitle: "22:00", description: "Un tributo alla magia del cinema e della luce artificiale." },
    { src: imgImg5, title: "Fra le braccia di Morfeo", subtitle: "23:30", description: "Il sonno catturato attraverso la luce notturna." },
    { src: imgImg1, title: "Che ore sono", subtitle: "22:41", description: "Il tempo artificiale scandisce i nostri ritmi." },
    { src: imgImg2, title: "E guardo il mondo da un oblò", subtitle: "22:30", description: "Una prospettiva circolare sulla notte." },
    { src: imgImg3, title: "Metafora", subtitle: "23:00", description: "La luce artificiale come metafora della memoria." }
  ];

  const heroText =
    "Queste fotografie nascono dall'osservazione del quotidiano e trasformano spazi e oggetti in tracce di memoria, presenza e racconto. La luce, naturale o artificiale, cambia la percezione delle cose nell'arco della giornata e anche il tempo entra nelle immagini in modo visibile, non solo come tema ma come sequenza di momenti, abitudini e variazioni che raccontano il passare delle ore.";

  function handleFilterChange(event: CustomEvent<string>) {
    selectedFilter = event.detail as typeof selectedFilter;
  }

  $effect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', $theme);
    }
  });
</script>

<div class="min-h-screen bg-[var(--color-background-primary)] text-[var(--color-content-primary)]">
  <div class="page-shell">
    <div class="sticky top-0 z-50 bg-[var(--color-background-primary)]/95 backdrop-blur-sm">
      <TopBar />
    </div>

    <section class="px-[var(--spacing-12)] py-[var(--spacing-13)]">
      <p class="hero-text">{heroText}</p>
    </section>

    <section class="px-[var(--spacing-12)] flex flex-col gap-[var(--spacing-7)]">
      <NavigationBar active={selectedFilter} on:change={handleFilterChange} />

      <div class="grid grid-cols-2 gap-x-[24px] gap-y-[24px] w-full pb-[var(--spacing-12)]">
        {#each $theme === 'dark' ? cardsDark : cardsLight as card}
          <Card src={card.src} title={card.title} subtitle={card.subtitle} description={card.description} />
        {/each}
      </div>
    </section>

    <footer class="footer-logo">
      <div class="footer-logo-shell">
        <img alt="Politecnico Milano" src={imgPolitecnicoBianco1} />
      </div>
    </footer>
  </div>
</div>

<style>
  .hero-text {
    font-family: var(--font-primary);
    font-weight: var(--font-weight-regular);
    font-size: var(--spacing-7);
    line-height: 1;
    max-width: 893px;
    color: var(--color-content-primary);
    margin: 0;
  }

  .footer-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--spacing-5) 0;
  }

  .footer-logo-shell {
    width: 201px;
    height: 78px;
  }

  .footer-logo-shell img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .page-shell {
    width: min(100%, 1512px);
    margin: 0 auto;
  }
</style>
