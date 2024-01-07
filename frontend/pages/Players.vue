<template>
	<div class="players">
		<template
			v-for="player in players"
			:key="player.id">
			<PlayersCard :item="player.attributes" />
		</template>
	</div>
</template>

<script setup lang="ts">
const { find } = useStrapi();
const playersResponse = await find("players", {
	populate: "deep",
});
let players: object[] = playersResponse.data;
</script>

<style lang="scss" scoped>
.players {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	gap: rem(20);
}

@media (max-width: 355px) {
	.players {
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}
}
</style>
