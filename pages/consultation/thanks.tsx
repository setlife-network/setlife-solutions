import CheckTile from '../../components/CheckTile'
import Section from '../../components/Section'
import Headline from '../../components/Headline'
import Subtitle from '../../components/Subtitle'

import { CONSULTATION_FORM_THANKS_IMAGE_URL } from '../../constants'

import {
    OUR_TEAM_WILL_CIONTACT_YOU,
    THANK_YOU
} from '../../constants/strings'

const ThanksPage = () => {
    return (
        <div className='ThanksPage'>
            <Section>
                <div className='grid grid-flow-row auto-rows-max'>
                    <div className='m-auto h-96'>
                        <img
                            src={CONSULTATION_FORM_THANKS_IMAGE_URL}
                            alt=''
                            className='h-96'
                        />
                    </div>
                    <div className='m-auto mt-8'>
                        <CheckTile backgroundColor='#00C2D4' size={20} />
                    </div>
                    <div className='mt-8'>
                        <Headline variant='xxl' color='primary' alignment='text-center'>
                            {`${THANK_YOU}!`}
                        </Headline>
                    </div>
                    <div className='mt-4 mb-12'>
                        <Subtitle alignment='text-center'>
                            {OUR_TEAM_WILL_CIONTACT_YOU}
                        </Subtitle>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default ThanksPage