<script lang="ts">
  import { imgVector, imgVector1, imgSun } from "$lib/constants/images";
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
    showLeadingIcon = false,
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

  function getThemeIcon() {
    return $theme === "dark" ? imgVector1 : imgSun;
  }
</script>

<button
  class="link-desktop"
  class:hovered={hovered}
  class:theme-toggle={isThemeToggle}
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
            <img alt="" class="icon-img" src={hovered ? iconHoverSrc : iconSrc} />
          </div>
        </div>
      </div>
    {/if}

    {#if label}
      <p class="link-label">{label}</p>
    {/if}

    {#if isThemeToggle}
      <div class="icon-slot">
        <div class="icon-clip">
          <div class="icon-inner">
            <img alt="" class="icon-img theme-icon" src={getThemeIcon()} />
          </div>
        </div>
      </div>
    {:else if showTrailingIcon}
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
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    border-radius: 999px;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: background-color 0.15s ease, color 0.15s ease;
  }

  .link-desktop.hovered {
    background: var(--color-background-secondary);
  }

  .link-content {
    display: flex;
    gap: 4px;
    align-items: center;
  }

  .link-label {
    margin: 0;
    font-family: var(--font-primary);
    font-weight: var(--font-weight-medium);
    line-height: 1;
    font-size: 25px;
    color: var(--color-link-default);
    text-align: center;
    white-space: nowrap;
    transition: color 0.15s ease;
  }

  .link-desktop.hovered .link-label {
    color: var(--color-link-hover);
  }

  .icon-slot {
    position: relative;
    width: 25px;
    height: 25px;
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
    object-fit: contain;
    transition: filter 0.15s ease, opacity 0.15s ease;
  }

  .link-desktop:not(.theme-toggle).hovered .icon-img {
    filter: brightness(0) saturate(100%) invert(39%) sepia(17%) saturate(2406%) hue-rotate(217deg) brightness(93%) contrast(91%);
  }

  .theme-toggle {
    padding: 8px;
  }

  .theme-toggle .theme-icon {
    filter: none;
  }

  :root[data-theme="light"] .theme-toggle .theme-icon {
    filter: brightness(0) saturate(100%) invert(13%) sepia(6%) saturate(0%) hue-rotate(0deg) brightness(96%) contrast(95%);
  }

  :root:not([data-theme="light"]) .theme-toggle .theme-icon {
    filter: brightness(0) saturate(100%) invert(100%);
  }

  @media (max-width: 640px) {
    .link-desktop {
      padding: 6px 12px;
    }

    .link-label {
      font-size: 16px;
    }

    .icon-slot {
      width: 16px;
      height: 16px;
    }

    .theme-toggle {
      padding: 6px;
    }
  }
</style>