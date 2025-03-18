<script>
	let props = $props();

	const formatTitle = (title) => {
		return title.replace(/#(\d+)/, "(#$1)");
	}

	const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

	console.log(JSON.parse(JSON.stringify(props.listingData)));
</script>

<div class="w-full flex-col items-center justify-center pr-[2rem] pl-[2rem] text-center">
	{#each props.listingData.data as card}
		<div
			class="mt-[1.5rem] mb-[1rem] inline-flex w-full flex-col items-center shadow-[0_4px_6px_#0000000D]"
		>
			<!-- <div class="mb-[1rem] w-full shadow-[inset_0_0_0_1000px_#D9D9D9]">
				<svg width="100%" height="80%" viewBox="0 0 100 80">
					<line x1="0" y1="0" x2="125" y2="100" stroke="black" stroke-width=".2" />
					<line x1="100" y1="0" x2="-56" y2="125" stroke="black" stroke-width=".2" />
				</svg>
			</div> -->
			<div class="mb-[1rem] w-full shadow-[inset_0_0_0_1000px_#D9D9D9]">
				<picture>
					<source media="(max-width: 1280px)" srcset={card.yoast_head_json.og_image[0].url} />
							<img class="block h-full w-full xl:max-h-[348.19px]" src={card.yoast_head_json.og_image[0].url} alt="" />
				</picture>
			</div>
			<div class="self-start pl-8">
				<div class="w-full">
					<p class="mb-[1rem] text-left text-[.7rem] font-bold text-[#848C8C80] uppercase">
						{card.acf.listing_region}
					</p>
				</div>
				<div class="self-start">
					<p class="pr-14 text-left text-[1.5rem] font-bold text-[#0E2C65] uppercase">
						{formatTitle(card.title.rendered)}
					</p>
					<p class="text-left font-bold text-[#0E2C65] uppercase opacity-45">Industry</p>
				</div>

				<div class="my-4 h-[1px] w-[5.5rem] shadow-[inset_0_0_0_1000px_#0E2C65]"></div>
				<ul class="self-start text-left text-[1.2rem] font-bold text-[#0E2C65]">
					<li>
						Revenues: 
						<span class="font-normal text-black">
							{`$${numberWithCommas(card.acf.listing_revenue[card.acf.listing_revenue.length - 1 ].revenue)}`}
						</span>
					</li>
					<li>
						Adjusted Cash Flow: 
						<span class="font-normal text-black">
							{`$${numberWithCommas(card.acf.listing_revenue[card.acf.listing_revenue.length - 1 ].adjusted_cash_flow)}`}
						</span>
					</li>
					<li>Location: <span class="font-normal text-black">{card.acf.listing_region}</span></li>
				</ul>

				<div class="mt-16 mb-16 flex rounded-full text-white">
					<span class="rounded-l-sm p-6 pr-12 pl-12 uppercase shadow-[inset_0_0_0_1000px_#557DBE]">
						More Info
					</span>
					<span class="rounded-r-sm p-6 shadow-[inset_0_0_0_1000px_#082356]"> 🡢 </span>
				</div>
			</div>
		</div>
	{/each}
</div>
