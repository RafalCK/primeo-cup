<template>
	<div class="incoming-matches">
		<div
			class="incoming-matches__match"
			v-for="match in matches"
			:key="match.id">
			<MatchesCard :item="match" />
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	currentRound: {
		type: Number,
		required: true,
	},
});

const { find } = useStrapi();
const matchesResponse = await find("matches", {
	populate: "deep",
	filters: {
		roundNumber: props.currentRound,
	},
});

let matches: object[] = matchesResponse.data;
</script>

<style lang="scss" scoped>
.incoming-matches {
	&__match {
		margin-bottom: rem(9);
	}
}

@media (max-width: 430px) {
	.incoming-matches__match {
		:deep(.matches-card) {
			.matches-card__player {
				flex-direction: column-reverse;

				&__away {
					flex-direction: column;
				}
			}
		}
	}
}
</style>
