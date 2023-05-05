import { useTranslation } from 'next-i18next';

import CheckTile from './CheckTile'
import Section from './Section'
import Headline from './Headline'
import Subtitle from './Subtitle'

import { CONSULTATION_FORM_THANKS_IMAGE_URL } from '../constants'

import {
    OUR_TEAM_WILL_CONTACT_YOU,
    THANK_YOU
} from '../constants/strings'

const Thanks = () => {
    const { t } = useTranslation('thanks')
    
    return (
        <div className='Thanks'>
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
                            {`${t(THANK_YOU)}!`}
                        </Headline>
                    </div>
                    <div className='mt-4 mb-12'>
                        <Subtitle alignment='text-center'>
                            {t(OUR_TEAM_WILL_CONTACT_YOU)}
                        </Subtitle>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Thanks