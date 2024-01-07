<template>
	<div class="players-card">
		<div class="players-card__image">
			<div class="players-card__image__avatar">
				<NuxtImg
					provider="strapi"
					class="players-card__image__avatar__image"
					:src="item.avatar.data.attributes.url"
					height="50" />
				<NuxtImg
					provider="strapi"
					class="players-card__image__club__image"
					:src="item.club.data.attributes.logo.data.attributes.url"
					height="50" />
			</div>
			<div class="players-card__image__club">
				<span class="players-card__image__club__name">{{ item.club.data.attributes.name }}</span>
			</div>
		</div>
		<div class="players-card__name">
			<span class="players-card__name__name">{{ item.name }}</span>
			<span class="players-card__name__surname">{{ item.surname }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	item: {
		type: Object,
		required: true,
	},
});
</script>

<style scoped lang="scss">
.players-card {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: $color-black-500;
	border-bottom: rem(6) solid $color-primary;
	box-sizing: border-box;
	padding: rem(30) rem(40) rem(30) rem(20);

	&__image {
		display: flex;
		flex-direction: column;

		&__avatar {
			&__image {
				margin-right: rem(10);
				border-radius: 50%;
			}
		}

		&__club {
			display: flex;
			align-items: center;
		}
	}

	&__name {
		display: flex;
		flex-direction: column;
		font-size: rem(30);
		text-align: right;

		span {
			display: block;
		}
	}
}

@media (max-width: 600px) {
	.players-card {
		&__name {
			font-size: rem(20);
		}
	}
}
</style>
