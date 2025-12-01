(function () {
  const DEMO_FONT_DOT = `digraph FontDemo {
  rankdir = TB;         
  bgcolor = "white";

  graph [
    fontname = "Inter",
    fontsize = 18,
    labelloc = "t",
    label = "Three fonts & Inter styles"
  ];

  node [
    shape     = box,
    style     = "rounded,filled",
    fillcolor = "white",
    margin    = "0.3,0.2"
  ];

  Title [label = <
    <FONT FACE="Bungee" POINT-SIZE="26">FONT DEMO</FONT>
  >];

  InterStyles [label = <
    <TABLE BORDER="0" CELLBORDER="0" CELLPADDING="2">
      <TR>
        <TD>
          <FONT FACE="Inter" POINT-SIZE="16">
            Inter regular
          </FONT>
        </TD>
      </TR>
      <TR>
        <TD>
          <FONT FACE="Inter" POINT-SIZE="16">
            <B>Inter bold</B>
          </FONT>
        </TD>
      </TR>
      <TR>
        <TD>
          <FONT FACE="Inter" POINT-SIZE="16">
            <I>Inter italic</I>
          </FONT>
        </TD>
      </TR>
    </TABLE>
  >];

  CaveatNote [
    shape = note,
    label = <
      <FONT FACE="Caveat" POINT-SIZE="20">
        Handwritten<br/>annotation
      </FONT>
    >
  ];

  Title       -> InterStyles;
  InterStyles -> CaveatNote;
}
`;

  const DEMO_JSON = `{
  "name": "example",
  "nodeAttributes": {
    "shape": "circle",
    "fontname": "Bungee"
  },
  "nodes": [
    { "name": "A" },
    { "name": "B" },
    { "name": "C" }
  ],
  "edges": [
    { "tail": "A", "head": "B" },
    { "tail": "B", "head": "C" }
  ]
}
`;

  const DEMO_KENNEDY_DOT = `/*
Note: All images in the file is found at

http://www.graphviz.org/Gallery/directed/images/

-----------

from Kaarle Kaila:


I have implemented Genealogic descendant and ancestor graphs using Graphviz in FinFamily. I have made som description on how to use it with FinFamily at FinFamily wiki-pages at

http://www.finfamily.fi/index.php/Handbook

I attach a descendant graph from Joseph Patrick Kennedy and an ancestor graph from Caroline Bouvier Kennedy as samples from FinFamily. The file georg.jpg is a descendant graph w/o pictures from an imaginary person Georg af Charlow (who has some common attributes with my father) from my testdatabase like the person Charles Charlow has some resemblance to myself.

If you wish to display the attached pictures or wish me to create another ones then feel free to do so. I wish to thank you for Graphviz that let's me create such nice graphs with FinFamily.

regards
Kaarle Kaila

I have this little kennedy database as a sample gedcom file on the download webpage to give international users a few wellknown persons to play with  if they wish to try out my software. I originally got it from Michael Kay who is among others Editor at http://www.w3.org/TR/xslt20/. I added the pictures and some data myself.

Attached are both the kennedyanc and kennedydesc files as you requested. I made them as zip-files so that they contain both source and destination files. As you email server does not accept zip-files I renamed them to anc.zip ->anc.files and desc.zip to desc.files. Hope these com through your filters.

Graphviz dot program is called from within FinFamily with a command line such as:

dot -Tjpeg kennedyanc.txt -o kennedyanc.jpg

On page http://www.finfamily.fi/index.php/Graphviz is a description on the different colors together with instructions for finFamily users how to create Graphviz reports.

Kaarle Kaila


Colors and forms symbolize following

    * Blue box - man
    * Red ellipse - woman
    * Blue line - Father/Child relation
    * Red line - Mother/Child relation
    * Green line - Spouse relation
    * Orange line - Ancestors (other) children
    * Violet line - Ancestors (other) spouse 





*/

/* ancestor graph from Caroline Bouvier Kennedy */

graph G {
fontname="Helvetica,Arial,sans-serif"
node [fontname="Helvetica,Arial,sans-serif"]
edge [fontname="Helvetica,Arial,sans-serif"]
I5 [shape=ellipse,color=red,style=bold,label="Caroline Bouvier Kennedy\nb. 27.11.1957 New York",image="images/165px-Caroline_Kennedy.jpg",labelloc=b];
I1 [shape=box,color=blue,style=bold,label="John Fitzgerald Kennedy\nb. 29.5.1917 Brookline\nd. 22.11.1963 Dallas",image="images/kennedyface.jpg",labelloc=b];
I6 [shape=box,color=blue,style=bold,label="John Fitzgerald Kennedy\nb. 25.11.1960 Washington\nd. 16.7.1999 over the Atlantic Ocean, near Aquinnah, MA, USA",image="images/180px-JFKJr2.jpg",labelloc=b];
I7 [shape=box,color=blue,style=bold,label="Patrick Bouvier Kennedy\nb. 7.8.1963\nd. 9.8.1963"];
I2 [shape=ellipse,color=red,style=bold,label="Jaqueline Lee Bouvier\nb. 28.7.1929 Southampton\nd. 19.5.1994 New York City",image="images/jacqueline-kennedy-onassis.jpg",labelloc=b];
I8 [shape=box,color=blue,style=bold,label="Joseph Patrick Kennedy\nb. 6.9.1888 East Boston\nd. 16.11.1969 Hyannis Port",image="images/1025901671.jpg",labelloc=b];
I10 [shape=box,color=blue,style=bold,label="Joseph Patrick Kennedy Jr\nb. 1915\nd. 1944"];
I11 [shape=ellipse,color=red,style=bold,label="Rosemary Kennedy\nb. 13.9.1918\nd. 7.1.2005",image="images/rosemary.jpg",labelloc=b];
I12 [shape=ellipse,color=red,style=bold,label="Kathleen Kennedy\nb. 1920\nd. 1948"];
I13 [shape=ellipse,color=red,style=bold,label="Eunice Mary Kennedy\nb. 10.7.1921 Brookline"];
I9 [shape=ellipse,color=red,style=bold,label="Rose Elizabeth Fitzgerald\nb. 22.7.1890 Boston\nd. 22.1.1995 Hyannis Port",image="images/Rose_kennedy.JPG",labelloc=b];
I15 [shape=box,color=blue,style=bold,label="Aristotle Onassis"];
I3 [shape=box,color=blue,style=bold,label="John Vernou Bouvier III\nb. 1891\nd. 1957",image="images/BE037819.jpg",labelloc=b];
I4 [shape=ellipse,color=red,style=bold,label="Janet Norton Lee\nb. 2.10.1877\nd. 3.1.1968",image="images/n48862003257_1275276_1366.jpg",labelloc=b];
 I1 -- I5  [style=bold,color=blue]; 
 I1 -- I6  [style=bold,color=orange]; 
 I2 -- I6  [style=bold,color=orange]; 
 I1 -- I7  [style=bold,color=orange]; 
 I2 -- I7  [style=bold,color=orange]; 
 I1 -- I2  [style=bold,color=violet]; 
 I8 -- I1  [style=bold,color=blue]; 
 I8 -- I10  [style=bold,color=orange]; 
 I9 -- I10  [style=bold,color=orange]; 
 I8 -- I11  [style=bold,color=orange]; 
 I9 -- I11  [style=bold,color=orange]; 
 I8 -- I12  [style=bold,color=orange]; 
 I9 -- I12  [style=bold,color=orange]; 
 I8 -- I13  [style=bold,color=orange]; 
 I9 -- I13  [style=bold,color=orange]; 
 I8 -- I9  [style=bold,color=violet]; 
 I9 -- I1  [style=bold,color=red]; 
 I2 -- I5  [style=bold,color=red]; 
 I2 -- I15  [style=bold,color=violet]; 
 I3 -- I2  [style=bold,color=blue]; 
 I3 -- I4  [style=bold,color=violet]; 
 I4 -- I2  [style=bold,color=red]; 
}
`;

  const inputTypeSelect = document.getElementById("input-type-select");
  const engineSelect = document.getElementById("engine-select");
  const formatSelect = document.getElementById("format-select");
  const previewCheckbox = document.getElementById("preview-checkbox");
  const renderBtn = document.getElementById("render-btn");
  const statusEl = document.getElementById("status");
  const dotInput = document.getElementById("dot-input");
  const inputHint = document.getElementById("input-hint");
  const previewWrapper = document.getElementById("preview-wrapper");
  const previewEl = document.getElementById("preview");
  const outputText = document.getElementById("output-text");
  const copyBtn = document.getElementById("copy-btn");

  const messagesBody = document.getElementById("messages-body");
  const clearMessagesBtn = document.getElementById("clear-messages-btn");

  const imageFormatSelect = document.getElementById("image-format");
  const downloadImageBtn = document.getElementById("download-image-btn");
  const copyImageBtn = document.getElementById("copy-image-btn");
  const imageCanvas = document.getElementById("image-preview");
  const imageCtx = imageCanvas.getContext("2d");

  const fontLoaderInput = document.getElementById("font-loader-input");
  const loadFontsBtn = document.getElementById("load-fonts-btn");

  const basePathInput = document.getElementById("base-path-input");
  const setBasePathBtn = document.getElementById("set-base-path-btn");

  function applyImageBasePathFromInput() {
    const raw = (basePathInput.value || "").trim();
    let normalized = raw;
    if (normalized && !normalized.endsWith("/")) {
      normalized += "/";
    }
    window.dotvizImageBasePath = normalized;
    if (normalized) {
      appendMessage(
        "info",
        `Image base path set to "${normalized}" (window.dotvizImageBasePath)`
      );
      statusEl.textContent = `Image base path: ${normalized}`;
    } else {
      appendMessage(
        "info",
        'Image base path cleared (window.dotvizImageBasePath = "")'
      );
      statusEl.textContent = "Image base path cleared";
    }
  }

  setBasePathBtn.addEventListener("click", applyImageBasePathFromInput);

  const MIME_BY_VALUE = {
    png: "image/png",
    jpeg: "image/jpeg",
    webp: "image/webp",
  };

  const DEFAULT_FONT_LINE = `Bungee|https://fonts.gstatic.com/s/bungee/v11/N0bU2SZBIuF2PU_0DXR1.woff2
Caveat|https://fonts.gstatic.com/s/caveat/v18/WnznHAc5bAfYB2QRah7pcpNvOx-pjfJ9eIWpYQ.woff2
Inter|https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2
`;

  const DEFAULT_DOT = DEMO_FONT_DOT;

  const DEFAULT_JSON = DEMO_JSON;

  async function loadDemo(kind) {
    clearMessages();
    try {
      if (kind === "fonts") {
        inputTypeSelect.value = "dot";
        dotInput.value = DEMO_FONT_DOT;
        fontLoaderInput.value = DEFAULT_FONT_LINE;
        fontsLoadedOnce = false;
        fontsLoadedPromise = null;
        statusEl.textContent = "Fonts demo loaded";
        appendMessage("info", "Fonts demo loaded");
      } else if (kind === "kennedy") {
        inputTypeSelect.value = "dot";
        dotInput.value = DEMO_KENNEDY_DOT;
        basePathInput.value = "https://www.graphviz.org/Gallery/directed/";
        applyImageBasePathFromInput();
        statusEl.textContent = "Image demo loaded";
        appendMessage("info", "Image demo loaded");
      } else if (kind === "json") {
        inputTypeSelect.value = "json";
        dotInput.value = DEMO_JSON;
        statusEl.textContent = "JSON demo loaded";
        appendMessage("info", "JSON demo loaded");
      }
      handleInputTypeChange();
    } catch (e) {
      console.error(e);
      appendMessage(
        "error",
        "Failed to load demo: " + (e && e.message ? e.message : e)
      );
    }
  }

  const demoButtons = document.querySelectorAll(".demo-buttons [data-demo]");
  demoButtons.forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      const kind = el.getAttribute("data-demo");
      if (kind) {
        loadDemo(kind).catch(console.error);
      }
    });
  });

  let viz = null;
  let lastSvgText = "";
  let fontDescriptors = [];

  let fontsLoadedOnce = false;
  let fontsLoadedPromise = null;

  const fontDataUrlCache = new Map();
  const imageDataUrlCache = new Map();

  function isCanvasMimeSupported(mimeType) {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    if (typeof canvas.toDataURL !== "function") {
      return false;
    }
    try {
      const data = canvas.toDataURL(mimeType);
      return data.indexOf(`data:${mimeType}`) === 0;
    } catch {
      return false;
    }
  }

  function pruneUnsupportedImageFormats() {
    if (!imageFormatSelect) return;
    for (const [value, mime] of Object.entries(MIME_BY_VALUE)) {
      if (!isCanvasMimeSupported(mime)) {
        const option = imageFormatSelect.querySelector(
          `option[value="${value}"]`
        );
        if (option) option.remove();
      }
    }
    if (!imageFormatSelect.querySelector("option")) {
      const opt = document.createElement("option");
      opt.value = "png";
      opt.textContent = "PNG";
      imageFormatSelect.appendChild(opt);
    }
  }

  function updatePreviewVisibility() {
    previewWrapper.style.display = previewCheckbox.checked ? "block" : "none";
  }

  function setDefaultInputForType(type) {
    if (type === "dot") {
      dotInput.value = DEFAULT_DOT;
      inputHint.textContent = "DOT mode.";
    } else {
      dotInput.value = DEFAULT_JSON;
      inputHint.textContent = "JSON mode. ";
    }
  }

  function handleInputTypeChange() {
    const type = inputTypeSelect.value;
    const current = dotInput.value.trim();
    if (!current) {
      setDefaultInputForType(type);
    }
  }

  function clearMessages() {
    messagesBody.innerHTML = "";
  }

  function appendMessage(level, text) {
    const line = document.createElement("div");
    line.className = "msg-line " + level;
    line.textContent = `[${level.toUpperCase()}] ${text}`;
    messagesBody.appendChild(line);
    messagesBody.scrollTop = messagesBody.scrollHeight;
  }

  async function initDotviz() {
    try {
      const pkg = window.dotviz;
      if (!pkg) {
        throw new Error(
          'Global "dotviz" is not defined. Check dotviz.browser.js path / UMD config.'
        );
      }
      if (typeof pkg.instance === "function") {
        viz = await pkg.instance();
      } else {
        viz = pkg;
      }
      statusEl.textContent = "Ready";
      renderBtn.disabled = false;
      appendMessage("info", "dotviz loaded");
    } catch (err) {
      console.error(err);
      statusEl.textContent =
        "Error loading dotviz: " + (err && err.message ? err.message : err);
      appendMessage(
        "error",
        "Failed to initialize dotviz: " +
          (err && err.message ? err.message : String(err))
      );
    }
  }

  function parseSvgSize(svgText) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgText, "image/svg+xml");
    const svgEl = doc.documentElement;

    let width = parseFloat(svgEl.getAttribute("width") || "0");
    let height = parseFloat(svgEl.getAttribute("height") || "0");

    if ((!width || !height) && svgEl.hasAttribute("viewBox")) {
      const viewBox = svgEl.getAttribute("viewBox").split(/\s+/).map(Number);
      if (viewBox.length === 4) {
        width = viewBox[2];
        height = viewBox[3];
      }
    }

    if (!width || !height) {
      width = 800;
      height = 600;
    }

    return { width, height };
  }

  function parseFontLine(line) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return null;
    const pipeIndex = trimmed.indexOf("|");
    if (pipeIndex < 0) return null;
    const family = trimmed.slice(0, pipeIndex).trim();
    const url = trimmed.slice(pipeIndex + 1).trim();
    if (!family || !url) return null;
    return { family, url };
  }

  async function ensureFontsLoaded() {
    if (fontsLoadedOnce && fontsLoadedPromise) {
      await fontsLoadedPromise;
      return;
    }

    const text = fontLoaderInput.value || "";
    const lines = text.split(/\r?\n/);
    const descriptors = [];
    for (const line of lines) {
      const desc = parseFontLine(line);
      if (desc) descriptors.push(desc);
    }

    if (!descriptors.length) {
      if (!fontsLoadedOnce) {
        appendMessage(
          "info",
          "No custom fonts configured, using browser default fonts"
        );
      }
      fontsLoadedOnce = true;
      fontsLoadedPromise = Promise.resolve();
      return;
    }

    const existingKeys = new Set(
      fontDescriptors.map((d) => `${d.family}|${d.url}`)
    );

    statusEl.textContent = "Loading fonts…";

    fontsLoadedPromise = (async () => {
      for (const desc of descriptors) {
        try {
          const face = new FontFace(desc.family, `url(${desc.url})`);
          const loaded = await face.load();
          document.fonts.add(loaded);

          const key = `${desc.family}|${desc.url}`;
          if (!existingKeys.has(key)) {
            fontDescriptors.push(desc);
            existingKeys.add(key);
          }

          appendMessage(
            "info",
            `Loaded font "${desc.family}" from ${desc.url}`
          );
        } catch (err) {
          console.error(err);
          appendMessage(
            "error",
            `Failed to load font "${desc.family}" from ${desc.url}: ` +
              (err && err.message ? err.message : err)
          );
        }
      }

      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }

      fontsLoadedOnce = true;
      statusEl.textContent = "Fonts loaded";
    })();

    await fontsLoadedPromise;
  }

  function joinBaseAndPath(base, path) {
    if (!base) return path;
    if (base.endsWith("/")) return base + path.replace(/^\/+/, "");
    return base + (path.startsWith("/") ? path : "/" + path);
  }

  async function blobToDataUrl(blob, fallbackMime) {
    const buf = await blob.arrayBuffer();
    const bytes = new Uint8Array(buf);
    let binary = "";
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    const base64 = btoa(binary);
    const mime = blob.type || fallbackMime;
    return `data:${mime};base64,${base64}`;
  }

  async function renderGraph() {
    if (!viz) return;

    await ensureFontsLoaded();

    const rawInput = dotInput.value;
    const engine = engineSelect.value;
    const textMode = formatSelect.value;
    const inputType = inputTypeSelect.value;

    const rawBaseForImages = (basePathInput.value || "").trim();
    let baseForImages = rawBaseForImages;
    if (baseForImages && !baseForImages.endsWith("/")) {
      baseForImages += "/";
    }
    window.dotvizImageBasePath = baseForImages;

    statusEl.textContent = "Rendering…";
    previewEl.innerHTML = "";
    outputText.value = "";
    lastSvgText = "";
    clearMessages();

    let graphInput;
    if (inputType === "json") {
      try {
        graphInput = JSON.parse(rawInput);
      } catch (err) {
        console.error(err);
        statusEl.textContent = "JSON error";
        appendMessage(
          "error",
          "Invalid JSON: " + (err && err.message ? err.message : err)
        );
        outputText.value =
          err && err.stack ? err.stack : String(err || "JSON error");
        return;
      }
    } else {
      graphInput = rawInput;
    }

    try {
      let svgResult = await viz.render(graphInput, {
        format: "svg",
        engine: engine,
      });

      if (svgResult.unresolved_images && baseForImages) {
        const results = await Promise.all(
          svgResult.unresolved_images.map(async (image_path) => {
            const fullUrl = joinBaseAndPath(baseForImages, image_path);
            try {
              const response = await fetch(fullUrl);
              if (!response.ok) {
                appendMessage(
                  "warn",
                  `Image "${image_path}" not found at ${fullUrl} (HTTP ${response.status})`
                );
                return null;
              }
              const blob = await response.blob();

              let width = 0;
              let height = 0;

              if (typeof createImageBitmap === "function") {
                try {
                  const bitmap = await createImageBitmap(blob);
                  width = bitmap.width;
                  height = bitmap.height;
                  if (typeof bitmap.close === "function") {
                    bitmap.close();
                  }
                } catch (e) {
                  console.error("createImageBitmap failed for", fullUrl, e);
                  appendMessage(
                    "warn",
                    `Failed to decode image "${image_path}" from ${fullUrl}: ` +
                      (e && e.message ? e.message : e)
                  );
                }
              }

              try {
                const dataUrl = await blobToDataUrl(blob, "image/png");
                imageDataUrlCache.set(fullUrl, dataUrl);
              } catch (e) {
                console.error("Failed to build data URL for", fullUrl, e);
              }

              if (!width || !height) {
                return null;
              }

              return [image_path, { width, height }];
            } catch (e) {
              console.error("Failed to fetch/measure image", fullUrl, e);
              appendMessage(
                "warn",
                `Failed to resolve image "${image_path}" from ${fullUrl}`
              );
              return null;
            }
          })
        );

        const filtered = results.filter((entry) => entry && entry[1]);
        if (filtered.length > 0) {
          const images = Object.fromEntries(filtered);
          svgResult = await viz.render(graphInput, {
            format: "svg",
            engine: engine,
            images,
            svgBasePath: baseForImages,
          });
        }
      }

      if (svgResult.errors && Array.isArray(svgResult.errors)) {
        for (const e of svgResult.errors) {
          const level =
            e && (e.severity || e.level)
              ? String(e.severity || e.level)
              : "warn";
          const msg = e && e.message ? e.message : JSON.stringify(e);
          appendMessage(level.toLowerCase(), msg);
        }
      }

      if (svgResult.status && svgResult.status !== "success") {
        throw new Error("dotviz status: " + svgResult.status);
      }

      const svgText = svgResult.output || String(svgResult);
      lastSvgText = svgText;

      const svgStart = svgText.indexOf("<svg");
      const svgForDom = svgStart >= 0 ? svgText.slice(svgStart) : svgText;

      updatePreviewVisibility();
      if (previewCheckbox.checked) {
        previewEl.innerHTML = svgForDom;
      }

      let textOutput = "";
      if (textMode === "svg") {
        textOutput = svgText;
      } else if (textMode === "dot") {
        const dotResult = await viz.render(graphInput, {
          format: "dot",
          engine: engine,
        });

        if (dotResult.errors && Array.isArray(dotResult.errors)) {
          for (const e of dotResult.errors) {
            const level =
              e && (e.severity || e.level)
                ? String(e.severity || e.level)
                : "warn";
            const msg = e && e.message ? e.message : JSON.stringify(e);
            appendMessage(level.toLowerCase(), msg);
          }
        }

        if (dotResult.status && dotResult.status !== "success") {
          throw new Error("dotviz status (DOT): " + dotResult.status);
        }

        textOutput = dotResult.output || String(dotResult);
      }

      outputText.value = textOutput;
      statusEl.textContent =
        "Rendered " +
        (inputType === "json" ? "JSON" : "DOT") +
        ' with engine="' +
        engine +
        '"';
      appendMessage(
        "info",
        "Render completed (" +
          (inputType === "json" ? "JSON" : "DOT") +
          ", engine=" +
          engine +
          ")"
      );

      await generateImagePreview();
    } catch (err) {
      console.error(err);
      statusEl.textContent = "Render failed";
      appendMessage(
        "error",
        "Render failed: " + (err && err.message ? err.message : err)
      );
      outputText.value =
        err && err.stack ? err.stack : String(err || "Unknown error");
    }
  }

  async function copyTextOutput() {
    const text = outputText.value;
    if (!text) {
      statusEl.textContent = "Nothing to copy";
      appendMessage("warn", "Nothing to copy from text output");
      return;
    }

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        outputText.focus();
        outputText.select();
        document.execCommand("copy");
      }
      statusEl.textContent = "Text copied";
      appendMessage("info", "Text output copied to clipboard");
    } catch (err) {
      console.error(err);
      statusEl.textContent = "Copy failed";
      appendMessage(
        "error",
        "Copy text failed: " + (err && err.message ? err.message : err)
      );
    }
  }

  function getBaseSvgForImage() {
    const svgInPreview = previewEl.querySelector("svg");
    if (svgInPreview) {
      try {
        return new XMLSerializer().serializeToString(svgInPreview);
      } catch (e) {
        console.error("Failed to serialize preview SVG", e);
      }
    }

    if (formatSelect.value === "svg") {
      const edited = outputText.value.trim();
      if (edited) return edited;
    }

    return lastSvgText;
  }

  async function fontDescToDataUrl(desc) {
    if (fontDataUrlCache.has(desc.url)) {
      return fontDataUrlCache.get(desc.url);
    }

    const res = await fetch(desc.url, { mode: "cors" });
    if (!res.ok) {
      throw new Error(`Failed to fetch font ${desc.url}: ${res.status}`);
    }
    const blob = await res.blob();
    const dataUrl = await blobToDataUrl(blob, "font/woff2");
    fontDataUrlCache.set(desc.url, dataUrl);
    return dataUrl;
  }

  async function inlineImagesAsDataUrls(svgText) {
    if (typeof DOMParser === "undefined" || !svgText) return svgText;

    const parser = new DOMParser();
    const doc = parser.parseFromString(svgText, "image/svg+xml");
    const svgEl = doc.documentElement;
    if (!svgEl || svgEl.nodeName.toLowerCase() !== "svg") {
      return svgText;
    }

    if (svgEl.getAttribute("data-dotviz-images-inlined") === "1") {
      return svgText;
    }

    const images = svgEl.querySelectorAll("image");
    if (!images.length) return svgText;

    const dotvizBase =
      typeof window.dotvizImageBasePath === "string"
        ? window.dotvizImageBasePath
        : "";
    const xmlBase =
      svgEl.getAttribute("xml:base") || svgEl.getAttribute("base") || "";

    async function urlToDataUrl(url) {
      if (imageDataUrlCache.has(url)) {
        return imageDataUrlCache.get(url);
      }
      try {
        const res = await fetch(url);
        if (!res.ok) {
          appendMessage(
            "warn",
            `Failed to inline image ${url}: HTTP ${res.status}`
          );
          return null;
        }
        const blob = await res.blob();
        const dataUrl = await blobToDataUrl(blob, "image/png");
        imageDataUrlCache.set(url, dataUrl);
        return dataUrl;
      } catch (e) {
        console.error("Fetch failed for image", url, e);
        appendMessage("warn", `Failed to inline image ${url}: ${e}`);
        return null;
      }
    }

    const tasks = [];

    images.forEach((img) => {
      let href =
        img.getAttribute("href") ||
        img.getAttributeNS("http://www.w3.org/1999/xlink", "href") ||
        img.getAttribute("xlink:href");

      if (!href) return;
      if (/^data:/i.test(href)) return;

      let url = null;

      try {
        if (/^https?:/i.test(href)) {
          url = href;
        } else if (dotvizBase) {
          url = joinBaseAndPath(dotvizBase, href);
        } else if (xmlBase) {
          url = new URL(href, xmlBase).href;
        } else {
          url = new URL(href, window.location.href).href;
        }
      } catch (e) {
        console.error("Failed to resolve image href", href, e);
        return;
      }

      tasks.push(
        (async () => {
          const dataUrl = await urlToDataUrl(url);
          if (!dataUrl) return;

          img.setAttribute("href", dataUrl);
          img.removeAttribute("xlink:href");
          try {
            img.removeAttributeNS("http://www.w3.org/1999/xlink", "href");
          } catch {}
        })()
      );
    });

    if (tasks.length) {
      await Promise.all(tasks);
    }

    svgEl.setAttribute("data-dotviz-images-inlined", "1");
    const serializer = new XMLSerializer();
    return serializer.serializeToString(doc);
  }

  async function buildSvgForImage(baseSvg) {
    let svgWithFonts = baseSvg;

    if (fontDescriptors.length) {
      const svgIndex = svgWithFonts.indexOf("<svg");
      if (
        svgIndex >= 0 &&
        !svgWithFonts.includes('data-dotviz-font-faces="1"')
      ) {
        const rulesParts = [];
        for (const desc of fontDescriptors) {
          try {
            const family = desc.family.replace(/'/g, "\\'");
            const dataUrl = await fontDescToDataUrl(desc);
            rulesParts.push(
              `@font-face { font-family: '${family}'; src: url('${dataUrl}') format('woff2'); }`
            );
          } catch (err) {
            console.error(err);
            appendMessage(
              "error",
              `Failed to embed font "${desc.family}" from ${desc.url}: ` +
                (err && err.message ? err.message : err)
            );
          }
        }

        if (rulesParts.length) {
          const rules = rulesParts.join("\n");
          const styleBlock =
            `<defs data-dotviz-font-faces="1"><style type="text/css"><![CDATA[\n` +
            rules +
            `\n]]></style></defs>`;

          const tagEnd = svgWithFonts.indexOf(">", svgIndex);
          if (tagEnd >= 0) {
            svgWithFonts =
              svgWithFonts.slice(0, tagEnd + 1) +
              styleBlock +
              svgWithFonts.slice(tagEnd + 1);
          }
        }
      }
    }

    const svgWithImages = await inlineImagesAsDataUrls(svgWithFonts);
    return svgWithImages;
  }

  async function renderSvgToCanvas(format, callback) {
    const baseSvg = getBaseSvgForImage();
    if (!baseSvg) {
      statusEl.textContent = "Nothing to export";
      appendMessage("warn", "Nothing to export, render a graph first");
      return;
    }

    await ensureFontsLoaded();

    const svgText = await buildSvgForImage(baseSvg);

    try {
      const size = parseSvgSize(svgText);
      const scale = 1;

      imageCanvas.width = size.width * scale;
      imageCanvas.height = size.height * scale;

      imageCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
      imageCtx.fillStyle = "#ffffff";
      imageCtx.fillRect(0, 0, imageCanvas.width, imageCanvas.height);

      const img = new Image();
      const svgUrl =
        "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgText);

      img.onload = function () {
        imageCtx.drawImage(img, 0, 0, imageCanvas.width, imageCanvas.height);
        if (callback) {
          callback(imageCanvas);
        }
      };

      img.onerror = function (e) {
        console.error(e);
        statusEl.textContent = "Image render failed";
        appendMessage("error", "Image rendering failed");
      };

      img.src = svgUrl;
    } catch (err) {
      console.error(err);
      statusEl.textContent = "Image render failed";
      appendMessage(
        "error",
        "Image rendering failed: " + (err && err.message ? err.message : err)
      );
    }
  }

  async function generateImagePreview() {
    const format = imageFormatSelect.value || "png";
    await renderSvgToCanvas(format, function () {
      statusEl.textContent = "Image preview updated";
    });
  }

  async function downloadImage() {
    const value = imageFormatSelect.value || "png";
    const mime = MIME_BY_VALUE[value] || "image/png";
    const filename = "graph." + value;

    await renderSvgToCanvas(value, function (canvas) {
      canvas.toBlob(
        function (blob) {
          if (!blob) {
            statusEl.textContent = "Image export failed";
            appendMessage("error", "Image export failed (blob is null)");
            return;
          }
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(url);
          statusEl.textContent = "Image downloaded";
          appendMessage(
            "info",
            "Image downloaded as " + filename + " (" + mime + ")"
          );
        },
        mime,
        0.92
      );
    });
  }

  async function copyImage() {
    const mime = "image/png";

    if (
      !navigator.clipboard ||
      !navigator.clipboard.write ||
      typeof window.ClipboardItem === "undefined"
    ) {
      statusEl.textContent = "Clipboard not supported";
      appendMessage("warn", "Image clipboard is not supported in this browser");
      return;
    }

    await renderSvgToCanvas("png", function (canvas) {
      canvas.toBlob(
        async function (blob) {
          if (!blob) {
            statusEl.textContent = "Image export failed";
            appendMessage("error", "Image export failed (blob is null)");
            return;
          }
          try {
            const item = new ClipboardItem({ [mime]: blob });
            await navigator.clipboard.write([item]);
            statusEl.textContent = "Image copied";
            appendMessage("info", "Image copied to clipboard (PNG)");
          } catch (err) {
            console.error(err);
            statusEl.textContent = "Copy failed";
            appendMessage(
              "error",
              "Copy image failed: " + (err && err.message ? err.message : err)
            );
          }
        },
        mime,
        0.92
      );
    });
  }

  async function loadFonts() {
    fontsLoadedOnce = false;
    fontsLoadedPromise = null;
    fontDataUrlCache.clear();
    try {
      await ensureFontsLoaded();
    } catch (err) {
      console.error(err);
      appendMessage(
        "error",
        "Font load failed: " + (err && err.message ? err.message : err)
      );
    }
  }

  renderBtn.addEventListener("click", () => {
    renderGraph().catch(console.error);
  });
  copyBtn.addEventListener("click", () => {
    copyTextOutput().catch(console.error);
  });
  downloadImageBtn.addEventListener("click", () => {
    downloadImage().catch(console.error);
  });
  copyImageBtn.addEventListener("click", () => {
    copyImage().catch(console.error);
  });
  clearMessagesBtn.addEventListener("click", clearMessages);
  loadFontsBtn.addEventListener("click", () => {
    loadFonts().catch(console.error);
  });

  dotInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      renderGraph().catch(console.error);
    }
  });

  previewCheckbox.addEventListener("change", updatePreviewVisibility);
  inputTypeSelect.addEventListener("change", handleInputTypeChange);
  imageFormatSelect.addEventListener("change", () => {
    generateImagePreview().catch(console.error);
  });

  updatePreviewVisibility();
  pruneUnsupportedImageFormats();
  setDefaultInputForType(inputTypeSelect.value);

  if (!fontLoaderInput.value.trim()) {
    fontLoaderInput.value = DEFAULT_FONT_LINE;
  }

  initDotviz().catch(console.error);
})();
