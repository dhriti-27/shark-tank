const express = require("express");
const {
  addPitch,
  makeOffer,
  getPitches,
  getSinglePitch,
} = require("../controller/pitch/pitch");
const router = express.Router();

router.post("/", addPitch);
router.post("/:pitchId/makeOffer", makeOffer);
router.get("/", getPitches);
router.get("/:pitchId", getSinglePitch);

module.exports = router;
