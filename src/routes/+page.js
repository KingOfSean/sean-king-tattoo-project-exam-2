export async function load({ fetch }) {
    try {
        const response = await fetch('https://vikingmergers.wpenginepowered.com/wp-json/wp/v2/businesses?');
        const data = await response.json();
        return { data };
    }
    catch (error) {
        console.log(error)
    }
}