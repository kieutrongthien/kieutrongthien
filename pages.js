const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://github.com/kieutrongthien/kieutrongthien.git";

ghpages.publish(
  pathname,
  {
    branch: "portfolio",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
