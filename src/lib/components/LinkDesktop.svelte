<script lang="ts">
  import { imgVector } from "$lib/constants/images";
  import { theme, toggleTheme } from "$lib/stores/theme";

  type Props = {
    label?: string;
    showLeadingIcon?: boolean;
    showTrailingIcon?: boolean;
    iconSrc?: string;
    iconHoverSrc?: string;
    isThemeToggle?: boolean;
  };

  let {
    label = "About",
    showLeadingIcon = true,
    showTrailingIcon = false,
    iconSrc = imgVector,
    iconHoverSrc = imgVector,
    isThemeToggle = false
  }: Props = $props();

  let hovered = $state(false);

  function handleMouseEnter() {
    hovered = true;
  }

  function handleMouseLeave() {
    hovered = false;
  }

  function handleClick() {
    if (isThemeToggle) {
      toggleTheme();
    }
  }
</script>

<button
  class="link-desktop"
  class:hovered={hovered}
  class:theme-toggle-light={isThemeToggle && $theme === 'light'}
  type="button"
  onmouseenter={handleMouseEnter}
  onmouseleave={handleMouseLeave}
  onclick={handleClick}
>
  <div class="link-content">
    {#if showLeadingIcon}
      <div class="icon-slot">
        <div class="icon-clip">
          <div class="icon-inner">
            {#if isThemeToggle}
              <img alt="" class="icon-img" src={$theme === 'dark' ? iconSrc : iconHoverSrc} />
            {:else}
              <img alt="" class="icon-img" src={hovered ? iconHoverSrc : iconSrc} />
            {/if}
          </div>
        </div>
      </div>
    {/if}

    {#if label}
      <p class="link-label">{label}</p>
    {/if}

    {#if showTrailingIcon}
      <div class="icon-slot trailing">
        <div class="icon-clip">
          <div class="icon-inner">
            <img alt="" class="icon-img" src={hovered ? iconHoverSrc : iconSrc} />
          </div>
        </div>
      </div>
    {/if}
  </div>
</button>

<style>
  .link-desktop {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8.385px 16.769px;
    border-radius: 1047.016px;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: background-color 0.15s ease, color 0.15s ease;
  }

  .link-desktop.hovered {
    background: #fafafa;
  }

  .link-label {
    margin: 0;
    font-family: var(--font-primary);
    font-weight: var(--font-weight-medium);
    line-height: 23.057px;
    font-size: 25.154px;
    color: var(--color-link-default);
    text-align: center;
    white-space: nowrap;
    transition: color 0.15s ease;
  }

  @media (max-width: 640px) {
    .link-label {
      font-size: 16px;
      line-height: 22px;
    }
  }

  .link-desktop.hovered .link-label {
    color: var(--color-link-hover);
  }

  .link-content {
    display: flex;
    gap: 4.192px;
    align-items: center;
  }

  .icon-slot {
    position: relative;
    width: 25.154px;
    height: 25.154px;
    flex-shrink: 0;
  }

  .icon-clip {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .icon-inner {
    position: absolute;
    inset: 16.67% 11.41% 16.67% 7.46%;
  }

  .icon-img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: filter 0.15s ease;
  }

  .link-desktop.hovered .icon-img {
    filter: brightness(0) saturate(100%) invert(0.4) sepia(1) saturate(2) hue-rotate(240deg) brightness(1.2);
  }

  .link-desktop.theme-toggle-light .icon-img {
    filter: brightness(1.5) sepia(1) hue-rotate(40deg) saturate(1.5);
  }
</style>
