const { Session } = require("inspector");
const { promisify } = require("util");
const { multiplyBy2, multiply } = require("./index");

const session = new Session();
const postSession = promisify(session.post.bind(session));
session.connect();
postSession("Profiler.enable")
  .then(async () => {
    await postSession("Profiler.startPreciseCoverage", {
      callCount: true,
      detailed: true,
    });
    await postSession("Profiler.start");
    multiplyBy2(2);
    multiply(1, 1);
    const result1 = await postSession("Profiler.stop");
    const { result } = await postSession("Profiler.takePreciseCoverage");
    await postSession("Profiler.stopPreciseCoverage");
    await postSession("Profiler.disable");
    console.log(
      result
        .filter((res) => !res.url.includes("/node_modules/"))
        .map((res) => res.functions)
        .flat()
        .filter((f) => f.isBlockCoverage).length
    );
  })
  .catch((err) => {
    console.log(err);
  });
