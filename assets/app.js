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
