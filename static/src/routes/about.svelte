<script>
    import TopBar from "$lib/TopBar.svelte";
    
    import opponentPhoto from "$img/opponent.jpg";
</script>

<main>
    <TopBar></TopBar>
    <p>
        We're currently competing with the DF Cafe. But we'll try not to lose sight of our goal of providing for the community.
    </p>
    <div class="photoFrame">
        <div>
            <img src={opponentPhoto} alt="A map with the location circled" width=1768 height=1253>
            <p>
                Our worthy opponent
            </p>
        </div>
    </div>
</main>

<style>
    p {
        font-size: 20px;
    }

    .photoFrame {
        border: 2px solid black;
        border-radius: 10px;
        
        display: flex;
        justify-content: center;
        overflow: hidden;
    }
    img {
        width: 100%;
        height: auto;
    }
    .photoFrame > div > p {
        text-align: center;
        font-weight: bold;
        
        margin: 0px;
        padding: 5px;
        line-height: 1;
        vertical-align: middle;
    }
</style>