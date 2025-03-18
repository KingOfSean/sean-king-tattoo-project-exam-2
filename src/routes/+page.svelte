<script>
    import Header from '../components/Header.svelte';
	import BusinessListing from '../components/BusinessListing.svelte';

    export let data;
</script>

<div class="w-full h-full">
    <Header />
    <BusinessListing listingData={data} />
</div>