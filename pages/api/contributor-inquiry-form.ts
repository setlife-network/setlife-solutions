import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');

interface contributorInquiryEmailTemplateProps {
    name: string,
    email: string,
    linkToWork: string,
    cvUrl: String,
    moreDetails?: string,
}

const emailTemplate = ({
    name,
    email,
    linkToWork,
    moreDetails,
    cvUrl
}: contributorInquiryEmailTemplateProps) => {
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

        <h1>Contributor Inquiry</h1>

        
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Link to Work</th>
                <th>Details</th>
                <th>CV</th>
            </tr>
            <tr>
                <td>${name}</td>
                <td>${email}</td>
                <td>${linkToWork}</td>
                <td>${moreDetails}</td>
                <td>${cvUrl}</td>
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
            subject: `New contributor inquiry received`,
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