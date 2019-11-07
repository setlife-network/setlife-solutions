This document is the first draft of a case study to demonstrate methods and processes used in the project management and engineering of modern software applications, particularly in the context of upgrading an existing software application to meet modern standard.

The core of this study will be a fully detailed development plan for a sample project carried out in 2019.

------------

- [Development Plan](#sample-development-plan)
  * [Development Schedule](#development-schedule)
    + [Phase 1: Planning & Foundational Work](#phase-1--planning---foundational-work)
      - [Beta Release v0.1: Public Website Demo](#beta-release-v01--public-website-demo)
    + [Phase 2: Core Engineering](#phase-2--core-engineering)
      - [Beta Release v0.2: Public Website + Customer Area](#beta-release-v02--public-website---customer-area)
      - [Beta Release v0.3: Venue Owner Portal](#beta-release-v03--venue-owner-portal)
      - [Beta Release v0.4: Admin Portal](#beta-release-v04--admin-portal)
    + [Phase 3: System Migration](#phase-3--system-migration)
      - [Demo Live Release v1.0: Full System Migration](#demo-live-release-v10--full-system-migration)
  * [Payment Schedule](#payment-schedule)
- [Reference/Appendix](#reference-appendix)
  * [Product Definition](#product-definition)
    + [Public Website](#public-website)
      - [Informational Content](#informational-content)
      - [Blog](#blog)
      - [Venue Discovery](#venue-discovery)
      - [Online Price Request](#online-price-request)
    + [Customer Area](#customer-area)
      - [Customer Login & Registration](#customer-login---registration)
      - [Manage your Booking](#manage-your-booking)
    + [Venue Admin](#venue-admin)
      - [Owner Login](#owner-login)
      - [Venue Content Management](#venue-content-management)
      - [Customer Management](#customer-management)
      - [Business Metrics & Operations](#business-metrics---operations)
    + [Web Admin](#web-admin)
      - [Admin Login](#admin-login)
      - [Full Website Content Management](#full-website-content-management)
      - [IPP Management](#ipp-management)
      - [Business Operations / Process Management](#business-operations---process-management)
      - [Ferry Logistics](#ferry-logistics)
      - [Pricing Management](#pricing-management)
      - [Automated Email Reminders](#automated-email-reminders)
  * [Preliminary Code Review](#preliminary-code-review)
    + [OVERVIEW](#overview)
    + [HIGH-LEVEL ROADMAP](#high-level-roadmap)
    + [TECHNICAL DETAILS](#technical-details)

------------

# Development Plan

This section serves as a comprehensive overview of the current features of a web application and details the development work required to perform a major overhaul of the system. While there is a significant amount of technical debt making it unfeasible to maintain the app in its current state, the goal of this project is to build an independent version of the application that uses some refactored parts of the existing system. In a later phase users will be migrated to the new app with minimal disruption to business services and we will ultimately reach a state that features significant performance improvements, some UIUX enhancements, and source code that is more easily extensible for future changes.

This development plan will include timelines and milestones as well as more refined estimates based on the preliminary code review.

------------

## Development Schedule

- Phase 1
  - Milestone 0
    - Begin specifying features & planning development sprints

  - Milestone 1
    - Deliverable: Updated Development Plan w/ Phase 2 Details (this document)
    - Deliverable: Demo Beta Release v0.1: Public Website
    - Deliverable: Demo new designs for v0.2 Public Website + Customer Area via Invision

- Phase 2
  - Milestone 2
    - Deliverable: Completed v0.2 designs w/ Invision & raw design assets
    - Deliverable: Demo Beta Release v0.2: Public Website + Customer Area
  - Milestone 3
    - Deliverable: Demo Beta Release v0.3: Venue Owner Portal
  - Milestone 4
    - Deliverable: Demo Beta Release v0.4: Admin Portal

- Phase 3
  - Milestone 5
    - Deliverable: Demo Live Release v1.0: Full System Migration
  - Milestones 6+
    - TBD based on newly requested features

### Phase 1: Planning & Foundational Work
---------

The first phase of the project will focus on using the full feature specification in this document to evaluate whether any changes should be made to the foundational layers of the technical stack, specifically the data model that governs core functionality and the software tools used to implement the solution.

There is some engineering work that can be taken care of immediately since there are parts of the system architecture that will remain the same. A development environment will be configured and independently of the existing app so that there is no business disruption throughout the course of this project. This new independent system will be referred to as the **staging** app and will be set up from the get-go to resolve the issues with stability and maintainability that exist in the current system. The tools and processes used for development will also be brought up in line with modern industry standards.

The development team will follow an agile workflow with 1-week or 2-week sprints with 1-3 days in between each sprint to demo progress, conduct retrospectives, & plan future sprints.

#### Beta Release v0.1: Public Website Demo

A beta release will be shipped to a live URL and Phase 1 will conclude with a demo of this staging app. Features will include all current functionality of the Public Website (not the Customer Area) described above in the Product Definition, **except** any features that would require making changes to the live production database. This beta app will be performing read-only queries against the database and will never make changes that may have unintended consequences in other parts of the app.

By shipping a stable release built on the foundation of the upgraded tech stack, we can establish an interface that serves as a view layer compatible with the backend database. This minimizes the risk of disrupting business service while simultaneously demonstrating a successful integration with the live data.

This first phase will help strengthen our familiarity with the current system and allows us to collect feedback on a functional UI with improved performance. While the UIUX will remain largely the same in the interest of staying on schedule, we will incorporate minor UIUX changes to reduce friction and modernize the general design aesthetic.

1. Sprint 1: Foundation & Design - (1 week)
  - Configure development environment (Git, Docker, PHP7, nginx)
  - Write installation instructions for developer onboarding
  - Set up PHP framework (Symfony or Laravel)
  - Establish and implement a styling system for UI components
  - Deploy AWS EC2 instance, ELB (load balancer)
  - Configure & document git workflow & deployment process
  - Test staging environment at a live URL
  - Deploy AWS RDS database instance
  - Import table structures from current database schema
  - Import truncated sample data into all tables for testing
  - Decide on UI design changes

2. Sprint 2: Build - (2 weeks)
  - Implement all "read-only" features in Public Website

3. Sprint 3: Build - (2 weeks)
  - Implement all "read-only" features in Public Website 
  - Test, polish, release v0.1

*Development Estimate: 220-260 hours*

### Phase 2: Core Engineering
---------

#### Beta Release v0.2: Public Website + Customer Area

Development will continue by adding the Customer Area to the Public Website and implementing a full login/registration solution for bookings to be made and managed by Customers.

1. Sprint 4: Build - (1 week)
  - Implement the remainder of features in Public Website 
  - Implement features in Customer Area

2. Sprint 5: Build - (2 weeks)
  - Implement features in Customer Area
  - Test, polish, release v0.2

*Development Estimate: 180-200 hours*

#### Beta Release v0.3: Venue Owner Portal

All features in the Venue Owner Portal will be implemented & refactored from the existing system.

1. Sprint 6: Build - (2 weeks)
  - Implement all features in Venue Owner Portal
  - Test, polish, release v0.3

*Development Estimate: 90-100 hours*

#### Beta Release v0.4: Admin Portal

All features in the Admin Portal will be implemented & refactored from the existing system.

1. Sprint 7: Build - (2 weeks)
  - Implement features in Admin Portal

2. Sprint 8: Build - (2 weeks)
  - Implement features in Admin Portal
  - Test, polish, release v0.4

*Development Estimate: 180-200 hours*

### Phase 3: System Migration

#### Demo Live Release v1.0: Full System Migration

1. Sprint 9: Build & Testing - (1 week)
  - Prepare/migrate all scheduled tasks (email notifications, etc)
  - Prepare data migration scripts
  - Test all features in v0.4 and compile final issues

2. Sprint 10: QA - (1 week)
  - Execute all data migration tasks
  - Debug, polish, release v1.0

*Development Estimate: 90-100 hours*

-------------------

## Payment Schedule

- Phase 1 Estimate: 6-7 weeks, 220-260 hours
- Phase 2 Estimate: 12-14 weeks, 450-500 hours
- Phase 3 Estimate: 2-3 weeks, 90-100 hours
- Total Average:    ~810 hours @ ~$X/hr


The Target Dates below assume an **April 15th** kickoff

| Payment                       | Target Date  | Amount    |
| :-------                      | ----------:  | -----:    |
| Project Kickoff               | April 15     | X.000 $   |
| Milestone 1 Complete          | May 29       | X.000 $   |
| Milestone 2 Complete          | July 4       | X.000 $   |
| Milestone 3 Complete          | July 23      | X.000 $   |
| Milestone 4 Complete          | August 28    | X.000 $   |
| Milestone 5 Complete          | September 19 | X.000 $   |
| **Total**                     | -          | **XX.000 $**  |

-------------------

# Reference/Appendix

## Product Definition

This software is owned by Company that provides a web service for booking and managing carp fishing holiday trips throughout Europe. The system caters to 3 different types of users and the features described will be modularized around each of the following user types:

1. **Customers** - Users who book and pay to enjoy their vacation
2. **Owners** - Users who manage the content of their lake venues on the site and are paid when Customers book a trip
3. **Admins** - Users employed by Company to facilitate travel arrangements and manage all activity on the site

The user experience for Customers starts at the Public Website which does not require user registration to input the details for a trip. Ultimately, Customers will register to make a downpayment to begin processing the booking and returning Customers can access their account by logging into the Customer Area. Owners receive a notification when a booking request is made to their venue and they can always access the management of their venue by logging into the Venue Admin Portal with their credentials. Admins respond to all issues regarding travel arrangements, coordinate billing, and manage all web content by logging into the Web Admin Portal.

Links to each of these user interfaces are provided below:

- Public Website
- Customer Area
- Venue Owner Portal
- Web Admin Portal

------------

### Public Website

The main website is primarily used for providing all of the information a potential Customer would need to explore the service and make a booking. This includes FAQs, blog content, and details about the experience at each venue they have to choose from. We will organize the features in the following modules:

#### Informational Content

There is a substantial amount of information on the website with plenty of details for users to understand how Company operates and the kind of services available for Customers.

*User Features*

- View basic information about Company including social media links & contact methods
- View FAQs and detailed information about the services provided
- View quoted testimonials featured on the home/landing page
- View a list of links to related websites
- View all press cuttings uploaded as images or PDFs (with pagination)
- View all videos added (with pagination)
- View a list of venues sorted alphabetically
- View a list of venues matching pre-defined filter categories (drive & survive, accomodation, big carp, etc)
- Chat with a customer support representative by submitting your name

#### Blog

There is blog section of the website that seems to stand alone as a resource for Customers to dive deeper into the experience of carp fishing. Venue Owners can submit articles and videos about their venue to be featured on the Blog.

**The Blog section exists seperately as a WordPress app and may not be critical to the refactor**

- View the most recent news, photos, & videos that have been uploaded & featured by Admins & Owners (Bloggers)
- View a list of all Bloggers and the content they have posted
- View a list of all video posts and filter by category
- View details about each Blogger
- Submit a reply to a Blogger
- View the reply comments left by other users on any post
- Receive notifications by email when a Blogger makes a new post
- Receive notifications by email when a new comment is made about a Blogger
- Receive notifications by email when a new comment is made on a post
- Subscribe to an RSS feed
- View a list of all Venues and their related blog content
- Click to view the previous/next blog post
- View a list of various categories and content posted about each (General Interest, Technical Carping, Owning a Carp Lake, etc)
- View all posts in a selected month
- Search all posts by keyword
- View featured videos shown on all Blog pages

#### Venue Discovery

The preliminary venue search functionality provides a basic way for Customers to find the right venue for their vacation based on a variety of factors and criteria. Each venue has its own dedicated page that features photos, videos, and detailed information about the facilities and amenities offered at the venue.

*User Features*

- Search venues by setting venue-specific options to filter results (carp size, lake size, meals, etc)
- Search venues based on availability of a selected holiday date
- View all venue results numbered on an interactive map
- View at-a-glance info about each venue (lake size, max carp weight, max swims, max anglers, & travel time from port)
- View the number of available spaces for a selected date
- View at-a-glance info for each venue about the next date with available spaces
- Sort search results by venue lake size, fish size, or traveling time
- Click to view the Venue Detail Page for each venue

#### Online Price Request

After a Customer has decided on a venue, they can proceed to request a price for the booking by submitting more detailed requirements.

*User Features*

- Select a date and number of anglers to check the availability of a venue
- View the number of spaces available at a venue for a selected date
- View earlier or later dates with full availability
- Confirm number of people and select vehicle options to request a price
- View and compare price options from different available ferry companies
- Log in with an existing account to make payment on a price request
- Register details for a new account to make a payment on a price request
- Select a payment option (100% or installments)

------------

### Customer Area

#### Customer Login & Registration

*User Features*

- Login with email & password
- Log out of Customer Area

#### Manage your Booking

*User Features*

- View a list of holiday bookings requiring a Terms & Conditions agreement
- Read Terms & Conditions for a booking and click to confirm agreement
- View the date and location of the next upcoming holiday booking
- View the due date and amount of the next payment
- View a recommendation and external link to purchase travel insurance
- View notices for all details required for the booking (vehicle, passengers, anglers/non-anglers)
- View latest news articles, customer feedback, and fish photos of the venue booked
- Add make, model, and registration number for vehicle details
- Submit a request to change crossing route by selecting from available inbound & outbound options
- Submit a request to change crossing inbound & outbound dates & times
- Submit a request to change number & type of vehicles for the crossing
- Add personal details of anglers & non-anglers who will be going on the trip
- Assign added persons as passengers that will be traveling in vehicles for the crossing
- Update personal contact details of the logged in Customer
- View a list of holiday bookings
- View and print an informational package about a booking
- View driving directions from the ferry port to the venue
- Click to view payment details about a holiday
- Click to view full details about holiday booking
- View a list of payments that need to be made with booking details including the venue, date, status, anglers, and oustanding amount
- Assign payments to other persons added to the trip to send email notifications to pay
- Click to view full details about a payment
- Select a credit or debit option and click to be redirected to external payment processor (Barclays)

### Venue Admin

Venue Owners have a customized interface they can use to add content to their venue.

#### Owner Login

*User Features*

- Login with venue name & password
- Change password
- Log out of Venue Admin

#### Venue Content Management

*User Features*

- ...

#### Customer Management

*User Features*

- Add a new Customer Feedback entry for any past booking
- View a list of all bookings made by Customers
- View details of each booking
- Receive email notifications when a new booking is paid for by a Customer

#### Business Metrics & Operations

*User Features*

- View the number of online price requests compared to other venues
- View the number of bookings and the percentage of repeated customers year over year
- View the status of insurance documents
- Upload PDF of insurance documents
- View all monthly invoices paid by Company

------------

### Web Admin

Admins have a full-access interface to add, edit, and delete all content on the website. This portal also includes functionality to coordinate booking logistics, invoice & payment processing, and other business operations.

#### Admin Login

*User Features*

- Login with username & password
- Log out of Web Admin

#### Full Website Content Management

*User Features*

- Add SEO keywords and metadata description for each venue
- Update SEO keywords and metadata description for each venue
- Add links to be displayed on the Public Website (text and image upload)
- Update links
- Delete links
- Add press content to be displaye don the Public Website (2 dropdown selections and PDF or JPG file upload)
- Update press content 
- Delete press content 
- Add articles to be displayed for each venue (dropdown, text, rich-text editor, image upload, date selector)
- View a list of venues and the number of articles that are live for each 
- View a list of articles live for each venue
- Update articles
- Delete articles
- Add text to show as Home Page quotes
- Delete Home Page quotes
- Web Content
- Venues

#### IPP Management

*User Features*

- Accounts > IPP

#### Business Operations / Process Management

*User Features*

- Home
- Payments
- Bookings
- Accounts > Venue Invoices

#### Ferry Logistics

*User Features*

- Ferry

#### Pricing Management

*User Features*

- Prices

#### Automated Email Reminders

*User Features*

- Customers should receive an email notification when a payment is due

## Preliminary Code Review

### OVERVIEW

After a thorough code review, the project will involve a substantial amount of work dedicated to bringing the codebase up to modern standards. There seems to be some degree of reusability in the current PHP code & SQL database tables and this will be taken into consideration in the development approach.

Given that this is a major refactor, one of the most critical priorities during this process will be to minimize the impact to the live website in order to avoid downtime and/or data loss. Making changes to the existing app is not recommended because there is no testing suite in place that would alert us if a new change has unintended consequences that could break other parts of the app. Implementing a proper testing suite will be part of this refactor to eliminate this problem moving forward.

It may take several months before all parts of the app are fully refactored, upgraded, and considered stable. However, a complete rewrite would take ~30% longer to complete and would require more planning time and client attention for what would ultimately lead to a similar final result.

It is impossibly difficult to determine the exact timeline of completion this early in the process, so we will attempt to break down the project into milestones that will allow us to achieve incremental levels of stability. Estimates should be refined throughout each phase and may change according to client needs or other unknown factors.

### HIGH-LEVEL ROADMAP

Phase 1

- Backup and secure all data
- Configure a separate stable development environment
- Deploy a duplicate version of the app (v2.0) using Amazon Web Services & other modern tools
- Scope and specify new features or changes to the app to be considered for Phase 2

Development Estimate: 110-225 hours

Phase 2

- Refactor the PHP codebase to a framework to improve development efficiency
- Refactor the SQL database to adhere to best practices for security & maintainability
- Determine which requested features can be implemented without adding complexity to the refactor
- Release the upgraded app and test for stability and usability
- Prepare for production

Development Estimate: 225-450 hours

Phase 3

- Implement additional changes as requested by the client
- Release the app to production
- Migrate all users
- Discontinue the old version of the app

Development Estimate: 225-450 hours

### TECHNICAL DETAILS

The key problems with the current system architecture are:

- No testing suite, build checks, or deployment tools to quickly and safely release changes to the application
- Outdated PHP practices, security risks such as plain-text passwords, and lack of an ORM makes it very difficult to maintain the codebase and secure important data, especially with the amount of features in the app
- Lack of a MVC framework makes it difficult to add new features and change existing ones. Many anti-patterns such as "spaghetti code" also makes code more difficult to read and understand

Without any input from the client in terms of product/feature considerations, implementing the following solutions will have a significant impact to reducing development time:

- Host the codebase on GitHub to take advantage of version control and other supporting project management & developer tools
- Use Docker for easier developer onboarding & deployment configuration
- Host the application and database on AWS (EC2, RDS MySQL/Aurora, etc) for industry-leading reliability and availability
- Add services such as Elastic Beanstalk, Travis, Docker Hub, etc and configure staging & production servers for safer deployments
- Upgrade to PHP7 and add Doctrine as an ORM
- Implement a framework such as Symfony or Laravel to organize the application components and optimize for resuability and readability

The services mentioned above will require paid tiers that could reach ~100 Euros monthly. These charges will be included as part of the monthly maintenance agreement that will be specified after Phase 1 and will be based on the client's long-term needs after the refactor.

To add any additional features, we will need to scope down functionality and design for new UI and more specific client requirements will need to be gathered. This is planned for Phase 1 but should be carefully considered in case major features conflict with the ongoing refactor. If the client wishes to remove certain features, that should be noted as soon as possible in order to save time on the refactor.
