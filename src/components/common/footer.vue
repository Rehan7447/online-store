<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footerDivider">
        <div class="footer-section flex-small">
          <h2>I-Shoppin</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer.
          </p>
        </div>
        <div class="footer-section flex-small">
          <h2>Follow Us</h2>
          <p>lorewe lyhgekgoikiko sgwnjsqg htrjtyjktudlkj;ikieg</p>
          <div class="social-icons">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
          </div>
        </div>
        <div class="footer-section">
          <h2>Download Now</h2>
          <div class="download-icons">
            <img src="../../assets/footer/gplay.png" alt="Google Play" />
            <img src="../../assets/footer/hGallery.png" alt="AppGallery" />
            <img src="../../assets/footer/aStore.png" alt="App Store" />
          </div>
        </div>
      </div>
      <div class="footerDivider">
        <div class="footer-section flex-small">
          <h2>Information</h2>
          <ul>
            <li>About Us</li>
            <li>Usage Policy</li>
            <li>Warranty Policy</li>
          </ul>
        </div>
        <div class="footer-section flex-small">
          <h2>Contact Us</h2>
          <address>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</address>
        </div>
        <div class="footer-section">
          <h2>Sell your product now</h2>
          <el-button type="primary" class="sell-button"
            >Sell on I-Shoppin</el-button
          >
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2022 I-Shoppin</p>
      <div class="payment-icons">
        <img src="../../assets/footer/westernunion.svg" alt="wester union" />
        <img src="../../assets/footer/visa.svg" alt="Visa" />
        <img src="../../assets/footer/mastercard.svg" alt="MasterCard" />
        <img src="../../assets/footer/Paypal.svg" alt="PayPal" />
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer {
  background: rgba(35, 58, 114, 1);
  color: white;
  padding: 40px 130px;
  text-align: left;
}

.footer-content {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
}

.footerDivider {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  gap: 10%;
}

.footer-section {
  flex: 3;
  min-width: 200px;
  margin-bottom: 20px;
}

.flex-small {
  flex: 1;
}

.footer-section h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.footer-section p,
.footer-section address {
  font-size: 14px;
  line-height: 1.5;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  font-size: 14px;
  margin-bottom: 10px;
}

.social-icons i {
  font-size: 20px;
  margin-right: 10px;
}

.download-icons img,
.payment-icons img {
  height: 40px;
  margin-right: 10px;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #4e5a7b;
  padding-top: 20px;
}

.footer-bottom p {
  margin: 0;
  font-size: 14px;
}

.sell-button {
  background: linear-gradient(132.25deg, #faa236 0%, #ffaf4c 88.96%);
  border: 2px solid rgba(250, 162, 54, 1);
  color: white;
  width: 228px;
  height: 47px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: center;
}

.sell-button:hover {
  background: linear-gradient(132.25deg, #ffaf4c 0%, #faa236 88.96%);
  color: white;
}
</style>
