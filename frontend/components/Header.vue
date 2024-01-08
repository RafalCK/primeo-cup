<template>
	<div class="header">
		<div class="header__logo">
			<img
				class="header__logo__logo"
				src="/images/primeo_white.png"
				height="25" />
			<span class="header__logo__name">CUP</span>
		</div>
		<Menu class="header__menu" />
		<MenuMobile class="header__menu-mobile" />
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header {
	display: flex;
	align-items: center;
	margin: 0 rem(30);
	&__logo {
		padding: rem(20) 0;
		flex: 1;
		&__name {
			margin-left: rem(10);
			color: $color-primary;
			font-size: rem(34);
		}
	}
	&__menu {
		flex: 2;
		margin-top: rem(-12);

		&-mobile {
			display: none;
		}
	}
}

@media (max-width: 1100px) {
	.header {
		margin: 0 rem(12);
	}
	:deep(.header__menu) {
		display: none;
	}
	:deep(.header__menu-mobile) {
		display: block;
	}
}
</style>
