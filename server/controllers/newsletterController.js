import NewsletterSubscriber from "../models/NewsletterSubscriber.js";

export const subscribeNewsletter = async (req, res) => {
    try {
        const {email} = req.body;
        if (!email) {
            return res.json({success: false, message: "Email is required"});
        }
        const normalizedEmail = email.toLowerCase().trim();
        const existing = await NewsletterSubscriber.findOne({email: normalizedEmail});
        if (existing) {
            return res.json({success: true, message: "You're already subscribed"});
        }
        await NewsletterSubscriber.create({email: normalizedEmail});
        res.json({success: true, message: "Subscribed successfully"});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
};
