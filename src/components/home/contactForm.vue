<template>
  <div>
    <div class="heading">Contact Us</div>
    <div class="contact-form">
      <el-form @submit.prevent="handleSubmit" class="form-layout">
        <div class="row">
          <el-form-item class="input-container">
            <el-label>First Name</el-label>
            <el-input
              v-model="firstName"
              placeholder="First Name"
              class="input-field"
            ></el-input>
          </el-form-item>
          <el-form-item class="input-container">
            <el-label>Last Name</el-label>
            <el-input
              v-model="lastName"
              placeholder="Last Name"
              class="input-field"
            ></el-input>
          </el-form-item>
        </div>
        <el-form-item class="full-width">
          <el-label>Email Address</el-label>
          <el-input
            v-model="email"
            placeholder="Email Address"
            class="input-field"
          ></el-input>
        </el-form-item>
        <el-form-item class="full-width">
          <el-label>Your message</el-label>
          <el-input
            v-model="message"
            type="textarea"
            placeholder="Message"
            class="textarea-field"
            rows="4"
          ></el-input>
        </el-form-item>
        <el-form-item class="full-width">
          <el-button type="primary" native-type="submit" class="submit-button"
            >Send Message</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const message = ref("");

const handleSubmit = () => {
  console.log({
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    message: message.value,
  });
};
</script>

<style scoped>
.heading {
  background: #fbf9f9;
  padding: 20px;
  width: max-content;
  margin: 50px auto 20px;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: none;
}

.form-layout {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  justify-content: space-between;
}

.input-container {
  flex: 1;
  margin-right: 16px;
}

.input-container:last-child {
  margin-right: 0;
}

.full-width {
  width: 100%;
}

.input-field {
  width: 100%;
  height: 70px;
  padding: 0;
  border-radius: 10px;
  font-size: 14px;
}

.textarea-field {
  width: 100%;
  padding: 0;
  border: none;
  font-size: 14px;
  resize: none;
}

.submit-button {
  width: 100%;
  height: 70px;
  padding: 12px 0;
  font-size: 16px;
  font-weight: bold;
  background: linear-gradient(138.87deg, #233a72 1.08%, #435789 81.68%);
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
}

.el-label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}

.submit-button:hover {
  background: linear-gradient(138.87deg, #435789 1.08%, #233a72 81.68%);
}
</style>
