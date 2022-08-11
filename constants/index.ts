import {
    ABOUT,
    CONSULTATION,
    PORTFOLIO,
    SERVICE_PACKAGES,
    SERVICES,
} from './strings'

export const API_v1_URL: string = 'http://localhost:3000/api/v1'

// Images
export const HERO_IMAGE_URL = 'https://user-images.githubusercontent.com/49292858/183115188-87aa75f2-7123-472a-b20d-16766828f96c.png'
export const LOGO_URL: string = 'https://setlife-solutions.s3.amazonaws.com/images/Logo.png'
export const GITHUB_LOGO: string = 'https://setlife-solutions.s3.amazonaws.com/images/Github.png'
export const LINKEDIN_LOGO: string = 'https://setlife-solutions.s3.amazonaws.com/images/Linkedin.png'
export const TWITTER_LOGO: string = 'https://setlife-solutions.s3.amazonaws.com/images/Twitter.png'
export const YOUTUBE_LOGO: string = 'https://setlife-solutions.s3.amazonaws.com/images/Youtube.png'

// Arrays
export const NAV_ITEMS: Array<string> = [ABOUT, PORTFOLIO, CONSULTATION, SERVICES, SERVICE_PACKAGES]
export const FOOT_ITEMS: Array<string> = [GITHUB_LOGO, LINKEDIN_LOGO, TWITTER_LOGO, YOUTUBE_LOGO]
