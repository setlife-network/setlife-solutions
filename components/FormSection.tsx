import Section from './Section'
import Subtitle from './Subtitle'

interface FormSectionProps {
    title: string,
    children: any
}

const FormSection = ({
    title,
    children
}: FormSectionProps) => {
    return (
        <div className='FormSection'>
            <Section color='light-gray'>
                <div className='grid grid-cols-1 w-fit gap-2'>
                    <Subtitle variant='s'>
                        { title }
                    </Subtitle>
                    <div className='h-2 bg-primary' />
                </div>
            </Section>
            <Section>
                { children }
            </Section>
        </div>
    )
}

export default FormSection