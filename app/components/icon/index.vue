<!-- eslint-disable vue/no-v-html -->
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-icon"
    :viewBox="`${iconViewBox(name)}`"
    :stroke="`${stroke}`"
    :fill="`${fill}`"
    :height="`${height}`"
    :width="`${width}`"
  >
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1" v-html="iconPath(name)"></g>
    </g>
  </svg>
</template>

<script lang="ts" setup>
// import { icons } from './icons-list'
import type { IconName } from './icons-list'
import { icons } from './icons-list'

interface IconProps {
  name: IconName
  stroke?: string
  fill?: string
  height?: string
  width?: string
  viewBox?: string
  path?: string
}

withDefaults(defineProps<IconProps>(), {
  stroke: 'none',
  fill: 'none',
  height: '24px',
  width: '24px',
  viewBox: '0.0.0.0',
  path: '<path></path>',
})

const iconViewBox = (name: IconName) => {
  const icon = icons.find((currentIcon) => currentIcon.name === name)
  if (!icon) {
    throw new Error(`No icon with name ${name}`)
  }
  return icon.viewBox
}

const iconPath = (name: IconName) => {
  const icon = icons.find((currentIcon) => currentIcon.name === name)
  if (!icon) {
    throw new Error(`No icon with name ${name}`)
  }
  return icon.path
}
</script>