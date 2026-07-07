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
    metrics?: { value: string; label: string }[];
    outcomes?: { heading: string; items: string[] };
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
    title: 'Uran Isufi — Senior SDET / QA Engineer',
    description:
      'Senior SDET Consultant helping organizations ship software faster and confidently through test automation, CI/CD, and AI-driven quality engineering.',
    url: 'https://uranisufi.space/',
  },
  person: {
    name: 'Uran Isufi',
    title: 'Senior SDET Consultant · QA Engineer',
    location: 'Prishtina, Kosovo',
    email: 'uranisufi25@gmail.com',
    linkedin: 'https://www.linkedin.com/in/uran-isufi',
    photo: 'images/headshot.jpg',
  },
  hero: {
    headline: "Hey, I'm Uran.",
    subheadline: 'Making Quality an Accelerator, Not a Bottleneck.',
    intro:
      'My mission is to help organizations ship software faster and confidently while continuously improving quality through AI-driven processes. I work as a trusted QA advisor — from automation and CI/CD to test strategy and AI QA initiatives.',
  },
  currentRole: {
    title: 'Senior SDET Consultant',
    company: 'Ritech International AG',
    dates: '2024 – Present',
    description:
      'Lead end-to-end QA engagement strategy for client projects — assessing quality maturity, delivery risks, and testing needs across multiple teams and domains. Act as a trusted QA advisor, translating business goals into pragmatic quality approaches. Lately a big part of my work is agentic QA: pipelines where agents help self-heal broken tests, catch flaky ones before they burn a release, and keep automation honest enough that green builds mean something again. Initiate AI QA initiatives internally, bring them to clients when the fit is right, and run workshops that go beyond slides into working examples. Perform capability and gap assessments, define scope and priorities, and help teams scale automation, CI, and manual testing — without pretending every problem needs a chatbot.',
    tags: [
      'Test Strategy',
      'AI QA Engineering',
      'Agentic Testing',
      'Self-Healing Tests',
      'Playwright',
      'Cypress',
      'CI/CD',
      'MCP & Agents',
      'Quality Engineering Leadership',
      'Client Advisory',
    ],
  },
  cases: [
    {
      title: 'Embedded QA advisory across client engagements',
      org: 'Ritech International AG · Prishtina · 2024 – Present',
      year: '2024',
      problem:
        'Ritech’s clients operate at different quality maturity levels — some lack automation, others need extra capacity mid-release. There was no consistent way to assess gaps, unblock delivery, or grow QA capability across engagements without reinventing the approach each time.',
      action:
        'Act as an embedded QA advisor across multiple client projects — assessing quality maturity, prioritizing workload, and jumping in where teams need hands-on support. Design and implement test frameworks, run critical test cycles, and help clients move from manual-heavy processes toward sustainable automation. Build agentic testing pipelines that use AI agents for self-healing selectors, flaky-test detection, and smarter failure triage — so suites stay maintainable as products evolve. Support Ritech’s QA hiring pipeline through candidate evaluation and recruitment, and run workshops on modern QA practices, agentic workflows, and AI-driven testing.',
      outcomes: {
        heading: 'Achieved 🎯',
        items: [
          'QA gap assessments and roadmaps delivered for multiple client engagements',
          'Test frameworks established and test execution unblocked on active deliveries',
          'Agentic pipelines introduced for self-healing tests and flaky-test detection',
          'Hands-on support across web, API, and automation — from strategy to running tests',
          'QA engineer recruitment supported — hiring criteria, interviews, and evaluation',
          'AI QA and test automation workshops organized for clients and internal teams',
        ],
      },
    },
    {
      title: 'Establishing a QA processes for web and mobile team',
      org: 'SVEA Solar · Stockholm, Sweden · 2021',
      year: '2021',
      problem:
        'Two teams shipping web and mobile apps lacked consistent QA processes. Svea Solar was looking to scale into 6 European countries and needed a unified QA process to ensure quality across all platforms.',
      action:
        'Established Quality Assurance processes across both teams overseeing web and mobile development. Designed and implemented Cypress end-to-end testing integrated into sveasolar.com, improving coverage and accuracy across critical user flows.',
      outcomes: {
        heading: 'Achieved 🎯',
        items: [
          'Cypress automation suite in CI',
          '95% test coverage on web',
          'Documented release plans for web and mobile',
          'SVEA Solar released in all of the countries planned',
        ],
      },
    },
    {
      title: 'First Test Engineer into a Startup processing tons of data daily',
      org: 'Prime Retail & Trade Solutions · Pristina · 2019–2021',
      year: '2020',
      problem:
        'As the first Test Engineer on the team, there was no QA process aligned with the pace of development. Releases relied on ad-hoc manual testing with no automation or documented criteria.',
      action:
        'Built the QA processes from scratch — designed a testing framework using Selenium, Java, and BDD. Established testing criteria, documentation, test data, environments, defect escalation procedures, and release testing cycles. Helpeed on the company goals for ISO certification.',
      outcomes: {
        heading: 'Achieved 🎯',
        items: [
          'First QA engineer on the team — built QA from zero',
          'Selenium + Java BDD testing framework in production',
          'Test criteria, environments, and release cycles documented',
          'Defect escalation procedures established across the team',
          'Contributed to company ISO certification goals',
        ],
      },
    },
  ],
  experience: [
    {
      company: 'Povio',
      role: 'Senior QA Engineer · AI-Driven Quality Engineering',
      dates: '2021 – 2024',
      summary:
        'Drove quality engineering with a focus on AI-driven testing approaches. Led automation strategy, CI integration, and quality practices across product teams in a fast-paced consulting environment.',
    },
    {
      company: 'SVEA Solar',
      role: 'QA Consultant',
      dates: '2021 – 2022',
      summary:
        'Consulted remotely for a Stockholm-based solar energy company. Established QA processes for web and mobile teams and implemented Cypress E2E testing for sveasolar.com.',
    },
    {
      company: 'Prime Retail & Trade Solutions',
      role: 'QA Engineer',
      dates: '2019 – 2021',
      summary:
        'First Test Engineer on the team. Built QA from the ground up with a Selenium, Java, and BDD framework — including test criteria, environments, defect escalation, and release cycles.',
    },
    {
      company: 'Polymath Services',
      role: 'QA Automation Engineer',
      dates: '2018 – 2019',
      summary:
        'QA Engineer on several US-based projects — QA scan analysis, test criteria, E2E testing, agile QA flow integration, and release support. Tested the New York Blood Center app through to production.',
    },
    {
      company: 'Intes GmbH',
      role: 'QA Engineer',
      dates: '2017 – 2018',
      summary:
        'Test design, development, and documentation for client projects. Built a Selenium, C#, and SpecFlow framework covering test scenarios for jamatu.com.',
    },
  ],
  education: [
    {
      degree: 'Bachelor of English & Literature',
      school: 'University of Prishtina',
      location: 'Prishtina, Kosovo',
      detail: '2011 – 2016',
    },
  ],
  certifications: [],
  interests: [
    'Test Automation',
    'AI QA Engineering',
    'Playwright',
    'Cypress',
    'Selenium',
    'CI/CD',
    'API Testing',
    'Mobile Testing',
    'Test Strategy',
    'MCP & Agents',
    'Quality Engineering Leadership',
    'Biking',
    'Skiing',
    'Mountain Exploring',
    'Tennis',
    'Cooking',
  ],
  contact: {
    headline: "Let's talk.",
    body: 'Working on a product where quality, automation, or AI-driven testing matters? I would like to hear about it.',
    openTo: 'Open to Senior SDET / QA Consultant engagements and remote roles',
  },
};
