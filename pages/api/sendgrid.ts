import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');

interface emailTemplateProps {
    name: string,
    email: string,
    phoneNumber: string,
    clientType: string,
    services: string[],
    projectGoal: string,
    minBudget: number,
    maxBudget: number,
    timeline: string[]
}

const emailTemplate = ({
    name,
    email,
    phoneNumber,
    clientType,
    services,
    projectGoal,
    minBudget,
    maxBudget,
    timeline
}: emailTemplateProps) => (`
    <p>
        Project Information:
    </p>
    <table>
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Client Type</th>
    </tr>
    <tr>
        <td>${name}</td>
        <td>${email}</td>
        <td>${phoneNumber}</td>
        <td>${clientType}</td>
    </tr>
    </table>
    <p>
        Service Info:
    </p>
    <tr>
        <th>Min Budget</th>
        <th>Max Budget</th>
        <th>Timeline</th>
    </tr>
    <tr>
        <td>${minBudget}</td>
        <td>${maxBudget}</td>
        <td>${timeline.join(', ')}</td>
    </tr>
    <table>
    <tr>
        <th>Service</th>
        <th>Project goal</th>
    </tr>
    <tr>
        <td>${services.join(', ')}</td>
        <td>${projectGoal}</td>
    </tr>
    </table>
`)

async function sendEmail(req: any, res: any) {
    try {
        await sendgrid.send({
            to: 'contributors@setlife.network',
            from: 'contributors@setlife.network',
            subject: `New form received`,
            html: `
                ${emailTemplate({...req.body})}
            `,
        });
    } catch (error: any) {
        return res.status(error.statusCode || 500).json({ error: error.message });
    }
  
    return res.status(200).json({ error: '' });
}
  
export default sendEmail;