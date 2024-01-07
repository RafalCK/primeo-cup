<template>
	<div class="rules">
		<div v-html="rulesResponse.data.attributes.content"></div>
	</div>
</template>

<script setup lang="ts">
const { find } = useStrapi();
const rulesResponse = await find("rule");
</script>

<style lang="scss" scoped>
:deep(li) {
	line-height: 28px;
}
</style>
