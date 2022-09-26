<script>
  import AddAutomobil from "./components/AddAutomobil.svelte";
  import AutomobilDetail from "./components/AutomobilDetail.svelte";
  import AutomobilList from "./components/AutomobilList.svelte";
</script>

<main>
  <h1>Welcome to automobil manager!</h1>
  <AddAutomobil />
  <div class="infoWrapper">
    <div class="automobilList">
      <AutomobilList />
    </div>
    <div class="automobilDetail">
      <AutomobilDetail />
    </div>
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 850px;
    margin: 0 auto;
  }
  .infoWrapper {
    display: flex;
    min-height: 600px;
  }
  .automobilList {
    width: 40%;
    border: 1px solid;
    margin-top: -1px;
    margin-right: -1px;
  }
  .automobilDetail {
    width: 60%;
    border: 1px solid;
    margin-top: -1px;
  }
</style>
