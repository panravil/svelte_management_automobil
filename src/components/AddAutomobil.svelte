<script>
  import { AutoMobilItems } from "./../store/store";
  import { onMount } from "svelte";

  let brand = "";
  let model = "";
  let yearOfManufacture = "";
  let newItemInputForm = null;

  onMount(() => {
    newItemInputForm.focus();
  });

  function addToList() {
    $AutoMobilItems = [...$AutoMobilItems, { brand, model, yearOfManufacture }];
  }
</script>

<div class="addAutoWrapper">
  <div class="inputs">
    <input
      bind:value={brand}
      bind:this={newItemInputForm}
      type="text"
      placeholder="Add a brand"
    />
    <input bind:value={model} type="text" placeholder="Add a model" />
    <input
      bind:value={yearOfManufacture}
      type="number"
      placeholder="Add a yeer of manufacture"
    />
  </div>
  <div class="addBtn">
    <button on:click={addToList}>Potvrdit</button>
  </div>
</div>

<style>
  .addAutoWrapper {
    display: flex;
    justify-content: space-between;
    padding: 1em 2em;
    border: 1px solid;
  }
  .inputs input {
    display: block;
  }
</style>
