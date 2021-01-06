<template>
	<div id="app" class="min-h-scree bg-gray-200 antialias">
		<header class=" flex justify-between items-center bg-gray-700 px-4 py-3">
			<div>
				<img class="h-10 w-auto" src="/img/logo.svg">
			</div>
			<div class="flex">
				<button>
				<img class="h-8 w-8" src="/img/menu-line.svg">
			</button>
			</div>
		</header>
		<section class="flex justify-between bg-gray-600 px-4 py-3">
			<div class="relative">
				<div class="absolute inset-y-0 left-0 flex items-center pl-3">
					<img class="h-6 4-6" src="/img/search-line.svg">
				</div>
				<input class="bg-gray-800 focus:outline:none focus:bg-white focus:text-gray-900 text-white rounded-lg pl-10 pr-4 py-2" placeholder="Search by keywords">
			</div>
			<button class="inline-flex bg-gray-700 hover:bg-gray-500 focus:outline-none focus:shadow-outline rounded-lg shadow pl-3 pr-4">
				<img class="h-8 w-8" src="/img/filter-3-fill.svg">
				<span class=" pt-2 ml-2 text-gray-200 font-medium">Filters</span>
			</button>
		</section>	
		<main class="px-4 py-6">
			<h3 class="text-gray-900 text-xl">Los Angeles</h3>
			<p class="text-gray-600">Live like the stars in these luxurious Southern Californian Estates.</p>
			<div class="mt-6">
				<div>
					<div>
						<img class="rounded-lg shadow-md h-64 w-full" src="/img/losAngeles.jpeg" alt="Los Angeles Modern House">
					</div>
					<div class="relative px-4 -mt-16">
						<div class="bg-white rounded-lg px-4 py-4 shadow-lg">
							<div class="flex">
								<span class="inline-block px-2 py-1 leading-none bg-teal-200 text-teal-800 rounded-full font-semibold uppercase tracking-wide text-xs">Plus</span>
								<div class="ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">
									3beds &bull; 2baths
								</div>
							</div>
							<h4 class="mt-1 text-gray-900 font-semibold text-lg">Modern home in city center</h4>
							<div class="mt-1">
								<span class="text-gray-900">$1,400</span>
								<span class="ml-1 text-sm text-gray-500">/wk</span>
							</div>
							<div class="mt-2 flex items-center text-sm text-gray-600">
							<svg class="h-4 w-4 fill-current text-teal-500" viewBox="0 0 24 24" ><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
							</svg>
							<svg class="h-4 w-4 fill-current text-teal-500" viewBox="0 0 24 24" ><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
							</svg>
							<svg class="h-4 w-4 fill-current text-teal-500" viewBox="0 0 24 24" ><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
							</svg>
							<svg class="h-4 w-4 fill-current text-teal-500" viewBox="0 0 24 24" ><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
							</svg>
							<svg class="h-4 w-4 fill-current text-teal-500" viewBox="0 0 24 24" ><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
							</svg>
							<span class="ml-2">34 Reviews</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>

export default {
	name: 'app',
	components: {
		
	}
}
</script>

<style src="./assets/tailwind.css"></style>
