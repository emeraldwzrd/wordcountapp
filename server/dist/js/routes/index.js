"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const counters_1 = require("../controllers/counters");
const router = (0, express_1.Router)();
router.post("/countwords", counters_1.countWords);
exports.default = router;
