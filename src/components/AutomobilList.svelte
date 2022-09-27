<script>
  import { AutoMobilItems } from "./../store/store";
  import { fade, scale } from "svelte/transition";

  let selected = Number(new URLSearchParams(window.location.search).get("index"));
  
  let cachedAutoList = localStorage.getItem("data");
  if (cachedAutoList) $AutoMobilItems = JSON.parse(cachedAutoList);


  function removeFromList(i) {
    $AutoMobilItems.splice(i, 1);
    $AutoMobilItems = $AutoMobilItems;
  }
  function onSelectAutomobil(i) {
    console.log('selected', selected);
    localStorage.setItem("data", JSON.stringify($AutoMobilItems))
    window.location.href = `/?index=${i}`;
  }
</script>

<h2>Seznam vozidel</h2>
{#each $AutoMobilItems as item, index}
  <div class="Items" in:scale out:fade={{ duration: 500 }}>
    <span
      class={index === selected ? "selected" : ""}
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
