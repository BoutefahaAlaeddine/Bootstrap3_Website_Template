# Alilo Coding — Bootstrap 3 Website Template


<img width="1905" height="903" alt="1" src="https://github.com/user-attachments/assets/e083ca1c-bea4-4970-bdf0-994a49bfdbca" />

> A clean, fully responsive multi-page website template built with **Bootstrap 3**, featuring a live color theme switcher, smooth scroll animations, and a rich set of ready-to-use UI sections.

---

## ✨ Features

- **Responsive Design** — Mobile-first layout that adapts to all screen sizes
- **4 Color Themes** — Switch between Red, Purple, Blue, and Yellow themes on the fly
- **Image Carousel** — Auto-sliding hero banner with caption support
- **WOW.js Animations** — Scroll-triggered entrance animations powered by Animate.css
- **Smooth Scrolling** — Enhanced scroll experience via jQuery NiceScroll
- **Testimonials Slider** — Client reviews carousel with avatar thumbnails
- **Pricing Table** — 4-tier pricing cards (Hosting, VPS, Dedicated, Cloud)
- **Team Section** — Team member cards with social media links
- **Skills Progress Bars** — Animated, striped Bootstrap progress bars
- **Statistics Counter** — Key metrics display section
- **Newsletter Subscription** — Inline email subscription form
- **Contact Form** — Full contact form with name, email, phone, and message fields
- **Clients Logos** — Partner/client logo strip
- **Loading Overlay** — Smooth page loader on entry
- **Scroll to Top** — Fixed floating button that appears on scroll
- **Glyphicons + Font Awesome** — Two icon packs included out of the box

---

## 🗂️ Project Structure

```
Bootstrap_3/
├── index.html              # Main landing page
├── about.html              # About page
├── faq.html                # FAQ page
│
├── css/
│   ├── bootstrap.css       # Bootstrap 3 core styles
│   ├── bootstrap_left.css  # Alternative left-nav layout (commented out)
│   ├── main.css            # Custom component styles
│   ├── media.css           # Responsive / media query overrides
│   ├── hover.css           # Hover.css effects (hvr-pop, etc.)
│   ├── animate.css         # Animate.css for WOW.js animations
│   ├── all.min.css         # Font Awesome icons
│   ├── default_theme.css   # Red theme (default)
│   ├── blue_theme.css      # Blue theme
│   ├── purple_theme.css    # Purple theme
│   └── yellow_theme.css    # Yellow theme
│
├── js/
│   ├── jquery-3.6.4.min.js         # jQuery core
│   ├── bootstrap.min.js            # Bootstrap JS components
│   ├── main.js                     # Custom scripts (theme switcher, loader, scroll-top)
│   ├── jquery.nicescroll.min.js    # Smooth scroll plugin
│   ├── html5shiv.js                # IE8/9 HTML5 compatibility
│   └── wow.min.js                  # WOW.js scroll animation trigger
│
├── fonts/
│   └── glyphicons-halflings-regular.*   # Glyphicon font files
│
└── img/
    ├── 1.jpg – 4.jpg               # Hero slider images
    ├── person1.png – person4.png   # Team member avatars
    ├── social/                     # Social media icons
    ├── media/                      # Footer article thumbnails
    └── (client logos)              # Warner Bros, Fox, MTV, MBC, etc.
```

---

## 🚀 Getting Started

No build tools or package managers required — this template runs entirely in the browser.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/Bootstrap_3.git
cd Bootstrap_3
```

### 2. Open in your browser

Simply open `index.html` directly in any modern browser:

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

> **Tip:** For the best experience, serve the files through a local server (e.g. VS Code Live Server extension or Python's built-in server):
> ```bash
> python -m http.server 8080
> ```
> Then visit `http://localhost:8080`

---

## 🎨 Switching Color Themes

Click the **⚙️ gear icon** on the left side of the page to open the theme panel. Four color swatches are available:

| Swatch | Theme File           |
|--------|----------------------|
| 🔴 Red    | `default_theme.css`  |
| 🟣 Purple | `purple_theme.css`   |
| 🔵 Blue   | `blue_theme.css`     |
| 🟡 Yellow | `yellow_theme.css`   |

To set a default theme, change the active `<link>` tag in the `<head>` of each HTML file.

---

## 📄 Pages

| File          | Description                                                       |
|---------------|-------------------------------------------------------------------|
| `index.html`  | Full one-page layout: Hero, Features, Testimonials, Pricing, Team, Stats, Skills, Contact |
| `about.html`  | About the company / team                                          |
| `faq.html`    | Frequently asked questions                                        |

---

## 🛠️ Built With

| Technology | Version | Purpose |
|---|---|---|
| [Bootstrap](https://getbootstrap.com/docs/3.4/) | 3.2.0 | UI framework & grid system |
| [jQuery](https://jquery.com/) | 3.6.4 | DOM manipulation & plugins |
| [WOW.js](https://wowjs.uk/) | — | Scroll-triggered animations |
| [Animate.css](https://animate.style/) | — | CSS animation library |
| [Hover.css](https://ianlunn.github.io/Hover/) | — | Hover effect library |
| [jQuery NiceScroll](https://github.com/inuyaksa/jquery.nicescroll) | — | Custom scrollbar & smooth scroll |
| [Font Awesome](https://fontawesome.com/) | 5.x | Icon library |
| [Glyphicons](https://getbootstrap.com/docs/3.4/components/#glyphicons) | — | Bootstrap icon font |
| [Google Fonts](https://fonts.google.com/specimen/Open+Sans) | — | Open Sans typeface |
| [HTML5Shiv](https://github.com/aFarkas/html5shiv) | — | HTML5 tags support for IE8/9 |

---

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Latest |
| Firefox | ✅ Latest |
| Safari  | ✅ Latest |
| Edge    | ✅ Latest |
| IE 9+   | ✅ (via html5shiv / respond.min.js) |
| IE 8    | ⚠️ Partial (no CSS3 transitions) |

---

## 📝 Customization Tips

- **Brand name:** Search for `Alilo coding` across all HTML files and replace with your own brand.
- **Navbar links:** Edit the `<ul class="nav navbar-nav">` block in each page's `<nav>`.
- **Hero images:** Replace `img/1.jpg` through `img/4.jpg` with your own slider images.
- **Team members:** Update names, descriptions, and `img/person*.png` photos in the `.our-team` section.
- **Pricing:** Edit the `.price_box` blocks in the `price-table` section of `index.html`.
- **Statistics:** Update the counter numbers and labels in the `.statistics` section.
- **Footer copyright:** Find `Copyriht &copy;2023` in `index.html` and update accordingly.

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙋 Author

**Alilo Alaedine**
- GitHub: [@BoutefahaAlaeddine](https://github.com/BoutefahaAlaeddine)

---

> ⭐ If you found this template useful, consider giving it a star on GitHub!
