const WEB3FORMS_ACCESS_KEY = '24518c19-201b-44dc-a485-dc34a4d1068a';

export const sendConsultationRequest = async (formData) => {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,

        subject: 'New Consultation Request',
        from_name: 'Website Consultation Form',

        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,

        // Your email where Web3Forms sends the submission
        email_to: 'rehans@usquotehub.com',
      }),
    });

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        message: 'Your consultation request has been sent successfully!',
      };
    }

    return {
      success: false,
      message: result.message || 'Failed to send consultation request.',
    };
  } catch (error) {
    console.error('Web3Forms Error:', error);

    return {
      success: false,
      message: 'Something went wrong. Please try again later.',
    };
  }
};