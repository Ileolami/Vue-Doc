<template>
  <form
    class="demo"
    action="/dataCollectionLocation"
    method="post"
    autocomplete="on"
  >
    <div v-for="item in formItems" :key="item.id" class="form-item">
      <label :for="item.id">{{ item.label }}:</label>
      <input
        type="text"
        :id="item.id"
        :name="item.id"
        v-model="item.value"
        :placeholder="item.placeholder"
      />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: "AccessibleForm",
  data() {
    return {
      formItems: [
        { id: "firstName", label: "First Name", value: "", placeholder: "Enter your first name" },
        { id: "lastName", label: "Last Name", value: "", placeholder: "Enter your last name" }
        // Add more fields as needed
      ]
    }
  }
}
</script>

<style>
.demo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  max-width: 300px;
}
.form-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
label {
  font-weight: bold;
}
input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
}
/* Style for placeholder text in the last name field */
#lastName::placeholder {
  color: black;
  opacity: 1;
}
#lastName:-ms-input-placeholder {
  color: black;
}
#lastName::-ms-input-placeholder {
  color: black;
}
</style>