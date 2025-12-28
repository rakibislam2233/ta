# Talenzy Frontend

A modern Next.js application built with TypeScript, Tailwind CSS, shadcn/ui, Zod, and React Hook Form.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Zod** - TypeScript-first schema validation
- **React Hook Form** - Performant forms with easy validation

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
talenzy-frontend/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with shadcn/ui variables
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components (add with: npx shadcn@latest add [component])
│   └── ExampleForm.tsx   # Example form with React Hook Form + Zod
├── lib/                   # Utility functions
│   └── utils.ts          # cn() utility for className merging
└── components.json        # shadcn/ui configuration
```

## Adding shadcn/ui Components

To add shadcn/ui components to your project:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add card
```

## Using React Hook Form with Zod

See `components/ExampleForm.tsx` for a complete example of:
- Form validation with Zod schemas
- React Hook Form integration
- Error handling and display

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Zod Documentation](https://zod.dev)
- [React Hook Form Documentation](https://react-hook-form.com)
