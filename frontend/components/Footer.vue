<template>
	<div class="footer">
		Made by
		<NuxtLink
			class="footer__link"
			to="https://github.com/RafalCK"
			target="_blank"
			>RafalCK</NuxtLink
		>
		for
		<NuxtLink
			class="footer__link"
			to="https://primeo.pl"
			target="_blank"
			>PRIMEO CUP</NuxtLink
		>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.footer {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60px;
	color: $color-white;
	margin-top: auto;

	&__link {
		margin: 0 rem(5);
		color: $color-primary;
		text-transform: none;
	}
}
</style>
