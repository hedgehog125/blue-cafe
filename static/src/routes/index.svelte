<script>
    import linkPage from "$util/LinkPage.js";
    
    import TopBar from "$lib/TopBar.svelte";
</script>

<main>
    <TopBar></TopBar>
    <div class="content">
        <div>    
            <span>
                We'll have updates here eventually. But for now, maybe check out the
            </span>
            <a href={linkPage("menu")}>menu</a>.
        </div>
    </div>
</main>

<style>
    .content {
        position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin-top: 50px;
		padding-left: 25px;
		padding-right: 25px;
    
        display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
    }
    
    span, a {
        font-size: 20px;
    }
</style>