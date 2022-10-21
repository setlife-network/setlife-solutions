import { Selector } from 'testcafe';

fixture`Root`
    .page`${process.env.SITE_URL}`

test('Landing page loads exactly 1 Schedule Consultation button', async t => {
    const scheduleConsultationButton = Selector('.Hero').find('button')
    const buttonExists = scheduleConsultationButton.exists
    const buttonCount = scheduleConsultationButton.count

    await t
        .expect(buttonExists).ok()
        .expect(buttonCount).eql(1);
})