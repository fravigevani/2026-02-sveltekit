<script lang="ts">
  import LinkDesktop from "./LinkDesktop.svelte";
  import { imgVector1 } from "$lib/constants/images";
</script>

<div class="top-bar">
  <p class="brand">F-V</p>

  <div class="top-actions">
		<LinkDesktop
	label="About"
	showLeadingIcon={false}
	showTrailingIcon={false}
	/>
    <LinkDesktop 
      label="" 
      iconSrc={imgVector1} 
      iconHoverSrc={imgVector1}
      showTrailingIcon={false}
      isThemeToggle={true}
    />
  </div>
</div>

<style>
  .top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: var(--spacing-6) 0;
  }

  @media (max-width: 1024px) {
    .top-bar {
      padding: var(--spacing-6) 0;
    }
  }

  @media (max-width: 640px) {
    .top-bar {
      padding: var(--spacing-3) 0;
    }
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

  @media (max-width: 640px) {
    .brand {
      font-size: 12px;
      line-height: 22px;
    }
  }

  .top-actions {
    display: flex;
    gap: 24px;
    align-items: center;
  }

  @media (max-width: 640px) {
    .top-actions {
      gap: 8px;
    }
  }
</style>