<template>
  <div class="register-form">
    <el-form @submit.prevent="handleSubmit" class="form-container">
      <h1>Registeration</h1>
      <p>Sign up to your account to continue</p>
      <div class="form-row">
        <el-form-item class="input-container">
          <label for="first-name">First Name</label>
          <el-input
            id="first-name"
            v-model="firstName"
            placeholder="Enter your name"
            class="input-field"
          ></el-input>
        </el-form-item>
        <el-form-item class="input-container">
          <label for="last-name">Last Name</label>
          <el-input
            id="last-name"
            v-model="lastName"
            placeholder="Enter your name"
            class="input-field"
          ></el-input>
        </el-form-item>
      </div>
      <div class="form-row">
        <el-form-item class="input-container">
          <label for="email">Email</label>
          <el-input
            id="email"
            v-model="email"
            placeholder="Enter your email"
            class="input-field"
          ></el-input>
        </el-form-item>
        <el-form-item class="input-container">
          <label for="phone">Phone</label>
          <el-input
            id="phone"
            v-model="phone"
            placeholder="Enter your number"
            class="input-field"
          >
          </el-input>
        </el-form-item>
      </div>
      <div class="form-row">
        <el-form-item class="input-container">
          <label for="password">Password</label>
          <el-input
            id="password"
            v-model="password"
            type="password"
            placeholder="Enter your password"
            class="input-field"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item class="input-container">
          <label for="repeat-password">Repeat Password</label>
          <el-input
            id="repeat-password"
            v-model="repeatPassword"
            type="password"
            placeholder="Enter your password"
            class="input-field"
            show-password
          ></el-input>
        </el-form-item>
      </div>
      <el-form-item>
        <el-checkbox v-model="acceptTerms">
          Accept all terms and conditions of I-Shoppin
        </el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit" class="sign-up-button">
          Sign up
        </el-button>
      </el-form-item>
      <div class="social-login">
        <p>or Sign Up with</p>
        <div class="social-icons">
          <el-button type="text" class="social-button">
            <img src="../../assets/login/google.svg" alt="Google" />
          </el-button>
          <el-button type="text" class="social-button">
            <img src="../../assets/login/faceb.svg" alt="Facebook" />
          </el-button>
          <el-button type="text" class="social-button">
            <img src="../../assets/login/apple.svg" alt="Apple" />
          </el-button>
        </div>
      </div>
    </el-form>
    <p class="sign-in-link">
      Already have an account?
      <RouterLink to="/login">Sign In</RouterLink>
    </p>
  </div>
</template>

<script setup>
import router from "@/router";
import { register } from "@/service/requests";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const phone = ref("");
const password = ref("");
const repeatPassword = ref("");
const acceptTerms = ref(false);

const handleSubmit = () => {
  const formData = new FormData();
  formData.append("name", firstName.value);
  formData.append("last_name", lastName.value);
  formData.append("email", email.value);
  formData.append("phone", phone.value);
  formData.append("password", password.value);

  register(formData)
    .then(() => {
      router.push("/login");
    })
    .catch((err) => {
      alert(err);
    });
};
</script>

<style scoped>
.register-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-shadow: 0px 5px 10px 0px rgba(160, 163, 189, 0.15);
}

.form-container {
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 600px;
  margin: 0 50px;
}

h1 {
  font-size: 32px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: 0.9999998807907104px;
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 500;
  line-height: 34px;
  text-align: center;
  color: rgba(118, 118, 118, 1);
}

.form-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.input-container {
  flex: 1;
}

label {
  display: block;
  text-align: left;
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
}

.input-field {
  width: 100%;
}

:deep(.el-input__wrapper input) {
  width: 100%;
  height: 44px;
  padding: 5px 16px;
  border-radius: 8px;
  background: rgba(239, 240, 246, 1);
}

:deep(.el-input__wrapper) {
  padding: 0;
}

:deep(.el-input__suffix) {
  padding: 0 10px;
  background: rgba(239, 240, 246, 1);
}

.sign-up-button {
  width: 100%;
  height: 44px;
  padding: 12px 0;
  font-size: 16px;
  font-weight: bold;
  background: linear-gradient(138.87deg, #233a72 1.08%, #435789 81.68%);
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
}

.sign-up-button:hover {
  background: linear-gradient(138.87deg, #435789 1.08%, #233a72 81.68%);
}

.social-login {
  margin-top: 20px;
}

.social-login p {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.social-button {
  padding: 0;
}

.social-button img {
  width: 24px;
  height: 24px;
}

.sign-in-link {
  font-size: 14px;
  color: #666;
  margin-top: 20px;
}

.sign-in-link a {
  color: #ffa500;
  text-decoration: none;
}

.sign-in-link a:hover {
  text-decoration: underline;
}
</style>
