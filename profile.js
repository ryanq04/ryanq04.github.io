// Profile content is edited in site-config.js.
document.title = `${siteConfig.name} — ${siteConfig.title}`;
document.querySelector('meta[name="description"]').content =
  `${siteConfig.name}'s electrical engineering project portfolio.`;
document.getElementById('site-title').textContent = siteConfig.title;
document.getElementById('site-name').textContent = siteConfig.name;
document.getElementById('site-affiliation').textContent = siteConfig.affiliation;
document.getElementById('footer-name').textContent = siteConfig.name;

const biography = document.getElementById('site-about');
siteConfig.about.split(/\r?\n\s*\r?\n/).filter(text => text.trim()).forEach(text => {
  const paragraph = document.createElement('p');
  paragraph.textContent = text.trim();
  biography.append(paragraph);
});

function webAddress(value) {
  try {
    const url = new URL(value);
    return ['https:', 'http:'].includes(url.protocol) ? url.href : '';
  } catch {
    return '';
  }
}

const github = webAddress(siteConfig.contact.github);
const topGithub = document.getElementById('nav-github');
topGithub.hidden = !github;
if (github) topGithub.querySelector('a').href = github;

const contact = document.getElementById('contact-details');
function contactLink(label, href, text) {
  const paragraph = document.createElement('p');
  const link = document.createElement('a');
  link.href = href;
  link.textContent = text;
  paragraph.append(`${label}: `, link);
  contact.append(paragraph);
}
if (siteConfig.contact.email.trim()) {
  const email = siteConfig.contact.email.trim();
  contactLink('Email', `mailto:${email}`, email);
}
if (github) contactLink('GitHub', github, github.replace(/^https?:\/\//, '').replace(/\/$/, ''));
const linkedin = webAddress(siteConfig.contact.linkedin);
if (linkedin) contactLink('LinkedIn', linkedin, 'linkedin.com/in/ryanqi');

const resume = document.getElementById('resume-details');
const resumeUrl = siteConfig.resume.url.trim();
// Relative files and web links are supported; executable URL schemes are excluded.
if (resumeUrl && (webAddress(resumeUrl) ||
  (!/^[a-z][a-z\d+.-]*:/i.test(resumeUrl) && !resumeUrl.startsWith('//')))) {
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.textContent = siteConfig.resume.label;
  link.target = '_blank';
  link.rel = 'noopener';
  resume.append(link);
  if (siteConfig.resume.preview !== false) {
    const preview = document.createElement('object');
    preview.className = 'resume-preview';
    preview.data = resumeUrl;
    preview.type = 'application/pdf';
    preview.setAttribute('aria-label', `${siteConfig.name}'s resume PDF preview`);
    const fallback = document.createElement('a');
    fallback.href = resumeUrl;
    fallback.textContent = 'Open resume PDF';
    if (siteConfig.resume.previewImage) {
      const image = document.createElement('img');
      image.src = siteConfig.resume.previewImage;
      image.alt = `${siteConfig.name}'s resume, first-page preview`;
      image.loading = 'lazy';
      fallback.replaceChildren(image);
    }
    preview.append(fallback);
    resume.append(preview);
  }
} else {
  resume.textContent = siteConfig.resume.placeholder;
}
