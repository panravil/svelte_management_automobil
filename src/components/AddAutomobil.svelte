<script>
  import { AutoMobilItems, selectedAuto } from "./../store/store";
  import { onMount } from "svelte";

  let brand = "";
  let model = "";
  let yearOfManufacture = "";
  let newItemInputForm = null;
  let imageAutomobilu;
  let fileinput;

  const onFileSelected = (e) => {
    let image = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
      imageAutomobilu = e.target.result;
      console.log("image", e.target.result);
    };
  };

  onMount(() => {
    newItemInputForm.focus();
  });

  function addToList() {
    $AutoMobilItems = [
      ...$AutoMobilItems,
      { brand, model, yearOfManufacture, image: imageAutomobilu },
    ];
    brand = '';
    model = '';
    yearOfManufacture = '';
    imageAutomobilu = '';

    $selectedAuto.selected = $AutoMobilItems.length - 1;
  }
</script>

<div class="addAutoWrapper">
  <div class="inputs">
    <input
      bind:value={brand}
      bind:this={newItemInputForm}
      type="text"
      placeholder="Add a brand"
      required
    />
    <input bind:value={model} type="text" placeholder="Add a model" required />
    <input
      bind:value={yearOfManufacture}
      type="number"
      placeholder="Add a yeer of manufacture"
      required
    />
    
    <div
      class="btn"
      on:click={() => {
        fileinput.click();
      }}
    >
      Choose Image
    </div>
  </div>
  <div class="image-wrapper">
    {#if imageAutomobilu}
      <img class="image-auto" src={imageAutomobilu} alt="d" />
    {/if}
    <input
      style="display:none"
      type="file"
      accept=".jpg, .jpeg, .png"
      on:change={(e) => onFileSelected(e)}
      bind:this={fileinput}
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
    min-height: 200px;
  }
  .inputs {
    width: 30%;
  }
  .inputs input {
    display: block;
    width: 100%;
  }
  .image-auto {
    display: flex;
    height: 200px;
    width: 100%;
    object-fit: contain;
  }
  div.btn {
    background-color: #0069d9;
    padding: 6px 10px;
    color:  #fff;
  }
</style>
