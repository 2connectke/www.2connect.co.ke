# 2Connect: Your Action. Your Impact.

**2Connect** is a dynamic, youth-driven volunteering and engagement platform based in Kenya. It is designed to mobilize the energy of young changemakers into impactful service while ensuring they are supported, prepared, and empowered to grow both personally and professionally.

---

## What is 2Connect?

At its heart, 2Connect is more than just a volunteer platform—it is a community. We bridge the gap between:
1. **Young people** seeking purpose, experience, and leadership opportunities.
2. **Organizations, startups, and institutions** in need of committed, skilled, and values-driven contributors.

We believe that volunteering should not be a one-off activity. Instead, it is a structured journey that builds lifelong skills, mental well-being, professional networks, and a deep sense of civic participation.

---

## Our Core Pillars

2Connect operates on four foundational pillars designed to maximize social impact and volunteer growth:

### 1. Volunteer Matching
Using smart alignment of skills and passions, we connect volunteers with opportunities where they can make the most significant difference. Whether it is environmental conservation, education, healthcare, or community outreach, we ensure a perfect fit.

### 2. Wellness & Peer Support
We recognize that volunteering can be emotionally and physically demanding. 2Connect prioritizes the mental health of its community by providing dedicated wellness resources, anonymous peer support groups, and professional guidance.

### 3. Professional Training
Through our **2CFP Model**, we provide deployment-ready training. Volunteers gain practical experience and industry-recognized certifications in project management, leadership, and crisis intervention, turning their service into a career-building asset.

### 4. Campus Leadership & Internships
We empower the next generation of leaders through our network of **Campus Clubs**. Our internship programs allow students to lead regional chapters, manage large-scale events, and work directly with partner NGOs to drive systemic change across the nation.

---

## Our Purpose

### Our Mission
To empower young people with opportunities, skills, and support to create positive and lasting change in their communities.

### Our Vision
A connected generation of socially conscious leaders transforming Kenya and the world.

### Our Values
*   **Purpose-Driven Innovation:** Thinking differently to solve community challenges.
*   **Collaboration:** Building bridges between youth and organizations.
*   **Integrity:** Standing for transparency and accountability in service.
*   **Empowerment:** Giving every young person the tools to lead.
*   **Sustainability:** Ensuring our impact lasts for generations.

---

## What Makes Us Different?

*   **Structured Journeys:** We don't just "place" volunteers; we guide them through a growth path.
*   **Dual-Impact Design:** Every project is designed to provide value to the community *and* tangible growth for the volunteer.
*   **Youth-Led Ecosystem:** Built by youth, for youth, ensuring our platform stays relevant and vibrant.
*   **Talent-to-Impact Pipeline:** We turn raw passion into professional skill sets through real-world deployment.

---

## Join the Movement

2Connect is a movement of young changemakers transforming the landscape of social impact in Kenya. Whether you are an individual looking to serve, a student wanting to lead on campus, or an organization looking for talent, there is a place for you.

**Your Action. Your Impact.**

---

## Working on the site

The site is a React + Vite app in `app/`. From that folder:

- `npm install` once, then `npm run dev` for a local server with live reload.
- `npm run build` writes the finished site to `app/dist/`, with one HTML file per page.
- `npm run preview` serves `dist/` the way Cloudflare Pages does, including redirects and the 404 page.

Where things live:

- Pages: `app/src/pages/`, components: `app/src/components/`, styles: `app/src/app.css`.
- Text and events for the site: `app/src/data/site.ts`.
- Page titles and descriptions for search and social sharing: `app/src/data/seo.json`.
- Photos: `app/public/assets/images/`, named `2connect-<category>-<nn>.jpg`.

## Deploying

Code moves through three places before it reaches the live site:

1. **GitHub `main`** (this repo). Every pull request and push runs type checks, lint, format check and a build (`.github/workflows/deploy.yml`). When `main` passes, the commit is pushed to the `dev` branch of the GitLab deployment repo, [2connect1/2connect_main](https://gitlab.com/2connect1/2connect_main).
2. **GitLab `dev`** deploys to the sandbox, Cloudflare Pages project `2connect-sandbox` at https://2connect-sandbox.pages.dev. The sandbox is never indexed by search engines. Check changes here first.
3. **GitLab `main`** deploys to production, Cloudflare Pages project `2connect` at https://2connect.co.ke. It only changes when a merge request from `dev` is merged, and only the maintainer can merge.

The GitLab pipeline lives in `.gitlab-ci.yml`.

Secrets:

- GitHub repository secret `GITLAB_SSH_PRIVATE_KEY`: the private half of a GitLab deploy key with write access that may push to the protected `dev` branch.
- GitLab CI/CD variable `CLOUDFLARE_API_TOKEN` (masked, protected): a Cloudflare API token with **Account → Cloudflare Pages → Edit** permission.

Build settings, if they are ever needed:

- `SITE_URL`: the live address used in canonical links, share previews and the sitemap. Defaults to `https://2connect.co.ke`.
- `PRODUCTION_BRANCH`: the branch whose deploys search engines may index. Defaults to `main`.
