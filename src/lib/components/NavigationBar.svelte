<script lang="ts">
  import { createEventDispatcher } from "svelte";

  type Props = {
    active?: string;
    options?: string[];
  };

  let { active = "luce naturale", options = ["luce naturale", "luce artificiale"] }: Props = $props();

  const dispatch = createEventDispatcher();

  function select(option: string) {
    dispatch("change", option);
  }
</script>

<div class="navigation-bar">
  {#each options as option}
    <button
      type="button"
      class="filter-pill"
      class:active={active === option}
      onclick={() => select(option)}
    >
      <span>{option}</span>
    </button>
  {/each}
</div>

<style>
  .navigation-bar {
    display: flex;
    gap: var(--spacing-5);
    align-items: center;
  }

  .filter-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-2) var(--spacing-4);
    border-radius: var(--radius-full);
    border: none;
    background: transparent;
    color: var(--color-content-primary);
    cursor: pointer;
    font-family: var(--font-primary);
    font-size: var(--spacing-5);
    white-space: nowrap;
    transition: background-color 0.2s ease, transform 0.1s ease;
  }

  @media (max-width: 1024px) {
    .filter-pill {
      font-size: var(--spacing-5);
      padding: var(--spacing-2) var(--spacing-4);
    }
  }

  @media (max-width: 640px) {
    .filter-pill {
      font-size: 16px;
      padding: var(--spacing-2) var(--spacing-4);
    }
  }

  .filter-pill:hover {
    background: rgba(255, 255, 255, 0.08);
  }

  .filter-pill:active {
    transform: translateY(1px);
  }

  .filter-pill.active {
    background: var(--color-filter-background-selected);
    color: var(--color-filter-content-selected);
  }

  .filter-pill span {
    display: inline-block;
  }
</style>
