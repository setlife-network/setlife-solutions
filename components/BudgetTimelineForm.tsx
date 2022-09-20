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
    STARTED_DEVELOPMENT_BUT_NEED_ASSISTANCE,
    PLEASE_SELECT_AT_LEAST_ONE_OPTION,
    SERVICE_PACKAGES,
    TO_GET_A_SENSE
} from '../constants/strings'

interface BudgetTimelineFormProps {
    setBudget: any,
    setTimeline: any,
    defaultBudget: number[],
    setBudgedTimeLineError: any
}

const BudgetTimelineForm = ({
    setBudget,
    setTimeline,
    defaultBudget,
    setBudgedTimeLineError
}: BudgetTimelineFormProps) => {

    const [minBudgetValue, setMinBudgetValue] = useState(defaultBudget[0])
    const [maxBudgetValue, setMaxBudgetValue] = useState(defaultBudget[1])
    const [timelineValues, setTimelineValues] = useState<string[]>([])
    const [timelineValuesError, setTimeLineValuesError] = useState(true)

    useEffect(() => {
        setTimeline(timelineValues)
        setTimeLineValuesError(!timelineValues.length)
    }, [timelineValues])

    useEffect(() => {
        setBudgedTimeLineError(timelineValuesError)
    }, [timelineValuesError])

    const onSliderChange = (value: any) => {
        setMinBudgetValue(value[0])
        setMaxBudgetValue(value[1])
        setBudget({
            minBudget: value[0],
            maxBudget: value[1]
        })
    }

    const addTimelineValue = (timeline: string) => {
        if (timelineValues.includes(timeline)) {
            setTimelineValues(
                timelineValues.filter(value => value != timeline)
            )
            return
        }
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
                <div className='w-fit' onClick={() => addTimelineValue(timeline.name)}>
                    <label 
                        className='form-check-label inline-block text-solid-black' 
                        htmlFor='timelineRadio'
                        key={timeline.name}
                    >
                        <input 
                            className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' 
                            type='checkbox'
                            id={timeline.name}
                            checked={timelineValues.includes(timeline.name)}
                        />
                        { timeline.name }
                    </label>
                </div>
            )
        })
    }
    
    return (
        <div className='BudgetTimelineForm'>
            <div className='grid grid-flow-row auto-rows-max gap-8 w-full md:w-8/12'>
                <Paragraph>
                    <>
                        {PROJECT_WITH_PROPOSED_BUDGETS}
                        <a className='text-primary' href='/service-packages'>
                            {SERVICE_PACKAGES}
                        </a>
                        {TO_GET_A_SENSE}
                    </>
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
                        min={1000}
                        max={100000}
                        defaultValue={[defaultBudget[0], defaultBudget[1]]}
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
                { timelineValuesError && (
                    <span className='px-5 text-red-600'>
                        { PLEASE_SELECT_AT_LEAST_ONE_OPTION }
                    </span>
                )}
            </div>
        </div>
    )
}

export default BudgetTimelineForm