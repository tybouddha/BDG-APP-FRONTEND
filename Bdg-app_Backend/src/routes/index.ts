var express = require("express");
var router = express.Router();
import { Request, Response } from "express";

/* GET home page. */
router.get("/", function (req: Request, res: Response, next: any) {
  res.render("index", { title: "Express" });
});

module.exports = router;
