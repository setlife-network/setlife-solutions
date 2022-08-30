import Paragraph from './Paragraph'

const BudgetTimelineForm = () => {
    
    return (
        <div className='BudgetTimelineForm'>
            <div className='grid grid-flow-row auto-rows-max gap-8 w-full md:w-6/12'>
                <Paragraph>
                    Projects with proposed budgets exceeding $15,000 will recieve a free consultation. Projects below the threshold will be charged $50 an hour for the consultation. Please see our service packages to get a sense of how much to budget for your projects.
                </Paragraph>
                <Paragraph variant='m-bold'>
                    Let us know your project timeline in terms of years and months
                </Paragraph>

            </div>
        </div>
    )
}

export default BudgetTimelineForm