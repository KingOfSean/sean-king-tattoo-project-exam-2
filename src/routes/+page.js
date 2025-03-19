export async function load({ fetch }) {
    try {
        const response = await fetch('https://vikingmergers.wpenginepowered.com/wp-json/wp/v2/businesses?');
        const data = await response.json();

        const industryPromises = data.map(async (item) => {
            if (item.acf.related_industry[0] !== undefined) {
                const res = await fetch(
                    `https://vikingmergers.wpenginepowered.com/wp-json/wp/v2/industry/${item.acf.related_industry[0]}`
                );
                let industryData = await res.json();

                return {"id": item.id, "industry": industryData.title.rendered};
            }
            else {
                return {"id": item.id, "industry": 'n/a'};
            }
        });

        const industry = await Promise.all(industryPromises);

        const listings = { data, industry };
        
        return { data, industry };
    } catch (error) {
        console.log(error);
    }
}