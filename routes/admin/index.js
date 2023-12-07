const express = require("express");
const router = express.Router();

const subject = require("../../models/subject");

let result = {
    code: 200,
    msg: "ok",
};

//添加题目
router.post("/addSubject", async (req, res) => {
    let addSubject = new subject({ ...req.body });
    try {
        await addSubject.save();
        res.json({ ...result });
    } catch (err) {
        throw err;
    }
});

//获取题目列表
router.get("/getSubjectList", async (req, res) => {
    let { start, limit } = req.query;
    if (start == undefined) {
        start = 0;
    }
    if (limit == undefined) {
        limit = 10;
    }
    let data = await subject.find().skip(Number(start)).limit(Number(limit));
    res.json({ ...result, data });
});

module.exports = router;
