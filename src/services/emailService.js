import emailjs from '@emailjs/browser';

export const sendConsultationRequest = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      company: formData.company || 'Not provided',
      message: formData.message,
      to_email: 'rehanshahzad2023@gmail.com',
    };

    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    return {
      success: true,
      message: 'Your consultation request has been sent successfully!',
      data: response,
    };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return {
      success: false,
      message: 'Failed to send your request. Please try again or contact us directly.',
      error,
    };
  }
};
