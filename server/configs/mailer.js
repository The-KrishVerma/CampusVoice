import nodemailer from "nodemailer";

const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    EMAIL_FROM,
} = process.env;

const mailer = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: String(SMTP_SECURE).toLowerCase() === 'true',
    auth: SMTP_USER && SMTP_PASS ? {user: SMTP_USER, pass: SMTP_PASS} : undefined,
});

export const sendMail = async ({to, subject, html}) => {
    if (!SMTP_HOST || !EMAIL_FROM) {
        throw new Error('SMTP configuration missing in environment');
    }
    return mailer.sendMail({
        from: EMAIL_FROM,
        to,
        subject,
        html,
    });
};
