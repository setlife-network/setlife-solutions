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