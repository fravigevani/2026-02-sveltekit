<script lang="ts">
  type Props = {
    src: string;
    title: string;
    subtitle: string;
    description?: string;
  };

  let { src, title, subtitle, description = "Descrizione breve." }: Props = $props();

  let hovered = $state(false);
  let flipped = $state(false);

  function toggleFlip() {
    flipped = !flipped;
  }

  function handlePointerEnter() {
    hovered = true;
  }

  function handlePointerLeave() {
    hovered = false;
  }
</script>

<button
  type="button"
  class="card-root"
  class:flipped={flipped}
  onpointerenter={handlePointerEnter}
  onpointerleave={handlePointerLeave}
  onclick={toggleFlip}
>
  {#if flipped}
    <div class="card-back">
      <div class="card-back-copy">
        <p class="card-back-title">{title}</p>
        <p class="card-back-description">{description}</p>
      </div>

      <div class="card-back-action">
        <span>flip</span>
        <div class="chevron flipped"></div>
      </div>
    </div>
  {:else}
    <div class="card-image-shell">
      <div class="card-image-wrap">
        <img alt={title} src={src} class="card-image" />
      </div>

      {#if hovered}
        <div class="card-hover-overlay"></div>
      {/if}
    </div>

    <div class="card-meta">
      <div class="card-meta-left">
        <p class="card-title">{title}</p>
        <p class="card-divider">/</p>
        <p class="card-subtitle">{subtitle}</p>
      </div>

      {#if hovered}
        <div class="card-flip-hint">
          <span>flip</span>
          <div class="chevron"></div>
        </div>
      {/if}
    </div>
  {/if}
</button>

<style>
  .card-root {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 503px;
    gap: 12px;
    border: none;
    background: transparent;
    padding: 0 0 16px 0;
    cursor: pointer;
    overflow: hidden;
    border-radius: var(--radius-m);
    text-align: left;
  }

  .card-root:focus-visible {
    outline: 2px solid rgba(94, 99, 206, 0.75);
    outline-offset: 4px;
  }

  .card-image-shell {
    position: relative;
    height: 445px;
    overflow: hidden;
    border-top-left-radius: var(--radius-m);
    border-top-right-radius: var(--radius-m);
  }

  .card-image-wrap {
    position: absolute;
    inset: 0;
  }

  .card-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  .card-hover-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, var(--color-link-hover, #5e63ce) 100%);
    opacity: 0.4;
    transition: opacity 0.2s ease;
  }

  .card-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 24px;
  }

  .card-meta-left {
    display: flex;
    align-items: center;
    gap: 4px;
    white-space: nowrap;
    font-family: var(--font-primary);
    font-size: var(--spacing-5);
    color: #fafafa;
  }

  .card-title,
  .card-divider,
  .card-subtitle {
    margin: 0;
  }

  .card-title {
    color: #fafafa;
  }

  .card-divider,
  .card-subtitle {
    color: #989898;
  }

  .card-flip-hint,
  .card-back-action {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-secondary);
    font-size: 16px;
    color: #fafafa;
  }

  .chevron {
    width: 16px;
    height: 16px;
    position: relative;
  }

  .chevron::before,
  .chevron::after {
    content: "";
    position: absolute;
    width: 2px;
    height: 100%;
    background: currentColor;
    top: 0;
    left: 50%;
    transform-origin: center;
  }

  .chevron::before {
    transform: translateX(-50%) rotate(45deg);
  }

  .chevron::after {
    transform: translateX(-50%) rotate(-45deg);
  }

  .chevron.flipped {
    transform: rotate(180deg);
  }

  .card-back {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    background: var(--color-background-secondary, #191919);
    color: #fafafa;
    padding: 40px 24px 24px;
    box-sizing: border-box;
  }

  .card-back-copy {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .card-back-title {
    margin: 0;
    font-family: var(--font-primary);
    font-size: var(--spacing-7);
    line-height: 1;
    color: #fafafa;
  }

  .card-back-description {
    margin: 0;
    color: #fafafa;
    font-family: var(--font-primary);
    font-size: 24px;
    line-height: 1.2;
  }
</style>
