import { useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import Paragraph from './Paragraph'

import {
    MIN,
    MAX,
    PROJECT_WITH_PROPOSED_BUDGETS,
    LET_US_KNOW_YOU_PROJECT_TIMELINE
} from '../constants/strings'

interface BudgetTimelineFormProps {
    setBudgetTimeline: any
}

const BudgetTimelineForm = ({
    setBudgetTimeline
}: BudgetTimelineFormProps) => {

    const [minBudgetValue, setMinBudgetValue] = useState(1000)
    const [maxBudgetValue, setMaxBudgetValue] = useState(3000)

    const onSliderChange = (value: any) => {
        setMinBudgetValue(value[0])
        setMaxBudgetValue(value[1])
        setBudgetTimeline({
            minBudget: value[0],
            maxBudget: value[1]
        })
    }
    
    return (
        <div className='BudgetTimelineForm'>
            <div className='grid grid-flow-row auto-rows-max gap-8 w-full md:w-6/12'>
                <Paragraph>
                    {PROJECT_WITH_PROPOSED_BUDGETS}
                </Paragraph>
                <Paragraph variant='m-bold'>
                    {LET_US_KNOW_YOU_PROJECT_TIMELINE}
                </Paragraph>
                <div className='grid grid-cols-2 justify-items-center'>
                    <div>
                        <Paragraph variant='m-bold' color='primary' alignment='text-center'>
                            Min
                        </Paragraph>
                        <Paragraph>
                            {`$${String(minBudgetValue)}`}
                        </Paragraph>
                    </div>
                    <div>
                        <Paragraph variant='m-bold' color='primary' alignment='text-center'>
                            Max
                        </Paragraph>
                        <Paragraph>
                            {`$${String(maxBudgetValue)}`}
                        </Paragraph>
                    </div>
                </div>
                <div className='RangeSlider px-8'>
                    <Slider
                        range
                        allowCross={false}
                        min={0}
                        max={5000}
                        defaultValue={[1000, 3000]}
                        onChange={onSliderChange}
                        railStyle={{
                            height: 2
                        }}
                        handleStyle={{
                            height: 28,
                            width: 28,
                            marginLeft: -14,
                            marginTop: -14,
                            backgroundColor: '#00C2D4',
                            border: 0
                        }}
                        trackStyle={{
                            background: '#00C2D4'
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default BudgetTimelineForm