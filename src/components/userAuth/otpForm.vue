<template>
  <div class="otp-verification">
    <div class="form-container">
      <img
        src="../../assets/otp-verification.png"
        alt="OTP Verification"
        class="verification-image"
      />
      <h1>OTP Verification</h1>
      <p>Enter the OTP sent to <strong>+234 706 067 2335</strong></p>
      <div class="otp-inputs">
        <el-input v-model="otp1" maxlength="1" class="otp-input"></el-input>
        <el-input v-model="otp2" maxlength="1" class="otp-input"></el-input>
        <el-input v-model="otp3" maxlength="1" class="otp-input"></el-input>
        <el-input v-model="otp4" maxlength="1" class="otp-input"></el-input>
      </div>
      <p class="resend-otp">
        Didn’t you receive the OTP?
        <a href="#" @click.prevent="resendOTP">Resend OTP</a>
      </p>
      <el-button type="primary" class="verify-button" @click="verifyOTP"
        >Verify</el-button
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElInput, ElButton } from "element-plus";

const otp1 = ref("");
const otp2 = ref("");
const otp3 = ref("");
const otp4 = ref("");

const verifyOTP = () => {
  const otp = `${otp1.value}${otp2.value}${otp3.value}${otp4.value}`;
  console.log(`Entered OTP: ${otp}`);
  // Handle OTP verification logic here
};

const resendOTP = () => {
  console.log("OTP resent");
  // Handle resend OTP logic here
};
</script>

<style scoped>
.otp-verification {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.form-container {
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
}

.verification-image {
  width: 80px;
  margin-bottom: 20px;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

p {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.otp-inputs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.otp-input {
  width: 60px;
  height: 60px;
  font-size: 24px;
  text-align: center;
  border: none;
  border-bottom: 2px solid #000;
}

.resend-otp {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.resend-otp a {
  color: #3b82f6;
  text-decoration: none;
}

.resend-otp a:hover {
  text-decoration: underline;
}

.verify-button {
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

.verify-button:hover {
  background: linear-gradient(138.87deg, #435789 1.08%, #233a72 81.68%);
}
</style>
