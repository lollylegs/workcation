<template>
	<section class="bg-gray-600">
		<div class="flex justify-between px-4 py-3">
			<div class="relative max-w-xs w-full">
				<div class="absolute inset-y-0 left-0 flex items-center pl-3">
					<img class="h-6 w-6" src="/img/search-line.svg">
				</div>
				<input class="block w-full bg-gray-800 focus:outline:none focus:bg-white focus:text-gray-900 rounded-lg pl-10 pr-4 py-2" placeholder="Search by keywords">
			</div>
			<button @click="toggle" type="button" class="ml-4 inline-flex bg-gray-700 hover:text-white hover:bg-gray-500 focus:outline-none focus:shadow-outline rounded-lg shadow pl-3 pr-4 pt-1">
				<img class="h-8 w-8" src="/img/filter-3-fill.svg">
				<span class="pt-1 pr-4 text-gray-200 font-medium">Filters</span>
			</button>
		</div>
		<form v-show=isOpen>
			<div class="px-4 py-4 border-t border-gray-900 sm:flex sm:-mx-2">
				<div class="flex sm:w-1/2 sm:mx-0">
					<label class="block w-1/2 px-2">
						<span class="text-sm font-semibold text-gray-400">Bedrooms</span>
						<select class="mt-1 form-select block w-full py-2 bg-gray-700 rounded-lg text-white shadow focus:bg-gray-500">
							<option>4</option>
						</select>
					</label>
					<label class="block w-1/2 px-2">
						<span class="text-sm font-semibold text-gray-400">Bathrooms</span>
						<select class="mt-1 form-select block w-full py-2 bg-gray-700 text-white rounded-lg shadow focus:bg-gray-500">
							<option>2</option>
						</select>
					</label>
				</div>
				<div class="mt-4 sm:w-1/2 sm:mt-0 sm:px-2">
					<label>
						<span class="text-sm font-semibold text-gray-400">Price Range</span>
						<select class="mt-1 form-select block w-full py-2 bg-gray-700 text-sm text-white rounded-lg shadow focus:bg-gray-500">
							<option>Up to $2,000/wk</option>
						</select>
					</label>
				</div>
			</div>
				<div class="px-4 py-4 border-t border-gray-900">
					<span class="block text-sm font-semibold text-gray-400">Property Type</span>
					<div class="sm:flex sm:-mx-2">
						<label class="mt-2 sm:w-1/4 sm:px-2 flex items-center">
							<input  class="form-radio bg-gray-800 focus:bg-gray-700" type="radio" name="propertyType" value="house">
							<span class="ml-2 text-white text-sm">House</span>
						</label>
						<label class="mt-2 sm:w-1/4 sm:px-2 flex items-center">
							<input class="form-radio bg-gray-800 focus:bg-gray-700" type="radio" name="propertyType" value="apartment">
							<span class="ml-2 text-white text-sm">Apartment</span>
						</label>
						<label class="mt-2 sm:w-1/4 sm:px-2 flex items-center">
							<input class="form-radio bg-gray-800 focus:bg-gray-700" type="radio" name="propertyType" value="loft">
							<span class="ml-2 text-white text-sm">Loft</span>
						</label>
						<label class="mt-2 sm:w-1/4 sm:px-2 flex items-center">
							<input class="form-radio bg-gray-800 focus:bg-gray-700" type="radio" name="propertyType" value="townhouse">
							<span class="ml-2 text-white text-sm">Townhouse</span>
						</label>
					</div>
				</div>
				<div class="px-4 py-4 border-t border-gray-900">
					<span class="block font-semibold text-gray-400">Amenities</span>
					<div class="sm:flex sm:-mx-2 sm:flex-wrap">
						<label class="mt-2 flex items-center sm:w-1/4 sm:px-2">
							<input class="bg-gray-800 focus:bg-gray-700 form-checkbox" type="checkbox" name="balcony">
							<span class="ml-2 text-white text-sm">Balcony</span>
						</label>
						<label class="mt-2 flex items-center sm:w-1/4 sm:px-2">
							<input class="bg-gray-800 focus:bg-gray-700 form-checkbox" type="checkbox" name="pool">
							<span class="ml-2 text-white text-sm">Pool</span>
						</label>
						<label class="mt-2 flex items-center sm:w-1/4 sm:px-2">
							<input class="bg-gray-800 focus:bg-gray-700 form-checkbox" type="checkbox" name="beach">
							<span class="ml-2 text-white text-sm">Beach</span>
						</label>
						<label class="mt-2 flex items-center sm:w-1/4 sm:px-2">
							<input class="bg-gray-800 focus:bg-gray-700 form-checkbox" type="checkbox" name="petFriendly">
							<span class="ml-2 text-white text-sm">Pet Friendly</span>
						</label>
						<label class="mt-2 flex items-center sm:w-1/4 sm:px-2">
							<input class="bg-gray-800 focus:bg-gray-700 form-checkbox" type="checkbox" name="kidFriendly">
							<span class="ml-2 text-white text-sm">Kid friendly</span>
						</label>
						<label class="mt-2 flex items-center sm:w-1/4 sm:px-2">
							<input class="bg-gray-800 focus:bg-gray-700 form-checkbox" type="checkbox" name="parking">
							<span class="ml-2 text-white text-sm">Parking</span>
						</label>
						<label class="mt-2 flex items-center sm:w-1/2 sm:px-2">
							<input class="bg-gray-800 focus:bg-gray-700 form-checkbox" type="checkbox" name="airConditioning">
							<span class="ml-2 text-white text-sm">Air Conditioning</span>
						</label>
					</div>
				</div>
				<div class="bg-gray-800 ppx-4 py-4 sm:text-right">
					<button class="block w-full sm:w-auto sm:inline-block mr-4 bg-teal-600 hover:bg-teal-500 font-semibold text-white px-4 py-2 rounded-lg">Update results</button>
				</div>
		</form>
	</section>	
</template>

<script>
export default {
	props: [],
	data() {
		return {
          isOpen: false,
		}
	},
	methods: {
        toggle() {
           this.isOpen = !this.isOpen        	
        }
	},
}
  
</script>

