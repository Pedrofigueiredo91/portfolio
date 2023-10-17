"use server";
import { validateConfig } from "next/dist/server/config-shared";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
const validateString =(value: unknown) =>{ 
    if (!message || typeof message !== "string") {
        return false;
        }
    return true 
}

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("email");
 
  if(!validateString(senderEmail)){
    return {error: "invalid sender Email"}
  }
  if(!validateString(message)){
    return {
        error: "Invalid message"
    }
  }
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "pedro.figueiredo35@gmail.com",
    subject: "Message from contact form",
    reply_to: senderEmail,
    text: message,
  });
};
