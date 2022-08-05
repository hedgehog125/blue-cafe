<script>
    import TopBar from "$lib/TopBar.svelte";
    
    import mapPhoto from "$img/map.jpg";
</script>

<main>
    <TopBar></TopBar>
    <p>
        You can find us in the Blue Town Marquee. In the end closest to the porta-loos.
    </p>
    <img src={mapPhoto} alt="A map with the location circled" width=1768 height=1253>
</main>

<style>
    p {
        font-size: 20px;
    }
    img {
        width: 100%;
        height: auto;
    }
</style>