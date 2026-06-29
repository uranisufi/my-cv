export interface CVData {
  meta: { title: string; description: string; url: string };
  person: {
    name: string;
    nickname?: string;
    title: string;
    location: string;
    email: string;
    linkedin: string;
    photo: string;
  };
  hero: { headline: string; subheadline: string; intro: string };
  stats: { value: string; label: string }[];
  currentRole: {
    title: string;
    company: string;
    dates: string;
    description: string;
    tags: string[];
  };
  cases: {
    title: string;
    org: string;
    year: string;
    problem: string;
    action: string;
    metrics: { value: string; label: string }[];
  }[];
  experience: {
    company: string;
    role: string;
    dates: string;
    summary: string;
  }[];
  education: {
    degree: string;
    school: string;
    location: string;
    detail?: string;
  }[];
  certifications: { name: string; issuer: string; year?: string }[];
  interests: string[];
  contact: { headline: string; body: string; openTo?: string };
}

export const cv: CVData = {
  meta: {
    title: 'Uran Isufi — SDET / QA Engineer',
    description:
      'SDET and QA Engineer focused on test automation, CI/CD quality gates, and building reliable release pipelines for distributed teams.',
    url: 'https://uranisufi.github.io/my-cv/',
  },
  person: {
    name: 'Uran Isufi',
    nickname: 'Ura',
    title: 'SDET · QA Engineer',
    location: 'Remote',
    email: 'uranisufi@gmail.com',
    linkedin: 'https://www.linkedin.com/in/uranisufi/',
    photo: 'images/headshot.svg',
  },
  hero: {
    headline: "Hi, I'm Uran.",
    subheadline: 'I build quality into products before they reach users.',
    intro:
      'SDET with a focus on test automation, API testing, and CI/CD quality gates. I work best with teams where quality is shared ownership and shipping means shipping with confidence.',
  },
  stats: [
    { value: '5+', label: 'Years in QA & test automation' },
    { value: '500+', label: 'Automated tests across web & API' },
    { value: '40%', label: 'Reduction in regression cycle time' },
    { value: '3', label: 'Product teams supported remotely' },
  ],
  currentRole: {
    title: 'SDET / QA Engineer',
    company: '[TBD: Company Name]',
    dates: '[TBD: Start] – Present',
    description:
      '[TBD: Describe your current role — what products you test, how you approach automation, CI integration, and collaboration with engineering. Example: Own end-to-end quality for a B2B platform, leading Playwright automation and release sign-off across staging and production pipelines.]',
    tags: [
      'Playwright',
      'Cypress',
      'API Testing',
      'CI/CD',
      'Postman',
      'Test Strategy',
      'Regression Automation',
      'Quality Gates',
    ],
  },
  cases: [
    {
      title: 'End-to-End Automation Framework',
      org: '[TBD: Company] · 2024',
      year: '2024',
      problem:
        'Manual regression was blocking releases. Critical user flows were retested by hand every sprint, slowing delivery and leaving gaps in API coverage.',
      action:
        'Designed and implemented a Playwright-based E2E framework with parallel CI execution, Page Object patterns, and API contract checks. Integrated quality gates into the pipeline so failing tests block merges.',
      metrics: [
        { value: '60%', label: 'Less manual regression effort' },
        { value: '15 min', label: 'Full suite runtime in CI' },
      ],
    },
    {
      title: 'CI/CD Quality Pipeline',
      org: '[TBD: Company] · 2023',
      year: '2023',
      problem:
        'Defects were reaching staging late. There was no consistent smoke suite or clear release criteria between dev, QA, and ops.',
      action:
        'Built a tiered test strategy — smoke on every PR, full regression nightly, and environment-specific health checks. Partnered with DevOps to wire results into GitHub Actions and Slack alerts.',
      metrics: [
        { value: '30%', label: 'Fewer staging defects' },
        { value: '2x', label: 'Faster release sign-off' },
      ],
    },
    {
      title: 'API Test Platform',
      org: '[TBD: Company] · 2022',
      year: '2022',
      problem:
        'Microservices lacked consistent API test coverage. Postman collections were scattered and never ran in CI, so breaking changes slipped through.',
      action:
        'Consolidated API tests into a shared Postman/Newman suite with environment configs and schema validation. Documented ownership so each team could extend coverage without duplicating setup.',
      metrics: [
        { value: '200+', label: 'API scenarios automated' },
        { value: '95%', label: 'Critical endpoints covered' },
      ],
    },
  ],
  experience: [
    {
      company: '[TBD: Previous Company]',
      role: 'QA Engineer',
      dates: '2022 – 2023',
      summary:
        'Owned manual and automated testing for a web product. Introduced smoke automation and defect triage workflows.',
    },
    {
      company: '[TBD: Earlier Company]',
      role: 'Junior QA / Test Analyst',
      dates: '2020 – 2022',
      summary:
        'Executed test plans, logged defects, and supported UAT. First exposure to Selenium and agile delivery.',
    },
  ],
  education: [
    {
      degree: '[TBD: Degree, e.g. BSc. Computer Science]',
      school: '[TBD: University]',
      location: '[TBD: Country]',
      detail: '[TBD: Thesis, GPA, or honors if relevant]',
    },
  ],
  certifications: [
    {
      name: '[TBD: e.g. ISTQB Foundation Level]',
      issuer: '[TBD: Issuer]',
      year: '2024',
    },
    {
      name: '[TBD: Certification]',
      issuer: '[TBD: Issuer]',
      year: '2023',
    },
  ],
  interests: [
    'Test Automation',
    'CI/CD',
    'API Testing',
    'Playwright',
    'Quality Strategy',
    'DevOps for QA',
    'Performance Testing',
    'AI-Assisted Testing',
    'Remote Work',
    'B2B SaaS',
  ],
  contact: {
    headline: "Let's talk.",
    body: 'Working on a product where quality, automation, or release confidence matters? I would like to hear about it.',
    openTo: 'Also open to remote SDET / QA Engineer roles',
  },
};
