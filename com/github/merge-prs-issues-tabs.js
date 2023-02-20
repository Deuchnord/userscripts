// ==UserScript==
// @name          Merge issues and PR tabs
// @description   Merge the issues and PRs tabs of the repositories in a single one
// @author        Deuchnord
// @version       1.0.1
// @namespace     https://deuchnord.fr/userscipt#github.com/merge-prs-issues-tabs
// @match         https://github.com/*/*
// @icon          https://github.githubassets.com/favicons/favicon.svg
// @license       AGPL-3.0
// @grant         none
// ==/UserScript==

(function () {

    let sumIssPrs = null;
  
    setInterval(function () {
  
      let issuesTab = document.getElementById("issues-tab");
      let prsTab = document.getElementById("pull-requests-tab");
  
      let nIssues = Number(issuesTab.children[2].innerText);
      let nPrs = Number(prsTab.children[2].innerText);
  
      console.log(nIssues, nPrs);
  
      if (sumIssPrs == nIssues) {
        return;
      }
  
      sumIssPrs = nIssues + nPrs;
  
      let href = new URL(issuesTab.href);
  
      issuesTab.href = `${href.pathname}?q=is:open`;
      issuesTab.children[1].innerText = "Issues & pull requests";
      issuesTab.children[2].innerText = nIssues + nPrs;
  
      prsTab.style.display = "none";
  
      issuesTab.children[2].innerText = sumIssPrs;
  
    }, 250);
  
})();
  