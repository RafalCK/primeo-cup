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
				<div class="dashboard__summary__info__header"><span style="color: #00dfec">K</span>RÓL <span style="color: #00dfec">S</span>TRZECLCÓW</div>
				<PlayersCard :item="topScorerPlayer" />
			</div>
			<div class="dashboard__summary__info">
				<div class="dashboard__summary__info__header"><span style="color: #00dfec">K</span>RÓL <span style="color: #00dfec">R</span>EMISÓW</div>
				<PlayersCard :item="topDrawerPlayer" />
			</div>
			<div class="dashboard__summary__info">
				<div class="dashboard__summary__info__header"><span style="color: #00dfec">K</span>RÓL <span style="color: #00dfec">D</span>EFENSYWY</div>
				<PlayersCard :item="leastLostGoalsPlayer" />
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

const topScorer: object = summaries.reduce((maxSummary, currentSummary) => {
	return currentSummary.attributes.goalsScored > maxSummary.attributes.goalsScored ? currentSummary : maxSummary;
});

const topDrawer: object = summaries.reduce((maxSummary, currentSummary) => {
	return currentSummary.attributes.draws > maxSummary.attributes.draws ? currentSummary : maxSummary;
});

const leastLostGoals: object = summaries.reduce((maxSummary, currentSummary) => {
	return currentSummary.attributes.goalsLost < maxSummary.attributes.goalsLost ? currentSummary : maxSummary;
});

const topScorerPlayer: object = topScorer.attributes.player.data.attributes;
const topDrawerPlayer: object = topDrawer.attributes.player.data.attributes;
const leastLostGoalsPlayer: object = leastLostGoals.attributes.player.data.attributes;
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
			flex: 0 0 rem(370);
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
