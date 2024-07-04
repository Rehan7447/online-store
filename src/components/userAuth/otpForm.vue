<template>
  <div class="otp-verification">
    <div class="form-container">
      <img
        src="../../assets/otpPic.png"
        alt="OTP Verification"
        class="verification-image"
      />
      <h1>OTP Verification</h1>
      <p>Enter the OTP<strong></strong></p>
      <div class="otp-inputs">
        <v-otp-input
          input-classes="otp-input"
          separator="-"
          inputType="numeric"
          :num-inputs="4"
          :value="otpValue"
          :should-auto-focus="true"
          :should-focus-order="true"
          @on-complete="handleOnComplete"
        />
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
import VOtpInput from "vue3-otp-input";
// import "vue3-otp-input/dist/style.css"; // Import OTP Input styles

const otpValue = ref("");

const handleOnComplete = (value) => {
  console.log("OTP completed: ", value);
  // Handle OTP completion logic here
};

const resendOTP = () => {
  console.log("OTP resent");
  // Handle resend OTP logic here
};

const verifyOTP = () => {
  console.log("Entered OTP: ", otpValue.value);
  // Handle OTP verification logic here
};
</script>

<style scoped>
.otp-verification {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form-container {
  padding: 40px;
  text-align: center;
  width: 100%;
  max-width: 400px;
}

.verification-image {
  width: 157px;
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
  margin-bottom: 20px;
}

:deep(.otp-input-container) {
  display: flex;
  justify-content: space-between;
}

:deep(.otp-input-container span) {
  display: none;
}

:deep(.otp-input) {
  width: 50px;
  height: 50px;
  font-size: 24px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
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
