# Simplilearn-Dallas-Round-Table

> **Technical Assessment: SDE-1 (Next.js & AI-Driven Development)**

A pixel-perfect, fully responsive landing page for an executive roundtable event, built with Next.js 15, Tailwind CSS, and integrated with Airtable for RSVP submissions.

---

## 🎯 The Challenge

Build a landing page based on the provided Figma design with **100% design fidelity** while utilizing modern Next.js features, server-side logic, and AI-assisted development.

---

## 🚀 Live Demo

🌐 **Deployed URL:** [https://simplilearn-assessment.vercel.app](https://simplilearn-assessment.vercel.app)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | App Router, Server Components, Server Actions |
| **React 19** | UI Components with latest features (`useActionState`, `useFormStatus`) |
| **Tailwind CSS** | Utility-first styling, responsive design |
| **Airtable** | Backend database for RSVP submissions |
| **Vercel** | Deployment & hosting |

---

## ✨ Features

- 📱 **Fully Responsive** – Mobile-first design that scales beautifully to desktop
- 🎨 **Pixel-Perfect UI** – Matches Figma specs for spacing, colors, fonts, and alignment
- ⚡ **Optimized Performance** – Fire-and-forget form submissions, singleton clients, lazy loading
- 🔒 **Server Actions** – Secure form handling with Zod validation
- 📧 **Email Validation** – Client-side regex + server-side Zod schema validation
- 🗄️ **Airtable Integration** – RSVPs stored directly in Airtable base
- ♿ **Accessible** – Proper ARIA attributes, keyboard navigation, focus states

---

## 📁 Project Structure

```
simplilearn-rsvp/
├── app/
│   ├── actions.js          # Server Actions (RSVP submission)
│   ├── globals.css         # Global styles & Tailwind imports
│   ├── layout.js           # Root layout with metadata
│   └── page.js             # Main page composition
├── public/
│   ├── landing-img.png     # Hero background
│   ├── logo.svg            # Favicon & branding
│   ├── *.png / *.svg       # Speaker images, icons
├── src/
│   ├── components/
│   │   ├── Hero.jsx        # Hero section with CTA
│   │   ├── RespondForm.jsx # RSVP email form
│   │   ├── Story.jsx       # Story + question section
│   │   ├── ExploreSection.jsx
│   │   ├── Featured.jsx    # Featured speakers
│   │   ├── Agenda.jsx      # Event agenda
│   │   ├── FinalCTA.jsx    # Bottom call-to-action
│   │   └── Footer.jsx      # Footer with form
│   ├── fonts/              # Custom fonts (Satoshi)
│   └── lib/
│       └── airtable.js     # Airtable SDK wrapper
├── next.config.mjs
├── tailwind.config.js
└── package.json
```

---

## 🏁 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Airtable account with API access

### Installation

```bash
# Clone the repository
git clone https://github.com/Durgesh-2001/Simplilearn-Assessment.git
cd Simplilearn-Assessment

# Install dependencies
npm install

# Set up environment variables (see below)
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
AIRTABLE_API_KEY=your_airtable_api_key
AIRTABLE_BASE_ID=your_airtable_base_id
```

### How to get Airtable credentials:

1. Go to [Airtable](https://airtable.com) and create a base called `RSVP`
2. Create a table called `RSVPs` with a column named `Email` (Email type)
3. Go to [Airtable API](https://airtable.com/create/tokens) to generate a Personal Access Token
4. Copy your Base ID from the Airtable URL: `https://airtable.com/BASE_ID/...`

---

## 🎨 Design Fidelity

This project was built to match the Figma design with precision:

| Aspect | Implementation |
|--------|----------------|
| **Typography** | Satoshi font family, exact sizes/weights/line-heights |
| **Spacing** | Pixel-accurate padding, margins, gaps |
| **Colors** | Exact hex values from design (`#1D4DF4`, `#F5AB40`, etc.) |
| **Responsive** | Mobile-first with `md:` and `lg:` breakpoints |
| **Components** | Modular, reusable React components |

---

## 🤖 AI Tooling

This project was developed with assistance from AI tools as encouraged in the assessment:

- **GitHub Copilot** – Code generation, refactoring, and debugging
- **Claude (Anthropic)** – Architecture decisions, responsive design patterns
- **ChatGPT** – Brainstorming and Codebreak and fix sessions.

All generated code was reviewed, refined, and structured for production quality.

---

## 📧 RSVP Form Implementation

### Client-Side
- Email format validation using regex
- Real-time error feedback with red border highlight
- Submit button disabled when email is invalid
- Loading state with "Submitting…" indicator

### Server-Side
- **Server Action** in `app/actions.js`
- Zod schema validation for email
- Fire-and-forget Airtable submission for speed
- Graceful error handling with user feedback

### Performance Optimizations
- Singleton Airtable client (reused across requests)
- Optimistic response pattern (returns immediately, writes in background)
- Average response time: **< 100ms**

---

## 📊 Airtable Proof

> Screenshot of successful RSVP submission:

![Airtable Screenshot](/airtable-work.png)

---

## 🧪 Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Durgesh-2001/Simplilearn-Assessment)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables (`AIRTABLE_API_KEY`, `AIRTABLE_BASE_ID`)
4. Deploy!

---

## ✅ Evaluation Checklist

| Criteria | Status |
|----------|--------|
| Design Accuracy (100% match) | ✅ |
| Next.js App Router | ✅ |
| Server Components | ✅ |
| Server Actions for form | ✅ |
| Tailwind CSS styling | ✅ |
| Airtable integration | ✅ |
| Form validation | ✅ |
| Responsive design | ✅ |
| Performance optimized | ✅ |
| Clean, modular code | ✅ |
| Live deployment | ✅ |

---

## 📝 License

This project was created as part of a technical assessment for Simplilearn.

---

## 👤 Author

**Durgesh Jayashankar**

- GitHub: [@Durgesh-2001](https://github.com/Durgesh-2001)
- LinkedIn: [durgeshjay](https://www.linkedin.com/in/durgeshjay)
- Instagram: [@durgesh_dxj](https://www.instagram.com/durgesh_dxj)

---

<p align="center">
  Built with ☕ and AI-powered workflows
</p>
