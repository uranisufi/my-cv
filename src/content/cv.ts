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
    title: 'Uran Isufi — Senior SDET / QA Engineer',
    description:
      'Senior SDET Consultant helping organizations ship software faster and confidently through test automation, CI/CD, and AI-driven quality engineering.',
    url: 'https://uranisufi.github.io/my-cv/',
  },
  person: {
    name: 'Uran Isufi',
    title: 'Senior SDET Consultant · QA Engineer',
    location: 'Prishtina, Kosovo',
    email: 'uranisufi25@gmail.com',
    linkedin: 'https://www.linkedin.com/in/uranisufi/',
    photo: 'images/headshot.jpg',
  },
  hero: {
    headline: "Hi, I'm Uran.",
    subheadline: 'Making Quality an Accelerator, Not a Bottleneck.',
    intro:
      'My mission is to help organizations ship software faster and confidently while continuously improving quality through AI-driven processes. I work as a trusted QA advisor — from automation and CI/CD to test strategy and AI QA initiatives.',
  },
  currentRole: {
    title: 'Senior SDET Consultant',
    company: 'Ritech International AG',
    dates: '2024 – Present',
    description:
      'Lead end-to-end QA engagement strategy for client projects — assessing quality maturity, delivery risks, and testing needs across multiple teams and domains. Act as a trusted QA advisor, translating business goals into pragmatic quality approaches. Initiate AI QA initiatives internally and monitor their exposure to clients. Perform capability and gap assessments, define scope and priorities, and help clients scale automation, CI, and manual testing capabilities. Organize AI QA workshops and initiatives.',
    tags: [
      'Test Strategy',
      'AI QA Engineering',
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
      title: 'Establishing a QA processes for web and mobile team',
      org: 'SVEA Solar · Stockholm, Sweden · 2021',
      year: '2021',
      problem:
        'Two teams shipping web and mobile apps lacked consistent QA processes. Testing practices varied across squads, slowing releases and reducing confidence in production deployments.',
      action:
        'Established Quality Assurance processes across both teams overseeing web and mobile development. Designed and implemented Cypress end-to-end testing integrated into sveasolar.com, improving coverage and accuracy across critical user flows.',
      metrics: [
        { value: '2', label: 'Teams with unified QA process' },
        { value: 'E2E', label: 'Cypress suite in CI' },
      ],
    },
    {
      title: 'First QA Engineer into a Startup processing gigabytes of data daily',
      org: 'Prime Retail & Trade Solutions · Pristina · 2019–2021',
      year: '2020',
      problem:
        'As the first Test Engineer on the team, there was no QA process aligned with the pace of development. Releases relied on ad-hoc manual testing with no automation or documented criteria.',
      action:
        'Built the QA function from scratch — designed a testing framework using Selenium, Java, and BDD. Established testing criteria, documentation, test data, environments, defect escalation procedures, and release testing cycles.',
      metrics: [
        { value: '1st', label: 'QA engineer on the team' },
        { value: 'BDD', label: 'Selenium + Java framework' },
      ],
    },
    {
      title: 'Selenium & SpecFlow Framework for Jamatu',
      org: 'Intes GmbH · Pristina · 2017–2018',
      year: '2017',
      problem:
        'Jamatu.com needed repeatable regression coverage but had no internal automation capability. Test design and execution were manual and inconsistent across releases.',
      action:
        'Developed an internal testing framework using Selenium, C#, and SpecFlow to cover test scenarios for jamatu.com. Owned test design, development, and documentation for short- and long-term projects.',
      metrics: [
        { value: 'C#', label: 'SpecFlow + Selenium stack' },
        { value: 'E2E', label: 'Automated regression suite' },
      ],
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
