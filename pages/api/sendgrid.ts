import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');

interface emailTemplateProps {
    name: string,
    email: string,
    phoneNumber: string,
    clientType: string
}

const emailTemplate = ({
    name,
    email,
    phoneNumber,
    clientType
}: emailTemplateProps) => (`
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