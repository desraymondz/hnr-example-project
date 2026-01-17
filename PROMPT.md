# Event Landing Page Generation Prompt

## Overview
Create a stunning, modern 3-page landing page for an event using Next.js 16 and Tailwind CSS. The design should be visually captivating, highly interactive, and optimized for both desktop and mobile experiences.

## Project Structure

### Page 1: Hero/Landing Page (`/app/page.js`)
**Purpose**: First impression and immediate call-to-action

**Required Elements**:
- **Hero Section**:
  - Large, attention-grabbing headline with event name
  - Compelling tagline/subheading (2-3 lines max)
  - Event date, time, and location prominently displayed
  - Countdown timer to the event (animated)
  - Primary CTA button ("Get Tickets", "Register Now", etc.) - should be large and prominent
  
- **Visual Elements**:
  - Animated background (gradient, particles, or subtle animations)
  - Event imagery/illustrations (can use SVG placeholders)
  - Smooth scroll indicators
  
- **Quick Info Section**:
  - Icon-based highlights: Event type, Duration, Ticket price range, Capacity
  - Social proof (e.g., "Join 500+ attendees")
  
- **Features/Highlights Preview**:
  - 3-4 key event highlights with icons
  - Brief descriptions of what makes this event special
  - Subtle hover effects

**Design Notes**:
- Use a bold color scheme (suggest: vibrant gradients, dark mode optional)
- Large typography for headlines (min 4xl, ideally 5xl or 6xl)
- Generous white space
- Smooth animations on scroll (fade-in, slide-up effects)

---

### Page 2: Details Page (`/app/details/page.js` or `/details`)
**Purpose**: Comprehensive event information and agenda

**Required Elements**:
- **About Section**:
  - Detailed event description (2-3 paragraphs)
  - Mission/vision for the event
  - What attendees can expect
  
- **Agenda/Schedule**:
  - Timeline layout with sessions/activities
  - Time slots with session names and descriptions
  - Speaker names (if applicable)
  - Visual timeline component (horizontal or vertical)
  - Optional: Interactive timeline with expandable details
  
- **Featured Content**:
  - Speakers/Performers section with avatars and bios
  - Topics/Themes covered
  - Workshops or special sessions
  - Each item should have hover effects and be visually distinct
  
- **Key Information Panel**:
  - Date & Time (detailed)
  - Location (with map placeholder or address)
  - Pricing tiers (if multiple ticket types)
  - What's included
  - FAQs (3-5 common questions with expandable answers)

**Design Notes**:
- Clean, organized layout with clear sections
- Use cards or panels to separate different types of content
- Interactive elements (accordions for FAQs, expandable agenda items)
- Consistent typography hierarchy

---

### Page 3: Registration/Tickets Page (`/app/register/page.js` or `/register`)
**Purpose**: Ticket selection and registration

**Required Elements**:
- **Ticket Selection**:
  - Multiple ticket tiers (e.g., General, VIP, Early Bird)
  - Each tier displayed as a card with:
    - Tier name
    - Price (large, prominent)
    - Features/benefits (bullet list)
    - Availability indicator
    - "Select" or "Buy Now" button
  - Visual distinction for recommended tier (e.g., highlighted border)
  
- **Registration Form**:
  - Personal information fields (Name, Email, Phone)
  - Ticket quantity selector
  - Optional: Dietary preferences, accessibility needs
  - Terms & conditions checkbox
  - Submit button (should be prominent and animated)
  
- **Trust Indicators**:
  - Secure payment badges
  - Refund policy summary
  - Contact information
  - Social media links
  
- **Confirmation Preview**:
  - Summary of selected tickets
  - Total price calculation
  - Next steps after registration

**Design Notes**:
- Clean, form-focused layout
- Clear visual hierarchy for pricing
- Form validation indicators (real-time feedback)
- Mobile-optimized input fields

---

## Technical Requirements

### Framework & Styling
- **Next.js 16** with App Router
- **Tailwind CSS 4** for styling
- **React 19** components
- All pages should be server components where possible

### Animations & Interactions
- Use CSS transitions and Tailwind animation utilities
- Smooth scroll behavior
- Hover effects on all interactive elements
- Loading states for forms
- Micro-interactions on buttons and cards

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Navigation should adapt to mobile (hamburger menu if needed)
- Images and layouts should be fully responsive
- Touch-friendly button sizes on mobile

### Performance
- Optimize images using Next.js Image component
- Lazy loading for below-the-fold content
- Minimal JavaScript for interactivity
- Fast page transitions

---

## Creative Design Specifications

### Color Palette Suggestions
**Option 1 - Vibrant & Energetic**:
- Primary: Electric blue (#0066FF) or Purple (#7C3AED)
- Secondary: Coral/Pink (#FF6B9D) or Orange (#FF8C42)
- Accent: Gold (#FCD34D)
- Background: Light gray/white or dark mode option

**Option 2 - Modern & Sophisticated**:
- Primary: Deep navy (#1E3A8A)
- Secondary: Emerald green (#10B981)
- Accent: Amber (#F59E0B)
- Background: Clean white with subtle gradients

**Option 3 - Bold & Creative**:
- Primary: Magenta (#EC4899)
- Secondary: Cyan (#06B6D4)
- Accent: Yellow (#EAB308)
- Background: Dark (#0F172A) with colorful accents

### Typography
- Headlines: Bold, modern sans-serif (use Geist Sans or similar)
- Body: Clean, readable sans-serif
- Decorative elements: Consider a display font for event name
- Font sizes: Use Tailwind's scale (text-4xl to text-9xl for headlines)

### Visual Elements
- **Icons**: Use SVG icons (can use placeholder icons or icon libraries)
- **Gradients**: Apply throughout (backgrounds, buttons, text)
- **Shadows**: Subtle elevation for cards and buttons
- **Borders**: Rounded corners (rounded-lg to rounded-2xl)
- **Spacing**: Generous padding and margins

### Special Effects
- Parallax scrolling (subtle)
- Gradient text effects
- Glowing buttons on hover
- Animated countdown numbers
- Smooth page transitions
- Scroll-triggered animations

---

## Navigation & User Experience

### Navigation Bar
- Should be present on all pages
- Logo/Event name (links to home)
- Navigation links: Home, Details, Register
- CTA button in nav (e.g., "Get Tickets")
- Sticky header option (transforms on scroll)

### Footer
- Event information summary
- Social media links
- Contact information
- Links to all pages
- Copyright/legal info

### User Flow
1. Land on hero page → Enticed by visuals and CTA
2. Click "Learn More" or scroll → Navigate to details page
3. Review information → Click "Register" → Go to registration page
4. Select tickets and fill form → Submit registration

---

## Content Structure Template

### Event Details to Include:
- **Event Name**: [Name of Event]
- **Tagline**: [Compelling one-liner]
- **Date & Time**: [Full date, start and end time]
- **Location**: [Venue name and address]
- **Event Type**: [Conference/Workshop/Concert/Festival/etc.]
- **Expected Attendees**: [Number]
- **Ticket Price Range**: [From $X to $Y]

### Sections to Implement:
1. Hero with immediate value proposition
2. Quick facts/statistics
3. Detailed information and agenda
4. Speakers/performers/featured guests
5. Ticket options and pricing
6. Registration form
7. Trust signals and social proof
8. Contact and FAQs

---

## Implementation Guidelines

### Code Quality
- Use functional components with proper React patterns
- Keep components modular and reusable
- Add comments for complex logic
- Ensure accessibility (ARIA labels, semantic HTML)
- Use proper TypeScript or JSDoc if needed

### File Organization
```
app/
  page.js (Home/Hero)
  details/
    page.js (Details page)
  register/
    page.js (Registration page)
  layout.js (Root layout with navigation)
  globals.css (Global styles)
components/
  (Optional: Reusable components like Button, Card, Countdown, etc.)
```

### Additional Features (Optional Enhancements)
- Dark mode toggle
- Language switcher (if multi-language)
- Share buttons (social media)
- Calendar integration (Add to Calendar buttons)
- Email signup form for updates
- Blog/News section
- Gallery/Videos section
- Live chat or support widget

---

## Success Criteria

The final landing page should:
✅ Be visually stunning and modern
✅ Clearly communicate event value proposition
✅ Guide users smoothly through all 3 pages
✅ Be fully responsive and mobile-friendly
✅ Load quickly and perform well
✅ Have smooth, delightful animations
✅ Include clear calls-to-action on every page
✅ Be accessible and user-friendly
✅ Follow Next.js and React best practices

---

## Start Building!

Use this prompt as a guide to create a complete, production-ready 3-page event landing page. Be creative with animations, color schemes, and interactions while maintaining excellent UX and performance standards.

**Pro Tip**: Start with Page 1 (Hero), get the design foundation right, then replicate and adapt the design language to Pages 2 and 3 for consistency.

