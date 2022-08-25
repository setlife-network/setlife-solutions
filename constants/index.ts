import {
    ABOUT,
    CONSULTATION,
    PORTFOLIO,
    SERVICE_PACKAGES,
    SERVICES,
} from './strings'

// Images
export const HERO_IMAGE_URL = 'https://user-images.githubusercontent.com/49292858/183115188-87aa75f2-7123-472a-b20d-16766828f96c.png'
export const LOGO_URL: string = 'https://setlife-solutions.s3.amazonaws.com/images/Logo.png'
export const SOFTWARE_CONSULTING_BANNER_IMAGE_URL = 'https://setlife-solutions.s3.amazonaws.com/images/software-consulting.png'
export const GITHUB_LOGO: string = 'https://setlife-solutions.s3.amazonaws.com/images/Github.png'
export const LINKEDIN_LOGO: string = 'https://setlife-solutions.s3.amazonaws.com/images/Linkedin.png'
export const TWITTER_LOGO: string = 'https://setlife-solutions.s3.amazonaws.com/images/Twitter.png'
export const YOUTUBE_LOGO: string = 'https://setlife-solutions.s3.amazonaws.com/images/Youtube.png'
export const PROJECTS_BANNER_IMAGE_URL: string = 'https://setlife-solutions.s3.amazonaws.com/images/Projects_banner.png'
export const LAPTOP_ICON: string = 'https://setlife-solutions.s3.amazonaws.com/images/Laptop_icon.png'
export const THUMBS_ICON: string = 'https://setlife-solutions.s3.amazonaws.com/images/Thumbs_icon.png'

// URL
export const YOUTUBE_URL: string = 'https://www.youtube.com/channel/UCjyzH2XN7qB3WuWTPFbJXCQ'
export const TWITTER_URL: string = 'https://twitter.com/SetLifeLearning'
export const GITHUB_URL: string = 'https://github.com/setlife-network'
export const LINKEDIN_URL: string = 'https://www.linkedin.com/company/setlife-network'
export const SETLIFE_NETWORK_URL: string = 'https://www.setlife.network/'

// Arrays
export const NAV_ITEMS: Array<any> = [
    {
        name: ABOUT,
        link: '/'
    }, {
        name: PORTFOLIO,
        link: '/projects'
    }, {
        name: CONSULTATION,
        link: '/consultation'
    }, {
        name: SERVICES,
        link: '/services'
    }, {
        name: SERVICE_PACKAGES,
        link: '/service-packages'
    }
]
export const FOOT_ITEMS: Array<any> = [
    { name: 'GitHub', logo: GITHUB_LOGO, url: GITHUB_URL }, 
    { name: 'Linkedin', logo: LINKEDIN_LOGO, url: LINKEDIN_URL }, 
    { name: 'Twitter', logo: TWITTER_LOGO, url: TWITTER_URL }, 
    { name: 'Youtube', logo: YOUTUBE_LOGO, url: YOUTUBE_URL }
]
