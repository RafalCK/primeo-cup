<template>
	<div class="dashboard">
		<div class="dashboard__info">
			<div class="dashboard__info__left">
				<div class="dashboard__info__header">
					<span style="color: #00dfec">K</span>OLEJKA <span style="color: #00dfec">{{ currentRound }}</span>
				</div>
				<IncomingMatches :current-round="currentRound" />
			</div>
			<div class="dashboard__info__right">
				<div class="dashboard__info__header"><span style="color: #00dfec">T</span>abela</div>
				<Table kind="short" />
			</div>
		</div>
		<div
			class="dashboard__summary"
			v-if="cupAlive">
			<div class="dashboard__summary__info">
				<div class="dashboard__summary__info__header"><span style="color: #00dfec">K</span>RÓL <span style="color: #00dfec">S</span>TRZELCÓW</div>
				<template v-for="topScorer in topScorers">
					<PlayersCard :item="topScorer.attributes.player.data.attributes" />
				</template>
			</div>
			<div class="dashboard__summary__info">
				<div class="dashboard__summary__info__header"><span style="color: #00dfec">K</span>RÓL <span style="color: #00dfec">D</span>EFENSYWY</div>
				<template v-for="topScorer in lessLost">
					<PlayersCard :item="topScorer.attributes.player.data.attributes" />
				</template>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const { find } = useStrapi();
const summariesResponse = await find("summaries", {
	populate: "deep",
});
let summaries: object[] = summariesResponse.data;

const currentRoundResponse = await find("current-round");
let currentRound: number = currentRoundResponse.data.attributes.round;
let cupAlive: boolean = currentRoundResponse.data.attributes.live;

const findTopPerformers = (summaries, key, isMax) => {
	const comparator = isMax ? (a, b) => a > b : (a, b) => a < b;

	const topValues = summaries.reduce((topSummaries, currentSummary) => {
		const currentValue = currentSummary.attributes[key];
		const topValue = topSummaries[0]?.attributes[key];

		if (!topSummaries.length || comparator(currentValue, topValue)) {
			return [currentSummary];
		} else if (currentValue === topValue) {
			return [...topSummaries, currentSummary];
		}

		return topSummaries;
	}, []);

	return topValues;
};
const topScorers = findTopPerformers(summaries, "goalsScored", true);
const lessLost = findTopPerformers(summaries, "goalsLost", false);
</script>

<style lang="scss" scoped>
.dashboard {
	&__info {
		display: flex;
		gap: rem(20);

		&__header {
			font-size: rem(34);
			text-transform: uppercase;
			margin-bottom: rem(10);
		}
		&__left {
			flex: 2;
		}
		&__right {
			flex: 0 0 rem(380);
		}
	}

	&__summary {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: rem(20);
		margin-top: rem(50);

		&__info {
			&__header {
				font-size: rem(34);
				text-transform: uppercase;
				margin-bottom: rem(10);
			}
		}
	}
}

@media (max-width: 1100px) {
	.dashboard {
		&__info {
			flex-direction: column;
		}
	}
}

@media (max-width: 355px) {
	.dashboard {
		&__summary {
			grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		}
	}
}
</style>
