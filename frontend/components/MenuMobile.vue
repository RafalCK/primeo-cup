<template>
	<div>
		<button
			@click="toggleMenu"
			:class="{ open: menuIsOpen }"
			class="menu-button">
			<span
				class="bar"
				:class="{ cross: menuIsOpen }"></span>
			<span
				class="bar"
				:class="{ cross: menuIsOpen }"></span>
			<span
				class="bar"
				:class="{ cross: menuIsOpen }"></span>
		</button>
		<div
			:class="{ open: menuIsOpen }"
			class="menu-mobile__menu"
			v-show="menuIsOpen">
			<Nav />
		</div>
	</div>
</template>

<script setup lang="ts">
const menuIsOpen = ref(false);

const route = useRoute();

const toggleMenu = () => {
	menuIsOpen.value = !menuIsOpen.value;
};

watch(
	() => route.path,
	() => {
		menuIsOpen.value = false;
	}
);
</script>

<style lang="scss" scoped>
.menu-button {
	background: none;
	border: none;
	cursor: pointer;

	.bar {
		display: block;
		width: rem(25);
		height: rem(3);
		background-color: $color-primary;
		margin: rem(5) 0;
		transition: all 0.3s ease;

		&:first-child {
			transform-origin: top left;
		}

		&:nth-child(2) {
			transform-origin: center;
		}

		&:last-child {
			transform-origin: bottom left;
		}

		&.cross {
			&:first-child {
				transform: rotate(47deg) translateY(-1px);
			}

			&:nth-child(2) {
				transform: scale(0);
			}

			&:last-child {
				transform: rotate(-45deg) translateY(0);
			}
		}
	}
}

.menu-mobile {
	&__menu {
		display: flex;
		flex-direction: column;
		margin-top: rem(20);
		background-color: $color-black-500;
		position: absolute;
		top: 60px;
		right: 0;
		width: 100%;

		:deep(.nav) {
			display: flex;
			flex-direction: column;

			.nav__link {
				width: 100%;

				&.router-link-active {
					&:hover {
						border-top: rem(6) solid $color-primary;
					}
				}

				&:hover {
					border-top: none;
				}
			}
		}
	}
}
</style>
