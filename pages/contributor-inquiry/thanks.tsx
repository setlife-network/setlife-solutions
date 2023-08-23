import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Thanks from '../../components/Thanks'

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale!, ['common', 'thanks'])),
    },
})

const ThanksPage = () => {
    return (
        <div className='ContributorThanksPage'>
            <Thanks />
        </div>
    )
}

export default ThanksPage