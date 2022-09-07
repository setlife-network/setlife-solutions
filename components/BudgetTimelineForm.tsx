import { useEffect, useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import Paragraph from './Paragraph'

import {
    MIN,
    MAX,
    PROJECT_WITH_PROPOSED_BUDGETS,
    LET_US_KNOW_YOU_PROJECT_TIMELINE,
    NEED_URGENT_DELIVERY,
    PREFER_MILESTONE_BASED_DELIVERY,
    SEEKING_LONG_TERM_STABLE_DEVELOPMENT,
    HAVE_SECURED_CAPITAL,
    CURRENTLY_RAISING_FUNDS,
    HAVE_SOME_CAPITAL,
    PROJECT_IS_ALREADY_UP,
    STARTING_MY_PROJECT_FROM_SCRATCH,
    STARTED_DEVELOPMENT_BUT_NEED_ASSISTANCE
} from '../constants/strings'

interface BudgetTimelineFormProps {
    setBudget: any,
    setTimeline: any
}

const BudgetTimelineForm = ({
    setBudget,
    setTimeline
}: BudgetTimelineFormProps) => {

    const [minBudgetValue, setMinBudgetValue] = useState(1000)
    const [maxBudgetValue, setMaxBudgetValue] = useState(3000)
    const [timelineValues, setTimelineValues] = useState<string[]>([])

    useEffect(() => {
        setTimeline(timelineValues)
    }, [timelineValues])

    const onSliderChange = (value: any) => {
        setMinBudgetValue(value[0])
        setMaxBudgetValue(value[1])
        setBudget({
            minBudget: value[0],
            maxBudget: value[1]
        })
    }

    const addTimelineValue = (value: any, timeline: string) => {
        if (!value.checked) {
            setTimelineValues(
                timelineValues.filter(value => value != timeline)
            )
            return
        }
        if (timelineValues.includes(timeline)) return
        setTimelineValues([...timelineValues, timeline])
    }

    const renderTimelineTypes = () => {
        const timelineTypes = [
            {
                name: NEED_URGENT_DELIVERY,
            },
            {
                name: PREFER_MILESTONE_BASED_DELIVERY
            },
            {
                name: SEEKING_LONG_TERM_STABLE_DEVELOPMENT
            },
            {
                name: HAVE_SECURED_CAPITAL
            },
            {
                name: CURRENTLY_RAISING_FUNDS
            },
            {
                name: HAVE_SOME_CAPITAL
            },
            {
                name: PROJECT_IS_ALREADY_UP
            },
            {
                name: STARTING_MY_PROJECT_FROM_SCRATCH
            },
            {
                name: STARTED_DEVELOPMENT_BUT_NEED_ASSISTANCE
            }
        ]
        return timelineTypes.map(timeline => {
            return (
                <label 
                    className='form-check-label inline-block text-solid-black' 
                    htmlFor='flexRadioDefault1'
                    key={timeline.name}
                    onChange={(value) => addTimelineValue(value.target, timeline.name)}
                >
                    <input 
                        className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' 
                        type='checkbox'
                        id={timeline.name} 
                    />
                    { timeline.name }
                </label>
            )
        })
    }
    
    return (
        <div className='BudgetTimelineForm'>
            <div className='grid grid-flow-row auto-rows-max gap-8 w-full md:w-8/12'>
                <Paragraph>
                    {PROJECT_WITH_PROPOSED_BUDGETS}
                </Paragraph>
                <Paragraph variant='m-bold'>
                    {LET_US_KNOW_YOU_PROJECT_TIMELINE}
                </Paragraph>
                <div className='grid grid-cols-2 justify-items-center'>
                    <div>
                        <Paragraph variant='m-bold' color='primary' alignment='text-center'>
                            {MIN}
                        </Paragraph>
                        <Paragraph>
                            {`$${String(minBudgetValue)}`}
                        </Paragraph>
                    </div>
                    <div>
                        <Paragraph variant='m-bold' color='primary' alignment='text-center'>
                            {MAX}
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
                <div className='mt-8'>
                    <Paragraph variant='m-bold'>
                        Let us know your project timeline in terms of years and months
                    </Paragraph>
                </div>
                { renderTimelineTypes() }
            </div>
        </div>
    )
}

export default BudgetTimelineForm