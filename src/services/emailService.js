const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export const sendConsultationRequest = async (formData) => {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "New Consultation Request",
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "Not provided",
        company: formData.company || "Not provided",
        message: formData.message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        message: "Your consultation request has been sent successfully!",
      };
    }

    return {
      success: false,
      message: result.message || "Failed to send your request.",
    };
  } catch (error) {
    console.error("Web3Forms Error:", error);

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
};