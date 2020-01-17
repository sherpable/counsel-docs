<template>
	<div>
		<Navbar />
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
		<div class="home-container" style="background-image: url(/counsel/background.png)">
			<div class="home">
				<div class="hero">
					<i class="fas fa-check-double fa-6x"></i>
					<h1>Counsel</h1>

					<p class="description">
						Elegant testing framework for JavaScript and Vue.js.
					</p>
					<p class="action">
						<a href="/counsel/guide/" class="nav-link action-button">Get Started →</a>
					</p>
				</div>

				<div class="features">
					<div class="feature">
						<h2><i class="fas fa-heart"></i> It's like PHPUnit</h2>
						<p>If you love using PHPUnit, this testing framework is made for you.</p>
					</div>
					<div class="feature">
						<h2><i class="fas fa-adjust"></i> It's different</h2>
						<p>It's different from others like jasmine, mocha, ava or jest. No callbacks.</p>
					</div>
					<div class="feature">
						<h2><i class="fab fa-vuejs"></i> Vue.js support</h2>
						<p>It contains an elegant API for testing Vue.js components out of the box.</p>
					</div>
					<div class="feature">
						<h2><i class="fas fa-terminal"></i> IO testing</h2>
						<p>It provides an elegant feature for writing Input/Output tests within yaml.</p>
					</div>
					<div class="feature">
						<h2><i class="fas fa-pause"></i> Async/Await</h2>
						<p>It supports async/await code testing out of the box.</p>
					</div>
					<div class="feature">
						<h2><i class="fas fa-flag"></i> Beautiful reporting</h2>
						<p>You will love the beautiful reporting, which is 100% customizable.</p>
					</div>
				</div>

				<div class="content custom">
					<Content/>
				</div>
			</div>
		</div>
		<div class="footer">
			MIT Licensed | Copyright © {{ new Date().getFullYear() }}
		</div>
	</div>
</template>
<script>
import Navbar from '@theme/components/Navbar.vue'

export default {
	components: { Navbar },
}
</script>
