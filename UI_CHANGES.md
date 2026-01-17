# Simple UI Changes Checklist

This document lists straightforward UI modifications that can be easily made to customize the event landing page. Each change is simple and can be completed quickly.

---

## 1. Change Footer Background Color

**What to change:** Footer background color

**Current:** Neon green (`bg-green-400`)

**How to change:**
- File: `app/components/Footer.js`
- Line 5: Change `bg-green-400` to any Tailwind color class
- Examples: `bg-blue-500`, `bg-purple-600`, `bg-red-500`, `bg-yellow-400`, `bg-gray-800`

**Also update:** Border color on line 73 to match (e.g., `border-green-300` → `border-blue-300`)

---

## 2. Change Navigation Bar Background

**What to change:** Navigation bar background color when scrolled

**Current:** White with transparency (`bg-white/95`)

**How to change:**
- File: `app/components/Navigation.js`
- Line 9: Change `bg-white/95` to desired color
- Examples: `bg-blue-500`, `bg-purple-600`, `bg-gray-900` (for dark nav)

**Also update:** Text colors on lines 20-30 to ensure good contrast

---

## 3. Change Hero Section Background Gradient

**What to change:** Main hero section background gradient colors

**Current:** Purple → Blue → Cyan gradient

**How to change:**
- File: `app/page.js`
- Line 6: Change gradient classes `from-purple-600 via-blue-600 to-cyan-500`
- Examples: 
  - `from-pink-500 via-red-500 to-orange-500` (warm gradient)
  - `from-green-500 via-teal-500 to-blue-500` (cool gradient)
  - `from-gray-800 via-gray-700 to-gray-900` (dark gradient)

---

## 4. Change Button Colors

**What to change:** Primary CTA button colors

**Current:** White background with purple text, hover gradient

**How to change:**
- File: `app/page.js`
- Line 108: Change button classes
  - Background: `bg-white` → `bg-blue-500`, `bg-red-500`, etc.
  - Text: `text-purple-600` → `text-white`, `text-black`, etc.
  - Hover gradient: Line 110 `from-cyan-400 to-blue-400` → any gradient colors

**Also check:** Other buttons on Details and Register pages

---

## 5. Change Event Name/Title Text

**What to change:** Main event name displayed on homepage

**Current:** "Tech Innovation Summit 2026"

**How to change:**
- File: `app/page.js`
- Lines 60-65: Change the text inside the `<h1>` tags
- Examples: "Startup Founders Meetup 2026", "Tech Conference 2026", "Innovation Hub 2026"

**Also update:** 
- `app/layout.js` line 17 (page title)
- `app/details/page.js` line 64
- `app/register/page.js` line 100

---

## 6. Change Event Date and Time

**What to change:** Event date, time, and location

**Current:** December 31, 2026, 6:00 PM - 11:00 PM, Singapore, NUS

**How to change:**
- File: `app/page.js`
- Line 15: Change date in countdown timer: `new Date('2026-12-31T18:00:00')`
- Line 78: Change displayed date: `December 31, 2026`
- Line 80: Change time: `6:00 PM - 11:00 PM`
- Line 82: Change location: `Singapore, NUS`

**Also update:** 
- `app/details/page.js` lines 215-217
- `app/components/Footer.js` line 44

---

## 7. Change Tagline/Description Text

**What to change:** Main tagline on homepage

**Current:** "This is the palce for Founders to mingle"

**How to change:**
- File: `app/page.js`
- Line 70: Change the text inside the `<p>` tag
- Examples: 
  - "Where innovation meets opportunity"
  - "Connect, Learn, Grow"
  - "The future of tech starts here"

**Also update:** Footer description in `app/components/Footer.js` line 14

---

## 8. Change Card/Component Border Radius

**What to change:** Roundness of cards, buttons, and components

**Current:** Various (rounded-full, rounded-2xl, rounded-xl)

**How to change:**
- Search for `rounded-` classes across files
- Replace with:
  - `rounded-none` (sharp corners)
  - `rounded-md` (slightly rounded)
  - `rounded-lg` (moderately rounded)
  - `rounded-2xl` (very rounded)
  - `rounded-full` (fully circular)

**Files to check:**
- `app/page.js` (countdown cards, feature cards)
- `app/details/page.js` (speaker cards, FAQ items)
- `app/register/page.js` (ticket cards, form inputs)

---

## 9. Change Text Colors Throughout Site

**What to change:** Primary text colors

**Current:** Various (white, gray-900, gray-600, etc.)

**How to change:**
- Search for `text-` classes
- Common replacements:
  - Headings: `text-gray-900` → `text-blue-900`, `text-purple-900`, `text-black`
  - Body: `text-gray-600` → `text-gray-700`, `text-gray-500`
  - Links: `text-purple-600` → `text-blue-600`, `text-red-600`

**Files to check:**
- All page files (`app/page.js`, `app/details/page.js`, `app/register/page.js`)
- Component files (`app/components/Navigation.js`, `app/components/Footer.js`)

---

## 10. Change Font Size for Headings

**What to change:** Size of main headings and titles

**Current:** Large headings (text-5xl to text-8xl)

**How to change:**
- File: `app/page.js`
- Line 59: Main headline `text-5xl sm:text-6xl lg:text-8xl`
  - Smaller: `text-3xl sm:text-4xl lg:text-5xl`
  - Larger: `text-6xl sm:text-7xl lg:text-9xl`

**Also check:**
- `app/details/page.js` line 63 (h1: `text-5xl sm:text-6xl`)
- `app/register/page.js` line 98 (h1: `text-5xl sm:text-6xl`)

---

## 11. Change Logo/Event Abbreviation

**What to change:** Logo text in navigation and footer

**Current:** "TIS24" (Tech Innovation Summit 24)

**How to change:**
- File: `app/components/Navigation.js`
- Line 12: Change `TIS<span className="text-cyan-500">24</span>`
- File: `app/components/Footer.js`
- Line 11: Change `TIS<span className="text-cyan-500">24</span>`

**Examples:** "SFM26", "TC2026", "IH2026"

---

## 12. Change Social Media Icons Color

**What to change:** Color of social media icons in footer

**Current:** Gray (`text-gray-400`) with white on hover

**How to change:**
- File: `app/components/Footer.js`
- Lines 54, 59, 64: Change `text-gray-400 hover:text-white`
- Examples:
  - `text-blue-400 hover:text-blue-600`
  - `text-purple-400 hover:text-purple-600`
  - `text-pink-400 hover:text-pink-600`

---

## 13. Change Form Input Border Color

**What to change:** Border color of form inputs on registration page

**Current:** Gray (`border-gray-300`) with purple on focus

**How to change:**
- File: `app/register/page.js`
- Search for `border-gray-300` and `focus:border-purple-600`
- Replace with:
  - `border-blue-300 focus:border-blue-600`
  - `border-green-300 focus:border-green-600`
  - `border-red-300 focus:border-red-600`

---

## 14. Change Ticket Tier Card Colors

**What to change:** Background and border colors of ticket selection cards

**Current:** White background with gray/purple borders

**How to change:**
- File: `app/register/page.js`
- Line 116: Change `bg-white` to `bg-gray-50`, `bg-blue-50`, etc.
- Line 118: Change `border-purple-600` to any color
- Line 119: Change `ring-purple-200` to match

---

## 15. Change Spacing/Padding

**What to change:** Amount of space between sections

**Current:** Various padding values (py-16, py-20, px-4, etc.)

**How to change:**
- Search for padding classes:
  - `py-16` (64px) → `py-12` (48px) or `py-20` (80px)
  - `px-4` (16px) → `px-6` (24px) or `px-8` (32px)
  - `gap-8` → `gap-4` (tighter) or `gap-12` (looser)

**Files to check:** All page files

---

## Quick Reference: Tailwind Color Classes

**Common colors:**
- Red: `red-400`, `red-500`, `red-600`
- Blue: `blue-400`, `blue-500`, `blue-600`
- Green: `green-400`, `green-500`, `green-600`
- Purple: `purple-400`, `purple-500`, `purple-600`
- Pink: `pink-400`, `pink-500`, `pink-600`
- Yellow: `yellow-400`, `yellow-500`, `yellow-600`
- Orange: `orange-400`, `orange-500`, `orange-600`
- Gray: `gray-100` (lightest) to `gray-900` (darkest)

**Opacity:**
- Add `/50` for 50% opacity: `bg-blue-500/50`
- Add `/90` for 90% opacity: `text-white/90`

---

## Notes

- Always test changes on both desktop and mobile views
- Ensure text remains readable after color changes (check contrast)
- Keep consistent color scheme across related elements
- Use browser DevTools to preview changes before saving
- Make sure to update all instances if changing event name/date across multiple files

---

**Last Updated:** 2024

