// orbit — waitlist chrome + waitlist behavior.
import {
  drawablyBadge,
  drawablyButton,
  drawablyCard,
} from "./drawably/index.js";

function ink(root = document) {
  const scope = root instanceof Element ? root : document;
  scope.querySelectorAll?.("button:not(.drawn)").forEach((el) => {
    el.classList.add("drawn");
    try { drawablyButton(el, { variant: el.dataset.variant ?? "outline" }); } catch { /* vendor missing */ }
  });
  scope.querySelectorAll?.(".dcard:not(.drawn)").forEach((el) => {
    el.classList.add("drawn");
    try { drawablyCard(el); } catch { /* vendor missing */ }
  });
  scope.querySelectorAll?.(".dbadge:not(.drawn)").forEach((el) => {
    el.classList.add("drawn");
    try { drawablyBadge(el, { variant: el.dataset.variant ?? "outline" }); } catch { /* vendor missing */ }
  });
}

function wireWaitlist() {
  const form = document.querySelector("#waitlist-form");
  if (!form) return;
  const msg = document.querySelector("#waitlist-msg");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = new FormData(form).get("email") ?? "you";
    const n = 4096 + Math.floor(Math.random() * 512);
    if (msg) {
      msg.hidden = false;
      msg.className = "msg ok";
      msg.textContent = `Noted, ${email}. You are #${n} in line.`;
    }
    form.reset();
  });
}
