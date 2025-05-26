
<script setup>
import { ref, computed } from 'vue'
import { cells, evalCell } from './spreadsheetstore.js'

const cols = computed(() => cells.map((_, i) => String.fromCharCode(65 + i)))
const editing = ref(false)
const currentCell = ref({ c: -1, r: -1 })

function startEditing(c, r) {
  currentCell.value = { c, r }
  editing.value = true
}

function updateCell(e) {
  editing.value = false
  cells[currentCell.value.c][currentCell.value.r] = e.target.value.trim()
}
</script>

<template>
  <table>
    <thead>
      <tr>
        <th></th>
        <th v-for="c in cols">{{ c }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in cells[0].length">
        <th>{{ i - 1 }}</th>
        <td v-for="(c, j) in cols" @click="startEditing(j, i - 1)">
          <div class="cell">
            <input
              v-if="editing && currentCell.c === j && currentCell.r === i - 1"
              :value="cells[j][i - 1]"
              @change="updateCell"
              @blur="updateCell"
              @vue:mounted="({ el }) => el.focus()"
            />
            <span v-else>{{ evalCell(cells[j][i - 1]) }}</span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  border-collapse: collapse;
  margin: 1em 0;
}

th {
  color: var(--sl-color-white);
  background-color: inherit;
  padding: 0 1em;
}

tr:first-of-type th {
  width: 100px;
}

tr:first-of-type th:first-of-type {
  width: 25px;
}

td {
  border: 1px solid gray;
  padding: 0;
}

.cell, .cell input {
  height: 1.5em;
  line-height: 1.5;
  font-size: 15px;
  color: var(--sl-color-white);
}

.cell span {
  padding: 0 6px;
  display: block;
}

.cell input {
  width: 100%;
  box-sizing: border-box;
  padding: 0 4px;
}

.cell input:focus {
  border: 2px solid var(--sl-color-gray-5);
  color: var(--sl-color-white);
}
</style>
