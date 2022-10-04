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
}: emailTemplateProps) => {
    if (timeline.join == undefined) {
        timeline = []
    }

    return (`
        <html>
        <head>
            <style>
                table, th, td {
                border: 1px solid;
                }
            </style>
            </head>
        <body>

        <h1>Service Request</h1>

        <h2>Client Info:</h2>
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

        <h2>Budget & Timeline:</h2>
        <table>
            <tr>
                <th>Min Budget</th>
                <th>Max Budget</th>
                <th>Timeline</th>
            </tr>
            <tr>
                <td>$ ${minBudget}</td>
                <td>$ ${maxBudget}</td>
                <td>
                    <p> ${timeline && timeline.join('</p><p>')} </p>
                </td>
            </tr>
        </table>

        <h2>Project Info:</h2>
        <table>
            <tr>
                <th>Service</th>
                <th>Project goal</th>
            </tr>
            <tr>
                <td>
                    <p> ${services.join('</p><p>')} </p>
                </td>
                <td>${projectGoal}</td>
            </tr>
        </table>


        </body>
        </html>
    `)
}

async function sendEmail(req: any, res: any) {
    try {
        await sendgrid.send({
            to: `${process.env.CONSULTATION_FORM_EMAIL}`,
            from: `${process.env.CONSULTATION_FORM_EMAIL}`,
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