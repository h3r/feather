<script setup>
import { ref, onMounted, onUnmounted  } from 'vue'

let wrtc;
const peerId = ref(null);

onMounted(async () => {

});

onUnmounted(() => {

});

function onServerOpen(_peerId){
    peerId.value = _peerId;
}

function onServerClose() {
    peerId.value = null;
}

</script>

<template>
    <h1>{{peerId? `connected(${peerId})` : `disconnected`}}}</h1>
</template>