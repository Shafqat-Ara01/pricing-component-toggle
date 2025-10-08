const toggle = document.querySelector(".toggle");
const pricingBox = document.querySelectorAll(".pricing-box");



toggle.addEventListener("click", () => {

  toggle.classList.toggle("active");
  pricingBox.forEach((box) => {
    const isMonthly = toggle.classList.contains("active");
    const dataset = box.dataset; // Assuming dataset is on each box
    const priceEl = box.querySelector(".price");
  priceEl.classList.add("fade");
setTimeout(() => {
  priceEl.textContent = isMonthly ? dataset.monthlyPrice : dataset.annualPrice;
  priceEl.classList.remove("fade");
}, 300);

  });
});
