<script setup>
import { ref } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: 'Select an option'
  },
  options: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['select']);
const isOpen = ref(false);
const selectedOption = ref(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  isOpen.value = false;
  emit('select', option);
};
</script>

<template>
  <div class="dropdown-container">
    <button @click="toggleDropdown" class="dropdown-trigger">
      <span class="dropdown-icon">{{ isOpen ? '▼' : '▶' }}</span>
      {{ selectedOption ? selectedOption.label : label }}
    </button>
    <div v-if="isOpen" class="dropdown-menu">
      <!-- Default slot for custom header content -->
      <slot name="header"></slot>
      
      <!-- Regular options -->
      <div 
        v-for="option in options" 
        :key="option.value" 
        @click="selectOption(option)"
        class="dropdown-item"
      >
        {{ option.label }}
      </div>
      
      <!-- Default slot for custom footer content -->
      <slot name="footer"></slot>
      
      <!-- Default slot for any custom content -->
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.dropdown-container {
  position: relative;
  display: inline-block;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}

.dropdown-icon {
  margin-right: 8px;
}

</style>
