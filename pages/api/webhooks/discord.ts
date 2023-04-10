import BudgetFormProps from '../../../interfaces/BudgetFormProps';
import ContactInformationProps from '../../../interfaces/ContactInformationProps';
import ServiceInformationFormProps from '../../../interfaces/ServiceInformationFormProps';

import {
    NEW_CONSULTATION,
    NAME,
    EMAIL,
    PHONE_NUMBER,
    MAX_BUDGET,
    MIN_BUDGET,
    COMPANY_TYPE,
    PROJECT_GOALS,
    TIMELINE_BUDGET_CONSTRAINTS
} from '../../../constants/strings'

const { Webhook, MessageBuilder } = require('discord-webhook-node');

const hook = new Webhook(process.env.DISCORD_WEBHOOK);

export default async function sendMessage(
    contactInformation: ContactInformationProps, 
    budget: BudgetFormProps, 
    serviceInformation: ServiceInformationFormProps, 
    projectGoals: string, 
    constraints: string
) {
    try {
        const embed = new MessageBuilder()
            .setTitle(NEW_CONSULTATION)
            .addField(NAME, contactInformation.name)
            .addField(EMAIL, contactInformation.email)
            .addField(PHONE_NUMBER, contactInformation.phoneNumber)
            .addField(MAX_BUDGET, budget.maxBudget)
            .addField(MIN_BUDGET, budget.minBudget)
            .addField(COMPANY_TYPE, contactInformation.clientType)
            .addField(PROJECT_GOALS, projectGoals)
            .addField(TIMELINE_BUDGET_CONSTRAINTS, constraints)
            .setDescription(serviceInformation.projectGoal)
            .setColor('#00C2D4')

        hook.send(embed)
    } catch (error: any) {
        console.log(error)
    }
}
