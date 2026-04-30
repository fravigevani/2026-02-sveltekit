<script lang="ts">
  import LinkDesktop from "./LinkDesktop.svelte";
  import { imgVector1 } from "$lib/constants/images";
</script>

<div class="top-bar">
  <p class="brand">F-V</p>

  <div class="top-actions">
    <LinkDesktop label="About" showTrailingIcon={false} />
    <LinkDesktop label="" iconSrc={imgVector1} showTrailingIcon={false} />
  </div>
</div>

<style>
  .top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: var(--spacing-6) var(--spacing-12);
  }

  .brand {
    margin: 0;
    font-family: var(--font-primary);
    font-weight: var(--font-weight-medium);
    font-size: 24px;
    line-height: 22px;
    color: var(--color-link-default);
    text-align: center;
    white-space: nowrap;
  }

  .top-actions {
    display: flex;
    gap: 24px;
    align-items: center;
  }
</style>
