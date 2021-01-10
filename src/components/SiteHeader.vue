<template>
	<header class="bg-gray-700 sm:flex sm:items-center sm:justify-between">
			<div class="flex justify-between px-4 py-3">
				<div>
					<img class="h-10 w-auto" src="/img/logo.svg">
				</div>
				<div class="flex">
        <button @click="toggle" type="button" class="text-gray-500 hover:text-white focus:outline-none">
          <svg class="h-8 w-8 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
			</div>
			<nav class="sm:flex sm:items-center sm:px-4" :class="{ 'hidden': !isOpen, 'block': isOpen }">
				<div class="px-2 pt-2 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm:py-0 sm:px-0">
					<a href="#" class="block px-3 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:text-sm sm:px-2">List your property</a>
					<a href="#" class="mt-1 block px-3 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:text-sm sm:ml-2 sm:px-2">Trips</a>
					<a href="#" class="mt-1 block px-3 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:text-sm sm:ml-2 sm:px-2">Messages</a>
				</div>
				<div class="px-5 py-5 sm:ml-4 sm:py-0 sm:px-0"> 
					<div class="flex items-center">
						<img class="h-10 w-10 rounded-full object-cover border-2 border-gray-500 sm:h-8 sm:w-8" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" alt="Your avatar">
						<span class="ml-4 font-semibold text-gray-200 sm:hidden">Marea Norton</span>
					</div>
					<div class="mt-5 sm:hidden">
						<a href="#" class="block text-gray-400 hover:text-white">Account settings</a>
						<a href="#" class="block mt-3 text-gray-400 hover:text-white">Support</a>
						<a href="#" class="block mt-3 text-gray-400 hover:text-white">Sign out</a>	
					</div>
				</div>
			</nav>
		</header>
</template>

<script>
	export default {
		props: [],
		data () {
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