import Paragraph from './Paragraph'

import {
    PROJECT_WITH_PROPOSED_BUDGETS,
    LET_US_KNOW_YOU_PROJECT_TIMELINE
} from '../constants/strings'

const BudgetTimelineForm = () => {
    
    return (
        <div className='BudgetTimelineForm'>
            <div className='grid grid-flow-row auto-rows-max gap-8 w-full md:w-6/12'>
                <Paragraph>
                    {PROJECT_WITH_PROPOSED_BUDGETS}
                </Paragraph>
                <Paragraph variant='m-bold'>
                    {LET_US_KNOW_YOU_PROJECT_TIMELINE}
                </Paragraph>
            </div>
        </div>
    )
}

export default BudgetTimelineForm