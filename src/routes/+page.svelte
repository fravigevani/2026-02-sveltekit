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
    imgImg5,
    imgImg_Dark,
    imgImg1_Dark,
    imgImg2_Dark,
    imgImg3_Dark,
    imgImg4_Dark,
    imgImg5_Dark
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
    { src: imgImg_Dark, title: "Una lettera", subtitle: "21:30", description: "Un messaggio sospeso nello spazio e nel tempo." },
    { src: imgImg1_Dark, title: "Omaggio ad un maestro", subtitle: "22:00", description: "Un tributo alla magia del cinema e della luce artificiale." },
    { src: imgImg2_Dark, title: "E guardo il mondo da un oblò", subtitle: "22:30", description: "Una prospettiva circolare sulla notte." },
    { src: imgImg3_Dark, title: "Che ore sono", subtitle: "22:41", description: "Il tempo artificiale scandisce i nostri ritmi." },
    { src: imgImg4_Dark, title: "Metafora", subtitle: "23:00", description: "La luce artificiale come metafora della memoria." },
    { src: imgImg5_Dark, title: "Fra le braccia di Morfeo", subtitle: "23:30", description: "Il sonno catturato attraverso la luce notturna." }
  ];

  const heroText =
    "Queste fotografie nascono dall'osservazione del quotidiano e trasformano spazi e oggetti in tracce di memoria, presenza e racconto. La luce, naturale o artificiale, cambia la percezione delle cose nell'arco della giornata e anche il tempo entra nelle immagini in modo visibile, non solo come tema ma come sequenza di momenti, abitudini e variazioni che raccontano il passare delle ore.";

  function handleFilterChange(event: CustomEvent<string>) {
    selectedFilter = event.detail as typeof selectedFilter;
  }

  $effect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", $theme);
    }
  });
</script>

<div class="min-h-screen bg-[var(--color-background-primary)] text-[var(--color-content-primary)]">
  <div class="page-shell">
    <div class="sticky top-0 z-50 bg-[var(--color-background-primary)]/95 backdrop-blur-sm">
      <TopBar />
    </div>

    <section class="hero-section">
      <p class="hero-text">{heroText}</p>
    </section>

    <section class="content-section">
      <NavigationBar active={selectedFilter} on:change={handleFilterChange} />

      <div class="cards-grid">
        {#each selectedFilter === "luce artificiale" ? cardsLight : cardsDark as card}
          <Card
            src={card.src}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
          />
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
  .page-shell {
    width: 100%;
    max-width: 1512px;
    margin: 0 auto;
    padding-inline: 24px;
  }

  .hero-section {
    padding-block: 48px;
  }

  .hero-text {
    max-width: 893px;
    margin: 0;
    font-family: var(--font-primary);
    font-weight: var(--font-weight-regular);
    font-size: clamp(2rem, 1.2rem + 2vw, 3rem);
    line-height: 1;
    color: var(--color-content-primary);
  }

  .content-section {
    display: flex;
    flex-direction: column;
    gap: 28px;
    padding-bottom: 48px;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    width: 100%;
  }

  .footer-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }

  .footer-logo-shell {
    width: 150px;
    height: 58px;
  }

  .footer-logo-shell img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (min-width: 641px) {
    .page-shell {
      padding-inline: 32px;
    }

    .hero-section {
      padding-block: 48px;
    }

    .hero-text {
      max-width: 664px;
    }

    .cards-grid {
      gap: 24px;
    }

    .footer-logo-shell {
      width: 180px;
      height: 70px;
    }
  }

  @media (min-width: 1025px) {
    .page-shell {
      padding-inline: 48px;
    }

    .hero-section {
      padding-block: 52px;
    }

    .hero-text {
      max-width: 893px;
    }

    .cards-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 24px;
    }

    .footer-logo-shell {
      width: 201px;
      height: 78px;
    }
  }
</style>