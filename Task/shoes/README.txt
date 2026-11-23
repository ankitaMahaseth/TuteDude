## Thala 7 | Premium Sports Shoes

A static, front-end-only e-commerce demo for a sports shoe brand ("Seven by MS Dhoni"). It covers the main shopping flow: **Home → Product → Cart → Checkout**. Built with plain HTML and CSS, with no frameworks and no build step.

> **Status:** UI prototype. Pages are linked and styled, but there is no JavaScript yet, so cart, coupon and payment interactions are not functional.

---

## Pages

| File | Page | Purpose |
|------|------|---------|
| `index.html` | Home | Hero banner with brand tagline, "Shop Now" button, and a stats bar (reviews, customers, quality, rating) |
| `product_display.html` | Product detail | Breadcrumb, image gallery with thumbnails, description, price, quantity selector, "Add to Cart" |
| `shopping_cart.html` | Shopping cart | Product list with quantity and remove controls, coupon field, totals summary, "Pay Now" |
| `payment.html` | Checkout | Contact details, payment method tabs (Card / Crypto / Bank), card form, order summary |

All pages share one stylesheet and the same navbar (logo, nav links with nested dropdown, search box, cart badge, profile icon).

## Project structure

```
project-root/
├── index.html
├── product_display.html
├── shopping_cart.html
├── payment.html
├── css/
│   └── style.css
└── images/
    ├── shoes.png        # hero and product image
    └── profile.png      # navbar profile avatar
```

## Getting started

No installation is needed.

1. Place the files in the structure above.
2. Open `index.html` in a browser, or serve the folder locally:

   ```bash
   # Python
   python -m http.server 8000

   # or Node
   npx serve .
   ```
3. Visit `http://localhost:8000`.

**External dependency:** [Font Awesome 6.5.0](https://fontawesome.com/) is loaded from the cdnjs CDN for icons, so an internet connection is required for icons to appear.

## User flow

```
index.html ──Shop Now──▶ product_display.html ──Add to Cart──▶ shopping_cart.html ──Pay Now──▶ payment.html
```

The cart icon in the navbar links to `shopping_cart.html` from every page.

## Stylesheet overview (`css/style.css`)

One file, organised by page section:

1. **Base / reset** and CSS variables (`--ink`, `--blue`, `--orange`)
2. **Home**: `.main-container`, `.hero-section`, navbar, dropdowns, hero text, shoe image, stats bar
3. **Product display**: breadcrumb, gallery, thumbnails, details, price, cart actions
4. **Shopping cart**: scoped under `.shopping-section`
5. **Checkout**: scoped under `.checkout`

Responsive breakpoints: **900px** (tablet), **600px** (mobile), **380px** (small mobile). Cart and checkout also use **680px/700px** breakpoints.

## Known issues and to-do

### Bugs to fix first
- [ ] `.checkout.contact`, `.checkout.method .symbol`, `.checkout.method.more` are missing a space, so they never match. Use `.checkout .contact`, etc.
- [ ] `.checkout input, select` leaks styles to every `<select>` site-wide. Scope it with `.checkout select`.
- [ ] Cart mobile rules lose to `.shopping-section …` selectors, so the cart doesn't stack on small screens. Scope the media-query rules the same way (see the cart responsive fix).
- [ ] `<a>` nested inside `<button class="pay">` is invalid HTML. On the checkout page it also links to itself. Use `<a class="pay">` on the cart page and a real submit button on checkout.
- [ ] Prices don't add up (Sub Total + Taxes ≠ Total; product page shows ₹1,334 while the cart shows ₹4,999).

### Missing functionality
- [ ] JavaScript for add to cart, quantity +/−, remove item, coupon codes, live totals (use the existing `data-price` attributes), cart badge count, thumbnail switching and payment-method tabs
- [ ] Real payment integration (e.g. Razorpay Checkout or hosted fields). **Never send raw card data to your own server.** Remove the "SECURE / SSL ENCRYPTED" badges until this is in place.
- [ ] Mobile navigation (hamburger menu). Nav links are hidden below 600px with no replacement.

### Accessibility and quality
- [ ] Fix colour contrast (white on orange, light grey on white)
- [ ] Add `aria-label` to quantity selects, make thumbnails real `<button>`s, give the dropdown trigger `aria-expanded`
- [ ] Use a proper heading hierarchy (`<h1>` for page title on each page)
- [ ] Load the Poppins font (it is referenced but never imported)
- [ ] Replace placeholder text: "John Doe" in the email and card fields, Lorem ipsum in the hero
- [ ] Replace `href="#"` and `href=""` links with real destinations
- [ ] Add `<main>` to pages other than `index.html`

### Maintainability
- [ ] Reuse one navbar instead of copy-pasting it into four files (HTML include or a static site generator)
- [ ] Replace hard-coded colours with the CSS variables
- [ ] Remove dead rules (`.page`, `.topbar`, `.nav-tools`, `.search`, `.floating-badge`) and duplicate definitions
- [ ] Split the stylesheet into `base.css`, `home.css`, `product.css`, `cart.css`, `checkout.css`

## Browser support

Any modern browser (Chrome, Edge, Firefox, Safari). Uses CSS Grid, Flexbox, `clamp()` and `aspect-ratio`.

## Credits

- Icons: [Font Awesome Free](https://fontawesome.com/)
- Brand and product names are used for demonstration purposes only.
