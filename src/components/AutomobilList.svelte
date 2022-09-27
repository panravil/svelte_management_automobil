<script>
  import { AutoMobilItems, selectedAuto } from "./../store/store";
  import { fade, scale } from "svelte/transition";

  function removeFromList(i) {
    $AutoMobilItems.splice(i, 1);
    $AutoMobilItems = $AutoMobilItems;
  }
  function onSelectAutomobil(i) {
    $selectedAuto = { selected: i };
    console.log("selectedAuto", $selectedAuto);
  }
</script>

<h2>Seznam vozidel</h2>
{#each $AutoMobilItems as item, index}
  <div class="Items" in:scale out:fade={{ duration: 500 }}>
    <span
      class={index === $selectedAuto.selected ? "selected" : ""}
      on:click={() => onSelectAutomobil(index)}
    >
      {item.brand}
      {item.model}
      {item.yearOfManufacture}
    </span>
    <button on:click={() => removeFromList(index)}> x </button>
    <br />
  </div>
{/each}

<style>
  .Items {
    padding: 0 1em;
    display: flex;
  }
  .Items span {
    width: 90%;
    text-align: left;
  }
  .Items button {
    widows: auto;
  }
  .selected {
    font-weight: bold;
  }
</style>
