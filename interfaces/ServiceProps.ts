import ProjectProps from './ProjectProps'
import ServiceDetailProps from './ServiceDetailProps'

export default interface ServiceProps {
    id: number,
    name: string,
    description: string,
    url: string,
    background_banner_image_url: string,
    tile_image_url: string,
    serviceDetails: ServiceDetailProps[],
    projects: ProjectProps[]
}