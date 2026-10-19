// Edit projects/<project-name>.js for project text, figure groups, and shared paragraphs.
const gallery = document.getElementById('project-gallery');
const contents = document.createElement('ol');
let figureNumber = 0;

// Turn plain web addresses into links without interpreting prose as HTML.
function appendLinkedText(element, text = '') {
  let cursor = 0;
  for (const match of text.matchAll(/https?:\/\/[^\s<>"`]+/g)) {
    let url = match[0].replace(/[.,;:!?]+$/, '');
    while (url.endsWith(')') && (url.match(/\)/g) || []).length >
      (url.match(/\(/g) || []).length) url = url.slice(0, -1);
    element.append(text.slice(cursor, match.index));
    const link = document.createElement('a');
    link.href = url;
    link.textContent = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    element.append(link);
    cursor = match.index + url.length;
  }
  element.append(text.slice(cursor));
}

projects.forEach((project, index) => {
  const item = document.createElement('li');
  const jump = document.createElement('a');
  jump.href = `#${project.id}`;
  jump.textContent = project.title;
  item.append(jump);
  contents.append(item);

  const article = document.createElement('article');
  article.className = 'project';
  article.id = project.id;
  const heading = document.createElement('h3');
  heading.textContent = `${index + 1}. ${project.title}`;
  const description = document.createElement('p');
  appendLinkedText(description, project.overview);
  article.append(heading, description);

  project.figures.forEach(group => {
    const assets = group.images.map(entry => {
      const options = typeof entry === 'string' ? { src: entry } : entry;
      const asset = project.assets.find(asset => asset.src === options.src);
      return asset ? { ...asset, width: options.width } : null;
    })
      .filter(asset => asset && !asset.hidden && /\.(png|jpe?g|webp|mp4)$/i.test(asset.src));
    if (!assets.length) return;
    figureNumber++;
    const figure = document.createElement('figure');
    figure.className = 'combined-figure';
    const row = document.createElement('div');
    row.className = 'subfigures';
    const layout = group.layout || {};
    const positive = value => typeof value === 'number' && Number.isFinite(value) && value > 0;
    const gap = typeof layout.gap === 'number' && Number.isFinite(layout.gap) && layout.gap >= 0 ? layout.gap : 8;
    const imageHeight = positive(layout.imageHeight) ? layout.imageHeight : (assets.length === 1 ? 230 : 190);
    row.style.gap = `${gap}px`;
    if (typeof layout.width === 'string' && /^(\d+(\.\d+)?)(%|px|rem)$/.test(layout.width)) {
      row.style.width = layout.width;
    } else if (positive(layout.width)) {
      row.style.width = `${layout.width}px`;
    }
    const align = ['left', 'center', 'right'].includes(layout.align) ? layout.align : 'center';
    row.style.marginLeft = align === 'left' ? '0' : 'auto';
    row.style.marginRight = align === 'right' ? '0' : 'auto';
    const ratios = new Array(assets.length).fill(1);
    const panels = [];
    const updateSizing = () => {
      const weights = assets.map((asset, i) => positive(asset.width) ? asset.width : ratios[i]);
      panels.forEach((panel, i) => { panel.style.flex = `${weights[i]} 1 0%`; });
      // Respect the height limit without cropping, including unequal manual widths.
      const scale = Math.min(...ratios.map((ratio, i) => ratio / weights[i]));
      const cap = weights.reduce((sum, weight) => sum + weight, 0) * scale * imageHeight + (assets.length - 1) * gap;
      row.style.maxWidth = `min(100%, ${cap}px)`;
    };
    assets.forEach((asset, panelIndex) => {
      const panel = document.createElement('div');
      panel.className = 'subfigure';
      panels.push(panel);
      const link = document.createElement('a');
      link.href = asset.src;
      link.target = '_blank';
      link.rel = 'noopener';
      link.setAttribute('aria-label', `Open full-size image: ${asset.caption} (new tab)`);
      const isVideo = /\.mp4$/i.test(asset.src);
      const image = document.createElement(isVideo ? 'video' : 'img');
      if (isVideo) {
        image.muted = true;
        image.loop = true;
        image.autoplay = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        image.playsInline = true;
        image.controls = true;
        image.preload = 'metadata';
        image.poster = asset.poster || '';
        image.setAttribute('aria-label', asset.caption);
        image.textContent = 'Your browser does not support this video.';
      }
      image.alt = asset.caption;
      image.loading = 'lazy';
      image.decoding = 'async';
      // Allocate width by aspect ratio, so portrait images do not get wide empty cells.
      image.addEventListener(isVideo ? 'loadedmetadata' : 'load', () => {
        ratios[panelIndex] = isVideo ? image.videoWidth / image.videoHeight
          : image.naturalWidth / image.naturalHeight;
        updateSizing();
      });
      image.src = asset.src;
      if (isVideo) {
        panel.append(image);
      } else {
        link.append(image);
        panel.append(link);
      }
      if (assets.length > 1) {
        const label = document.createElement('p');
        label.className = 'subfigure-label';
        label.textContent = `(${String.fromCharCode(97 + panelIndex)}) ${asset.caption}`;
        panel.append(label);
      }
      row.append(panel);
    });
    updateSizing();
    const caption = document.createElement('figcaption');
    appendLinkedText(caption, `Figure ${figureNumber}. ${group.caption}.`);
    figure.append(row, caption);
    article.append(figure);
    // Blank lines in the editable text create separate visible paragraphs.
    (group.paragraph || '').split(/\r?\n\s*\r?\n/).filter(text => text.trim()).forEach(text => {
      const paragraph = document.createElement('p');
      paragraph.className = 'figure-description';
      appendLinkedText(paragraph, text.trim());
      article.append(paragraph);
    });
  });
  gallery.append(article);
});
document.getElementById('project-index').append(contents);
