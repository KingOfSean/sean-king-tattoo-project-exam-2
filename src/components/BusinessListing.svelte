<script>
	let props = $props();

	const formatTitle = (title) => {
		return title.replace(/#(\d+)/, '(#$1)');
	};

	const formatDate = (dateString) => {
		const date = new Date(dateString);

		const formattedDate = date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});

		return formattedDate
	};

	const numberWithCommas = (number) => {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	};

	const getIndustryName = (id) => {
		const array = JSON.parse(JSON.stringify(props.listingData.industry));
		const name = array.find((item) => item.id === id )

		return name.industry.replace(/&#038;/g, '&');
	}
</script>

<div
	class="mt-[1.5rem] mb-[1.5rem] w-full pr-[2rem] pl-[2rem] text-center sm:flex-col sm:items-center sm:justify-center md:grid md:grid-cols-2 md:gap-6 xl:flex xl:flex-col"
>
	{#each props.listingData.data as card}
		<div
			class="mb-[2rem] inline-flex w-full flex-col items-center shadow-[0_4px_6px_#0000000D] md:mb-0 xl:flex xl:flex-row"
		>
			<div class="mb-[1rem] w-full shadow-[inset_0_0_0_1000px_#D9D9D9] md:h-[294.05px] xl:w-[600px]">
				<picture>
					<source media="(max-width: 1280px)" srcset={card.yoast_head_json.og_image[0].url} />
					<img
						class="block h-full w-full xl:max-h-[348.19px]"
						src={card.yoast_head_json.og_image[0].url}
						alt=""
					/>
				</picture>
			</div>
			<div class="w-full pl-8 md:self-start xl:flex xl:flex-row xl:items-center">
				<div class="w-full xl:hidden">
					<p class="mb-[1rem] text-left text-[.7rem] font-bold text-[#848C8C80] uppercase">
						{card.acf.listing_region}
					</p>
				</div>
				<div class="self-start xl:self-center">
					<p class="pr-14 text-left text-[1.5rem] font-bold text-[#0E2C65] uppercase xl:w-[400px]">
						{formatTitle(card.title.rendered)}
					</p>
					<p class="text-left font-bold text-[#0E2C65] uppercase opacity-45">
						{getIndustryName(card.id)}
					</p>
				</div>

				<div
					class="xxl:my-4 xxl:w-[2px] xxl:h-55 xxl:mx-4 xxl:self-center my-4 h-[1px] w-[5.5rem] shadow-[inset_0_0_0_1000px_#0E2C65] xl:mx-4 xl:my-4 xl:h-55 xl:w-[2px] xl:self-center"
				></div>

				<div class="flex w-full flex-col self-center xl:mr-6">
					<div class="hidden w-full xl:block">
						<p class="mb-[1rem] text-right text-[.7rem] font-bold text-[#848C8C80] uppercase">
							{`${formatDate(card.date)} | ${card.acf.listing_region}`}
						</p>
					</div>
					<div class="w-full xl:mr-6 xl:flex xl:justify-evenly">
						<ul class="self-start text-left text-[1.2rem] font-bold text-[#0E2C65] xl:self-center">
							<li>
								Revenues:
								<span class="font-normal text-black">
									{`$${numberWithCommas(card.acf.listing_revenue[card.acf.listing_revenue.length - 1].revenue)}`}
								</span>
							</li>
							<li>
								Adjusted Cash Flow:
								<span class="font-normal text-black">
									{`$${numberWithCommas(card.acf.listing_revenue[card.acf.listing_revenue.length - 1].adjusted_cash_flow)}`}
								</span>
							</li>
							<li>
								Location: <span class="font-normal text-black">{card.acf.listing_region}</span>
							</li>
						</ul>

						<a href={card.link} target="_blank">
							<div class="mt-16 mb-16 flex rounded-full text-white xl:self-end">
								<span
									class="rounded-l-sm p-6 pr-12 pl-12 uppercase shadow-[inset_0_0_0_1000px_#557DBE]"
								>
									More Info
								</span>
								<span class="rounded-r-sm p-6 shadow-[inset_0_0_0_1000px_#082356]"> 🡢 </span>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>
