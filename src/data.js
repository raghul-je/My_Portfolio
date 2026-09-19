export const profile = {
  name: 'Raghul JE',
  first: 'Raghul',
  last: 'JE',
  role: 'Software Engineer',
  company: 'Refex Industries Limited',
  tagline:
    'I turn messy operations into tools people actually use — React, Node, Express, and MySQL.',
  about:
    'Since April 2022 I have been shipping business systems at Refex Industries Limited — CRM, ERP, plant MIS, ITAM, fleet, project tools, and CMS brand sites. I sit with the operation first, then I build the product in React, Node, Express, and MySQL. Cursor and Readdy speed the typing. The process, data model, and UX calls stay mine.',
  location: 'India · Remote',
  availability: ['Open to work', 'Freelance', 'Remote'],
  phone: '9790738549',
  phoneHref: 'tel:+919790738549',
  phoneLabel: '+91 97907 38549',
  email: 'raghulje@gmail.com',
}

export const socials = {
  github: 'https://github.com/raghul-je',
  linkedin: 'https://www.linkedin.com/in/raghul-je',
  phone: profile.phoneHref,
}

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export const roles = ['Software Engineer', 'React', 'Node.js', 'Express', 'MySQL']

export const aboutCopy = {
  heading: 'I sit with the process first.',
  paragraphs: [
    'I am not a template-and-tweak developer. I sit with sales, plants, vendors, assets, fleets, and project tracking — then I decide what the screen should do, and I build the app. CRM, ERP, MIS, and workflow automation are the same job: turn an operation into software.',
    'The products in my folder are custom React + Node + Express + MySQL apps I shipped myself. Cursor and Readdy AI speed the typing. They do not own the product. Kissflow is a separate low-code track — it is not how these apps were made.',
    'I am open to full-time, freelance, and remote work — especially product-shaped full stack, internal tools, and admin systems that have to survive real operations.',
  ],
  stats: [
    { value: '4+', label: 'Years at Refex' },
    { value: '11+', label: 'Custom apps shipped' },
    { value: '6', label: 'Live production URLs' },
  ],
}

export const orbitSkills = [
  { label: 'React', color: '#61DAFB' },
  { label: 'JS', color: '#F7DF1E' },
  { label: 'Node', color: '#339933' },
  { label: 'SQL', color: '#336791' },
  { label: 'TS', color: '#3178C6' },
  { label: 'ERP', color: '#88CE02' },
  { label: 'Git', color: '#F05032' },
]

export const education = [
  {
    period: 'Jul 2018 — Jul 2022',
    degree: 'Bachelor of Technology — BTech, Information Technology',
    institution: 'Sri Ramanujar Engineering College',
    grade: '1st class',
    note: 'Communication and Core Java',
  },
  {
    period: 'May 2018',
    degree: 'Computer and Information Sciences and Support Services',
    institution: "St. Anne's Matriculation Higher Secondary School",
    grade: '',
    note: '',
  },
]

export const skillTiles = [
  { key: 'react', label: 'React', color: '#61DAFB' },
  { key: 'javascript', label: 'JavaScript', color: '#F7DF1E' },
  { key: 'vite', label: 'Vite', color: '#A855F7' },
  { key: 'tailwind', label: 'Tailwind', color: '#38BDF8' },
  { key: 'node', label: 'Node.js', color: '#3C873A' },
  { key: 'express', label: 'Express', color: '#8B8B8B' },
  { key: 'mysql', label: 'MySQL', color: '#4479A1' },
  { key: 'typescript', label: 'TypeScript', color: '#3178C6' },
  { key: 'erpnext', label: 'ERPNext', color: '#0089FF' },
  { key: 'suitecrm', label: 'SuiteCRM', color: '#F08377' },
  { key: 'framer', label: 'Motion', color: '#FF0055' },
  { key: 'recharts', label: 'Recharts', color: '#22d3ee' },
  { key: 'sequelize', label: 'Sequelize', color: '#52B0E7' },
  { key: 'git', label: 'Git', color: '#F05032' },
  { key: 'mui', label: 'MUI', color: '#007FFF' },
]

export const skills = {
  daily: ['React', 'Vite', 'JavaScript', 'TypeScript', 'Tailwind', 'Express', 'Node.js', 'MySQL', 'REST APIs'],
  comfortable: ['Framer Motion', 'Sequelize', 'Prisma', 'Recharts', 'JWT / auth', 'MUI', 'NestJS', 'Git', 'Docker', 'ERPNext', 'SuiteCRM'],
  learning: ['Richer motion systems', 'Design systems', 'Business solution architecture'],
}

export const projects = [
  {
    id: 'medtech',
    title: '3i MedTech',
    category: 'Product + full stack · 2025',
    status: 'Live',
    description:
      'Production website and CMS for a diagnostic imaging company — products, content, and a real admin.',
    features: [
      'Public site for radiography, portable X-ray, mammography, FPD, refurbished MRI, and accessories.',
      'Admin CMS for page sections, media, users, and footer — content without a code deploy.',
      'Contact flow, city lookup, spam protection, GA4, and single-server Express deploy.',
    ],
    technologies: ['React', 'Vite', 'Tailwind', 'Express', 'MySQL'],
    liveUrl: 'https://3imedtech.com/',
    from: '#7dd3fc',
    to: '#38bdf8',
  },
  {
    id: 'modepro',
    title: 'Modepro',
    category: 'Product + full stack · 2025',
    status: 'Live',
    description:
      'Live rebuild of modepro.co.in — pharma manufacturing site with a React public site and an Express + MySQL CMS.',
    features: [
      'Public pages for about, products, R&D, manufacturing, quality, EHS, careers, and gallery.',
      'CMS dashboard for home, header/footer, products, gallery, SMTP, and users.',
      'Contact submissions and email on the same Express + MySQL stack as the other brand sites.',
    ],
    technologies: ['React', 'Vite', 'Express', 'Node.js', 'MySQL'],
    liveUrl: 'https://modepro.co.in/',
    from: '#c4b5fd',
    to: '#7c6cff',
  },
  {
    id: 'adonis',
    title: 'Adonis Medical',
    category: 'Product + full stack · 2025',
    status: 'Live',
    description:
      'Corporate site and a large CMS for an X-ray equipment manufacturer — 25+ admin surfaces.',
    features: [
      'Product catalogue, careers, investor relations, presence, plant, and quality pages.',
      'CMS with content tabs, testimonials, SMTP, users, activity logs, recycle bin, and version history.',
      'Demo and contact forms wired through the same Express + MySQL stack as the other brand sites.',
    ],
    technologies: ['React', 'Vite', 'Tailwind', 'Express', 'Sequelize'],
    liveUrl: 'https://www.adonismedical.com/',
    from: '#fda4af',
    to: '#fb7185',
  },
  {
    id: 'biogas',
    title: 'Biogas MIS',
    category: 'Product + full stack · 2024',
    status: 'Production',
    description:
      'Plant operations MIS for SREL biogas / CBG — daily entry, approvals, reports, and a Vizag variant.',
    features: [
      'Daily MIS entry with draft → submit → approve / reject, plus customer master and admin.',
      'KPI dashboard, final MIS, Excel import/export, SMTP templates, schedulers, and audit logs.',
      'Same product family deployed for Vizag; Docker / nginx production path documented.',
    ],
    technologies: ['React', 'MUI', 'Express', 'Sequelize', 'MySQL'],
    liveUrl: 'https://srel.refex.group',
    from: '#86efac',
    to: '#22c55e',
  },
  {
    id: 'itam',
    title: 'Refex Asset Management',
    category: 'Product + full stack · 2026',
    status: 'Live',
    description:
      'Enterprise ITAM for Refex Group — hardware, licenses, kits, employees, and a desktop agent that reports inventory.',
    features: [
      'Asset lifecycle: checkout / check-in, maintenance, QR labels, EOL alerts, and public token pages.',
      'JWT + RefexOne SAML SSO, HRMS employee sync, reports, depreciation, and audit logs.',
      'Windows / macOS / Linux ITAgent for registration, heartbeats, and inventory sync.',
    ],
    technologies: ['React', 'TypeScript', 'Express', 'MySQL', 'SAML'],
    liveUrl: 'https://asset.refexone.com',
    from: '#67e8f9',
    to: '#06b6d4',
  },
  {
    id: 'mobility',
    title: 'Refex Mobility',
    category: 'Product + full stack · 2026',
    status: 'Live',
    description:
      'EV fleet and vehicle asset platform — registry, GPS-stamped captures, drivers, and a public field form.',
    features: [
      'Fleet registry, documents, QR codes, driver assignment, and HRMS-linked employees.',
      'Public /capture form for GPS-stamped vehicle / odometer / chassis photos without a login.',
      'Form review, registration audit, optional RefexOne SSO, and fleet KPI / CSV export.',
    ],
    technologies: ['React', 'TypeScript', 'Express', 'MySQL', 'Leaflet'],
    liveUrl: 'https://mobility.refexone.com',
    from: '#a5b4fc',
    to: '#6366f1',
  },
  {
    id: 'pmt',
    title: 'Refex Project Management',
    category: 'Product + full stack · 2026',
    status: 'Internal',
    description:
      'Standalone project, task, and subtask app for Refex — React SPA with an Express + MySQL API.',
    features: [
      'Projects / tasks / subtasks CRUD, revision history, field-level access, and email notifications.',
      'CTO, PM, and team dashboards with KPIs, RAG health, and My Work / My Team views.',
      'JWT + RBAC, Adrenalin HRMS employee sync, and company / department masters.',
    ],
    technologies: ['React', 'TypeScript', 'Express', 'Node.js', 'MySQL'],
    liveUrl: null,
    from: '#f9a8d4',
    to: '#ec4899',
  },
  {
    id: 'funnel',
    title: '3i Sales Funnel',
    category: 'Product + full stack · 2026',
    status: 'Internal',
    description:
      'Internal sales CRM from enquiry to closure — funnel, pipeline, forecast, and lost business.',
    features: [
      'Opportunities, regional filters, kanban pipeline, weighted forecast, and reports.',
      'JWT auth, users, forced password change, and product lines (MRI / FPD / Gamma Camera).',
      'Designed the sales logic and the UI — not a skin on someone else’s CRM.',
    ],
    technologies: ['React', 'Framer Motion', 'Recharts', 'Express', 'MySQL'],
    liveUrl: null,
    from: '#fde68a',
    to: '#f59e0b',
  },
  {
    id: 'vizag',
    title: 'Biogas MIS — Vizag',
    category: 'Product + full stack · 2025',
    status: 'Production',
    description:
      'CBG / industrial biogas MIS for the SREL Vizag plant — daily entry, approvals, and Final MIS.',
    features: [
      'Daily multi-section plant form: raw materials, digesters, biogas, HSE, and manpower.',
      'Draft → submit → approve / reject, customer master, KPI dashboard, and Excel export.',
      'Admin users, SMTP templates, schedulers, session logs, and Docker deploy path.',
    ],
    technologies: ['React', 'TypeScript', 'MUI', 'Express', 'MySQL'],
    liveUrl: null,
    from: '#6ee7b7',
    to: '#059669',
  },
  {
    id: 'premium-itam',
    title: 'Premium ITAM',
    category: 'Product + full stack · 2026',
    status: 'Internal',
    description:
      'Enterprise IT asset platform — React dashboard plus an Express / Prisma API for 80+ entity types.',
    features: [
      'Assets, licenses, employees, locations, vendors, maintenance, procurement, and assignments.',
      'JWT + RBAC, multi-tenant isolation, QR / depreciation helpers, and audit / activity logs.',
      'Background jobs for telemetry cleanup, depreciation, and license-expiry alerts.',
    ],
    technologies: ['React', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL'],
    liveUrl: null,
    from: '#93c5fd',
    to: '#3b82f6',
  },
  {
    id: 'bids',
    title: 'Bids Insights',
    category: 'Product + analytics · 2026',
    status: 'Internal',
    description:
      'Bid intelligence dashboards for Refex — overall view, YoY performance, and competitor comparison.',
    features: [
      'Bids Insights dashboard for pipeline and win / loss context.',
      'Year-over-year performance analysis.',
      'Refex vs competitor and top-5 competitor views.',
    ],
    technologies: ['React', 'Recharts', 'Node.js', 'Express', 'MySQL'],
    liveUrl: null,
    from: '#fcd34d',
    to: '#d97706',
  },
  {
    id: 'projectflow',
    title: 'ProjectFlow',
    category: 'Product + frontend · 2026',
    status: 'Internal',
    description:
      'Role-based project management UI — CTO, PM, and employee dashboards with RAG health and automation.',
    features: [
      'CTO view: KPIs, RAG chart, high-risk projects, aging table.',
      'PM and employee views: my projects, overdue tasks, team workload, quick-add personal tasks.',
      'Projects table + drawer, task completion with auto close dates, and reports.',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Recharts'],
    liveUrl: null,
    from: '#c4b5fd',
    to: '#7c3aed',
  },
  {
    id: 'modern-crm',
    title: 'modern-crm',
    category: 'Product + full stack · 2026',
    status: 'Internal',
    description:
      'Multi-tenant CRM core — accounts, contacts, activities, and audit, with JWT tenant isolation.',
    features: [
      'Register / login, tenant-scoped JWT, and granular RBAC on every entity.',
      'Accounts, contacts (1:N), polymorphic activities, and an audit viewer.',
      'Next.js app router frontend with protected routes and permission gates.',
    ],
    technologies: ['Next.js', 'React', 'NestJS', 'Prisma', 'PostgreSQL'],
    liveUrl: null,
    from: '#fdba74',
    to: '#ea580c',
  },
  {
    id: 'horizon',
    title: 'Horizon ERP',
    category: 'Product + platform · 2026',
    status: 'Internal',
    description:
      'AI-native multi-tenant ERP I am building — Studio metadata, workflows, and composable business modules.',
    features: [
      'Finance, inventory, sales, procurement, HR, manufacturing, and CRM modules.',
      'Metadata studio for entities, forms, workflows, and reports — not an ERPNext clone.',
      'NestJS API, Next.js web, Prisma / PostgreSQL, Redis workers, and a Horizon CLI.',
    ],
    technologies: ['Next.js', 'React', 'NestJS', 'Prisma', 'PostgreSQL'],
    liveUrl: null,
    from: '#5eead4',
    to: '#0d9488',
  },
  {
    id: 'kissflow',
    title: 'Kissflow apps',
    category: 'Separate track · low-code UI',
    status: 'Internal',
    description:
      'A separate Kissflow track — custom React pages when the process already lives in low-code. Not how the folder apps were built.',
    features: [
      'Lead Tracker hubs, KPIs, and admin dashboards (including RGML / Venwind variants).',
      'Vendor & contract management, L1 expense / travel dashboard, project tracker (My Work / My Team).',
      'Kissflow SDK + React + Recharts — the process lives in Kissflow; the UI is mine.',
    ],
    technologies: ['React', 'Kissflow SDK', 'Tailwind', 'Recharts', 'Framer Motion'],
    liveUrl: null,
    from: '#c6f531',
    to: '#4ade80',
  },
]

export const moreWork = [
  'Refex QR platform',
  'Airports analytics dashboard',
  'Refex Group, Venwind, RGML, RLFC sites',
  'ERPNext / Frappe custom app',
  'P2P procurement (PR → RFQ → PO)',
]

export const experience = {
  company: 'Refex Industries Limited',
  title: 'Software Engineer',
  dates: 'April 2022 — Present',
  headline: 'One company. Custom products.',
  summary:
    'I stayed close to the business — CRM, ERP, plants, assets, fleets, projects — and when the platform was not enough I shipped the product myself in React, Node, Express, and MySQL. ERPNext, SuiteCRM, and Kissflow are tracks I have used. The custom apps are still mine.',
  chapters: [
    {
      platform: 'SuiteCRM',
      when: 'From 2022',
      color: '#f08377',
      tech: ['SuiteCRM', 'PHP', 'Dashboards'],
      points: [
        'Custom CRM work and embedded dashboards for group operations.',
        'RGML corporate-finance widgets (loans, leases, funnels) still served from the SuiteCRM era.',
      ],
    },
    {
      platform: 'ERPNext / Frappe',
      when: 'Next',
      color: '#0089ff',
      tech: ['ERPNext', 'Frappe', 'Python'],
      points: [
        'Custom Refex app: contracts, trips, maintenance, procurement, and approval notifications.',
        'Extended ERP doctypes instead of bolting on a second system.',
      ],
    },
    {
      platform: 'React + Node + Express',
      when: 'Now',
      color: '#4ce6ff',
      tech: ['React', 'Node.js', 'Express', 'MySQL'],
      points: [
        'Shipped custom apps: Refex ITAM, Mobility fleet, Biogas MIS, Project Management, 3i Sales Funnel, Bids Insights.',
        'Also live brand sites with real CMS admins — 3i MedTech, Modepro, Adonis — same Express + MySQL pattern.',
        'Building Horizon ERP and modern-crm on NestJS / Next.js when the product needed a platform, not a page.',
      ],
    },
    {
      platform: 'Kissflow (separate track)',
      when: 'Alongside',
      color: '#0ff4a4',
      tech: ['Kissflow', 'React', 'Recharts'],
      points: [
        'Low-code processes when the workflow already lives in Kissflow — leads, vendors, expenses.',
        'Custom React pages on top. The folder apps are not Kissflow products.',
      ],
    },
  ],
}
