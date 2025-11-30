rm -f dotviz.browser.js \
  && (cd ../dotviz && npm run build:npm && cp npmDist/dotviz.browser.js ../dotviz-demo/dotviz.browser.js \
  && cp npmDist/dotviz.browser.js.map ../dotviz-demo/dotviz.browser.js.map)
