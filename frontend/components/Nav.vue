<template>
	<div class="nav">
		<NuxtLink
			class="nav__link"
			to="/"
			>Dashboard</NuxtLink
		>
		<NuxtLink
			class="nav__link"
			to="/schedule"
			>Terminarz</NuxtLink
		>
		<NuxtLink
			class="nav__link"
			to="/table"
			>Tabela</NuxtLink
		>
		<NuxtLink
			class="nav__link"
			to="/players"
			>Zawodnicy</NuxtLink
		>
		<NuxtLink
			class="nav__link"
			to="/rules"
			>Regulamin</NuxtLink
		>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.nav {
	&__link {
		display: inline-flex;
		color: $color-white;
		font-size: rem(18);
		padding: rem(20);
		box-sizing: content-box;

		&.router-link-active {
			background: $color-grey;
			border-top: rem(6) solid $color-primary;
		}

		&:hover {
			background: $color-grey;
			border-top: rem(6) solid $color-primary;
		}
	}
}
</style>
