import ProjectProps from './ProjectProps'
import ServiceDetailProps from './ServiceDetailProps'

export default interface ServiceProps {
    id: number,
    name: string,
    description: string,
    url: string,
    serviceDetails: ServiceDetailProps[],
    projects: ProjectProps[]
}