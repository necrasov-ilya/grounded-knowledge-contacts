const contacts = [
  {
    name: "Некрасов Илья",
    avatar: "nekrasov.jpg",
    links: [
      { type: "telegram", icon: "telegram.png", label: "Telegram", value: "@NKSV_ILYA", href: "https://t.me/NKSV_ILYA" },
      { type: "email", icon: "mail.png", label: "Почта", value: "ilya.e.nekrasov@yandex.com", href: "mailto:ilya.e.nekrasov@yandex.com" },
      // MAX profile links are copied from the app and look like https://max.ru/u/...
      { type: "messenger", icon: "max.png", label: "Макс", value: "MAX", href: "https://max.ru/u/f9LHodD0cOLo_WoesEmr9k6pOHwqAUpYrfD3O1uSM3-xWRLFfpbyvDQQpNs" }
    ]
  },
  {
    name: "Таскаева Арина",
    avatar: "taskaeva.jpg",
    links: [
      { type: "telegram", icon: "telegram.png", label: "Telegram", value: "@wlfkvnw", href: "https://t.me/wlfkvnw" },
      { type: "email", icon: "mail.png", label: "Почта", value: "taskaevarina@gmail.com", href: "mailto:taskaevarina@gmail.com" }
    ]
  }
];

const grid = document.getElementById("contactsGrid");

contacts.forEach(person => {
  const card = document.createElement("div");
  card.className = "contact-card";

  const linksHTML = person.links.map(link => {
    const iconContent = link.icon.endsWith(".png")
      ? `<img src="${link.icon}" class="link-icon-img" alt="${link.label}">`
      : `<span class="link-icon ${link.type}">${link.icon}</span>`;

    const hasHref = Boolean(link.href);
    const tagName = hasHref ? "a" : "span";
    const hrefAttr = hasHref ? ` href="${link.href}" target="_blank" rel="noopener"` : "";
    const disabledClass = hasHref ? "" : " contact-link-disabled";

    return `
      <${tagName} class="contact-link${disabledClass}"${hrefAttr}>
        ${iconContent}
        <span class="link-text">
          <span class="link-label">${link.label}</span>
          <span class="link-value">${link.value}</span>
        </span>
      </${tagName}>
    `;
  }).join("");

  card.innerHTML = `
    <img class="contact-avatar" src="${person.avatar}" alt="${person.name}">
    <div class="contact-name">${person.name}</div>
    <div class="contact-links">${linksHTML}</div>
  `;

  grid.appendChild(card);
});
