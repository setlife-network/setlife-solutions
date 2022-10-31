-- Services
INSERT INTO public.services
VALUES 
    (1, 'Software Consulting', 'This is the best place to start if you just need some basic technical advisement on how to get your project going', '2022-07-28', '2022-07-28'),
    (2, 'Project Engineering Management', 'With a Software Solutions Engineer at the helm, you’ll have weekly updates and a high-level view of how your project is going', '2022-07-28', '2022-07-28'),
    (3, 'Product Design', 'Your project deserves a strong design phase to produce wireframes & flowcharts outlining UIUX & technology architecture', '2022-07-28', '2022-07-28'),
    (4, 'Software Implementation', 'Here we handle the heavy lifting! After coding & deploying your solution, you will finally see your project brought to life!', '2022-07-28', '2022-07-28'),
    (5, 'Application Maintenance', 'Once your solution is live, we’ll make sure to monitor, support, and maintain your system with production-grade service & response', '2022-07-28', '2022-07-28');

-- Service details
INSERT INTO public.service_details
VALUES
    (1, 1, 'Discuss & specify the feasibility of your requested features, assess time estimates, and identify project constraints (time, budget, feature scope)', '2022-07-28', '2022-07-28'),
    (2, 1, 'Document all business requirements as well as project specifications, estimates, and technical details', '2022-07-28', '2022-07-28'),
    (3, 2, 'Identifying and completing project-specific deliverables within a reasonable scope, budget, and timeframe', '2022-07-28', '2022-07-28'),
    (4, 2, 'Establishing a feasible development plan and executing milestones through planning, design, implementation, & testing', '2022-07-28', '2022-07-28'),
    (5, 2, 'Developing client relationships and maintaining communication channels', '2022-07-28', '2022-07-28'),
    (6, 3, 'Designing rough-draft wireframes & high-fidelity mockups', '2022-07-28', '2022-07-28'),
    (7, 3, 'Creating flowcharts & diagrams describing UI/UX and feature implementation', '2022-07-28', '2022-07-28'),
    (8, 4, 'Engineering, coding, testing, and deploying functional software', '2022-07-28', '2022-07-28'),
    (9, 4, 'Architecting, configuring, and administering the application infrastructure', '2022-07-28', '2022-07-28'),
    (10, 5, 'Ensuring the availability and stability of all versions of the application', '2022-07-28', '2022-07-28'),
    (11, 5, 'Receiving bug reports, debugging the source code, and deploying bugfixes in a timely and clearly communicated manner', '2022-07-28', '2022-07-28');

-- Projects
INSERT INTO public.projects
VALUES
    (1, 'Careerscore', 'CareerScore, a Job Application Tracking tool, which helps schools measure and improve student job placement', 'Quotanda', 'Quotanda is expanding opportunities for institutions to increase educational access and improve student outcomes.', 'https://www.careerscore.com', null, '2022-07-28', '2022-07-28'),
    (2, 'WorkSTEPS', 'CareerScore, a Job Application Tracking tool, which helps schools measure and improve student job placement', 'Quotanda', 'Quotanda is expanding opportunities for institutions to increase educational access and improve student outcomes.', 'https://www.worksteps.com', null, '2022-07-28', '2022-07-28'),
    (3, 'Angling Lines', 'CareerScore, a Job Application Tracking tool, which helps schools measure and improve student job placement', 'Quotanda', 'Quotanda is expanding opportunities for institutions to increase educational access and improve student outcomes.', 'https://www.anglinglines.com', null, '2022-07-28', '2022-07-28'),
    (4, 'Compass', 'CareerScore, a Job Application Tracking tool, which helps schools measure and improve student job placement', 'Quotanda', 'Quotanda is expanding opportunities for institutions to increase educational access and improve student outcomes.', 'https://compassmining.io', null, '2022-07-28', '2022-07-28'),
    (5, 'Guatt', 'CareerScore, a Job Application Tracking tool, which helps schools measure and improve student job placement', 'Guatt', 'Guatt is an early-stage startup building a bitcoin-native digital bank using Galoy`s open-source banking platform.', 'https://guatt.io', null, '2022-07-28', '2022-07-28');

-- Project details
INSERT INTO public.project_details
VALUES
    (1, 1, 'Lead engineering & development of core technology and full software stack', 'services_provided', null, '2022-07-28', '2022-07-28'),
    (2, 1, 'Full application maintenance', 'services_provided', null, '2022-07-28', '2022-07-28'),
    (3, 1, '2+ years of dedicated development', 'impact', 'dedicated_development', '2022-07-28', '2022-07-28'),
    (4, 1, 'Careerscore is now a production-grade commercial product servicing multiple customers and poised for future growth', 'impact', 'production_grade', '2022-07-28', '2022-07-28'),
    (5, 2, 'Implementation & testing of a revamped UIUX based on a fully designed prototype provided during project kickoff', 'services_provided', null, '2022-07-28', '2022-07-28'),
    (6, 2, 'Substantial upgrade of the core technology software stack, rewriting and refactoring an outdated legacy codebase', 'services_provided', null, '2022-07-28', '2022-07-28'),
    (7, 2, '9+ months of dedicated development', 'impact', 'dedicated_development', '2022-07-28', '2022-07-28'),
    (8, 2, 'WorkSTEPS testing software continues stable operation now with a more modern and responsive UIUX upgraded to the latest industry standards in software development and cloud computing', 'impact', 'production_grade', '2022-07-28', '2022-07-28'),
    (9, 3, 'Implementation & testing of a UI overhaul based on some basic design guidance provided in the 1st phase of development', 'services_provided', null, '2022-07-28', '2022-07-28'),
    (10, 3, 'Substantial upgrade of the core technology software stack, rewriting and refactoring an outdated legacy codebase', 'services_provided', null, '2022-07-28', '2022-07-28'),
    (11, 3, '18+ months of dedicated development', 'impact', 'dedicated_development', '2022-07-28', '2022-07-28'),
    (12, 3, 'AnglingLines booking platform continues stable operation now with a more modern and responsive UIUX upgraded to the latest industry standards in software development and cloud computing', 'impact', 'production_grade', '2022-07-28', '2022-07-28'),
    (13, 4, 'Lead engineering & development of core technology and full software stack', 'services_provided', null, '2022-07-28', '2022-07-28'),
    (14, 4, 'Full application maintenance', 'services_provided', null, '2022-07-28', '2022-07-28'),
    (15, 4, 'Full application maintenance', 'services_provided', null, '2022-07-28', '2022-07-28'),
    (16, 4, 'Full application maintenance', 'services_provided', null, '2022-07-28', '2022-07-28'),
    (17, 4, '6+ months of design, ideation, and development of the MVP', 'impact', 'dedicated_development', '2022-07-28', '2022-07-28'),
    (18, 4, 'Hashr8s Compass product beta has been launched in production immediately generating revenue and showing strong potential growth to drive further product development & engineering', 'impact', 'production_grade', '2022-07-28', '2022-07-28'),
    (19, 5, 'Provided technical guidance on the feasibility and scope of the MVP', 'services_provided', 'Software Consulting', '2022-07-28', '2022-07-28'),
    (20, 5, 'Produced diagrams and flowcharts to illustrate business logic and system architecture', 'services_provided', 'Project/Engineering Management', '2022-07-28', '2022-07-28'),
    (21, 5, 'Advised on the development approach for the MVP', 'services_provided', 'Project/Engineering Management', '2022-07-28', '2022-07-28'),
    (22, 5, 'Communicated project updates between engineers and product owners', 'services_provided', 'Project/Engineering Management', '2022-07-28', '2022-07-28'),
    (23, 5, '9+ months of design, ideation, and development of the MVP', 'impact', 'dedicated_development', '2022-07-28', '2022-07-28'),
    (24, 5, 'Guatts product beta is demo-ready with a production-scale foundation to attract seed investment and drive further product development & engineering', 'impact', 'production_grade', '2022-07-28', '2022-07-28');

-- Service packages
INSERT INTO public.service_packages
VALUES
    (1, 'Code Review & Technical Assessment', 'A Technical Assessment will be provided as documentation that explains which technologies are used in the system and how they are implemented. This document will also provide some measure of code quality and technical debt that will determine howdifficulty it would be to continue building  onto the existing system.', '$500 - $3,000', null, '2 meetings', 'SetLife will dedicate a software solutions engineer to review the codebase and architecture  of your existing system.', null, '2022-07-28', '2022-07-28'),
    (2, 'Preliminary Development Approach', 'This document will provide a structure and foundation for the technical requirements of a project as well as some cost frameworking for how to proceed further with development. For most projects (especially larger ones), the Development Plan should be a living document owned by the client that contains enough of the business requirements and technical details to begin executing on a focused phase of design or engineering.', '$1,000 - $6,000', null, '3 meetings', 'SetLife will dedicate a software solutions engineer to produce a preliminary draft for a Development Plan.', null, '2022-07-28', '2022-07-28'),
    (3, 'Dedicated Solutions Engineering', 'This package has a minimum 3-month term to deliver at least 1 software release that can be deployed & tested against a set of business requirements. An agile development workflow may be established for continuous software release cycles (typically 4-6 weeks) subject to client satisfaction.', null, '$10,000 per month for 3 months', '1 weekly meeting', 'After a clear plan for development has been provided, a full-time effort will be made to begin executing on the proposed solution.', '1 full-time engineering lead or 1 part-time technial PM and 1 full-time engineer', '2022-07-28', '2022-07-28');
  
-- Provided services
INSERT INTO public.provided_services
VALUES
    (1, 1, '2022-07-28', '2022-07-28'),
    (2, 1, '2022-07-28', '2022-07-28'),
    (1, 2, '2022-07-28', '2022-07-28'),
    (2, 2, '2022-07-28', '2022-07-28'),
    (1, 3, '2022-07-28', '2022-07-28'),
    (2, 3, '2022-07-28', '2022-07-28'),
    (1, 4, '2022-07-28', '2022-07-28'),
    (2, 4, '2022-07-28', '2022-07-28'),
    (1, 5, '2022-07-28', '2022-07-28'),
    (2, 5, '2022-07-28', '2022-07-28');

-- Testimonials
INSERT INTO public.testimonials
VALUES
    (1, 1, 'Testimonial name test', 'Testimony', 'Person Image URL', '2022-10-26', '2022-10-26'),
    (2, 1, 'Testimonial name test 2', 'Testimony 2', 'Person Image URL', '2022-10-26', '2022-10-26'),
    (3, 3, 'Testimonial name test 3', 'Testimony 3', 'Person Image URL', '2022-10-26', '2022-10-26'),
    (4, 4, 'Testimonial name test 4', 'Testimony 4', 'Person Image URL', '2022-10-26', '2022-10-26'),
    (5, 5, 'Testimonial name test 5', 'Testimony 5', 'Person Image URL', '2022-10-26', '2022-10-26'),
    (6, 2, 'Testimonial name test 6', 'Testimony 6', 'Person Image URL', '2022-10-26', '2022-10-26'),
    (7, 2, 'Testimonial name test 7', 'Testimony 7', 'Person Image URL', '2022-10-26', '2022-10-26'),
    (8, 3, 'Testimonial name test 8', 'Testimony 8', 'Person Image URL', '2022-10-26', '2022-10-26'),
    (9, 4, 'Testimonial name test 9', 'Testimony 9', 'Person Image URL', '2022-10-26', '2022-10-26'),
    (10, 5, 'Testimonial name test 10', 'Testimony 10', 'Person Image URL', '2022-10-26', '2022-10-26'),