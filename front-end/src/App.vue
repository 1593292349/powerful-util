<template>
	<div :class="classes.main">
		hello world!
	</div>
</template>

<script setup lang="ts">
import {
	useCssModule,
} from 'vue';

const classes = useCssModule();

console.log(process.env);
</script>

<style module lang="scss">
.main{
	background:#ddd;
}
</style>