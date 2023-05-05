import type { GetStaticProps, NextPage } from 'next'
import { useQuery } from '@apollo/client'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Headline from '../../components/Headline'
import PageBanner from '../../components/PageBanner'
import Section from '../../components/Section'
import ProjectTile from '../../components/ProjectTile'
import Pulse from '../../components/Pulse'

import ProjectProps from '../../interfaces/ProjectProps'

import { GET_PROJECTS } from '../../operations/queries/ProjectQueries'

import { 
    OUR_WORK,
    PORTFOLIO
} from '../../constants/strings'
import { PROJECTS_BANNER_IMAGE_URL } from '../../constants'

interface getProjects {
    fetchProjects: ProjectProps[]
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale!, ['common', 'project'])),
    },
})

const ProjectsPage: NextPage = () => {

    const { t } = useTranslation()

    const { error, data, loading } = useQuery<getProjects>(
        GET_PROJECTS
    )

    if (error || loading) {
        return (
            <Section>
                <div className='grid grid-rows place-content-center'>
                    <Pulse />
                </div>
            </Section>
        )
    }

    const projects = [...data!.fetchProjects]

    const renderProjects = () => {
        return projects.map(p => {
            return (
                <ProjectTile
                    id={p.id}
                    clientName={p.client_name}
                    name={p.name}
                    description={p.description}
                    image={p.tile_image_url}
                    externalLink={p.other_resource}
                />
            )
        })
    }

    return (
        <div className='ProjectsPage'>
            <PageBanner
                image={PROJECTS_BANNER_IMAGE_URL}
                title={t(PORTFOLIO)}
                titleAlignment='text-center'
            />
            <Section>
                <div className='grid grid-flow-row'>
                    <Headline variant='h1' color='solid-black' alignment='text-center md:text-left'>
                        { t(OUR_WORK) }
                    </Headline>
                    <div 
                        className='grid grid-flow-row auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-16 lg:gap-y-12 xl:gap-x-24 gap-y-6 xl:gap-y-16 mt-12'
                    >
                        { renderProjects() }
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default ProjectsPage