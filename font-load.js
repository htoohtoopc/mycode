(function() {
  const fontStyle = document.createElement("style");
  fontStyle.type = "text/css";
  fontStyle.innerHTML = `
    @font-face {
      font-family: 'Myanmar Angoun';
      src: url('https://htoohtoopc.github.io/mycode/MyanmarAngoun.woff2') format('woff2'),
           url('https://htoohtoopc.github.io/mycode//MyanmarAngoun.woff') format('woff'),
           url('https://htoohtoopc.github.io/mycode/MyanmarAngoun.ttf') format('truetype');
      font-display: swap;
    }

    html, body, * {
      font-family: 'Myanmar Angoun', sans-serif !important;
    }

    @media screen and (max-width: 768px) {
      h1, h2, h3, .post-title, .entry-title, 
      .home .post-title, 
      .post-body, .entry-content, .post-content {
        font-size: 13px !important;
        line-height: 1.5 !important;
      }
    }
  `;
  document.head.appendChild(fontStyle);
})();
