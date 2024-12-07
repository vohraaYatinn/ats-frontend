const currentDate = new Date();
const apiKeyEmail = process.env.NEXT_PUBLIC_EMAIL_API_KEY;
const formattedDate = currentDate.toLocaleString(); 
import axios from 'axios';

export const sendEmail = async (name, email, phone, service, message) => {
    const apiKey = apiKeyEmail
    const apiUrl = "https://api.brevo.com/v3/smtp/email";
  
    // Prepare email data
    const emailData = {
      to: [{ email: "holidays@atstourstravels.com" }], // Replace with the recipient's email address
      subject : `ATS new Leads - ${formattedDate}`,
      textContent: "This is the plain text content of your email.",
      htmlContent: `
        <div style=" line-height: 1.6; color: #fff; padding: 20px; background-color: #006370; border-radius: 10px;">
          <h1 style="color: #fff; font-size: 24px; text-align: center;">New Lead Details</h1>
          </div>
          <p style="margin: 8px 0; font-size:20px ; "><strong>Name:</strong> ${name}</p>
          <p style="margin: 8px 0;  font-size:20px ; "><strong>Email:</strong> ${email}</p>
          <p style="margin: 8px 0;  font-size:20px ; "><strong>Phone:</strong> ${phone}</p>
          <p style="margin: 8px 0;  font-size:20px ; "><strong>Service:</strong> ${service}</p>
          <p style="margin: 8px 0;  font-size:20px ; "><strong>Message:</strong> ${message}</p>
      `,
      sender: { email: "holidays@atstourstravels.com", name: "ATS" },
    };
    
  
    try {
      const response = await axios.post(apiUrl, emailData, {
        headers: {
          "api-key": apiKey,
          "Content-Type": "application/json",
        },
      });
  
      console.log("Email sent successfully:", response.data);
      setErrors({});
    } catch (error) {
      console.error("Error sending email:", error);
      // setShowErrorMessage("Failed to send email. Please try again.");
    }
  };

  export const countryCodes = [
    { code: "+1", label: "USA/Canada (+1)" },
    { code: "+7", label: "Russia (+7)" },
    { code: "+20", label: "Egypt (+20)" },
    { code: "+27", label: "South Africa (+27)" },
    { code: "+30", label: "Greece (+30)" },
    { code: "+31", label: "Netherlands (+31)" },
    { code: "+32", label: "Belgium (+32)" },
    { code: "+33", label: "France (+33)" },
    { code: "+34", label: "Spain (+34)" },
    { code: "+36", label: "Hungary (+36)" },
    { code: "+39", label: "Italy (+39)" },
    { code: "+40", label: "Romania (+40)" },
    { code: "+41", label: "Switzerland (+41)" },
    { code: "+44", label: "United Kingdom (+44)" },
    { code: "+45", label: "Denmark (+45)" },
    { code: "+46", label: "Sweden (+46)" },
    { code: "+47", label: "Norway (+47)" },
    { code: "+48", label: "Poland (+48)" },
    { code: "+49", label: "Germany (+49)" },
    { code: "+51", label: "Peru (+51)" },
    { code: "+52", label: "Mexico (+52)" },
    { code: "+53", label: "Cuba (+53)" },
    { code: "+54", label: "Argentina (+54)" },
    { code: "+55", label: "Brazil (+55)" },
    { code: "+56", label: "Chile (+56)" },
    { code: "+57", label: "Colombia (+57)" },
    { code: "+58", label: "Venezuela (+58)" },
    { code: "+60", label: "Malaysia (+60)" },
    { code: "+61", label: "Australia (+61)" },
    { code: "+62", label: "Indonesia (+62)" },
    { code: "+63", label: "Philippines (+63)" },
    { code: "+64", label: "New Zealand (+64)" },
    { code: "+65", label: "Singapore (+65)" },
    { code: "+66", label: "Thailand (+66)" },
    { code: "+81", label: "Japan (+81)" },
    { code: "+82", label: "South Korea (+82)" },
    { code: "+84", label: "Vietnam (+84)" },
    { code: "+86", label: "China (+86)" },
    { code: "+90", label: "Turkey (+90)" },
    { code: "+91", label: "India (+91)" },
    { code: "+92", label: "Pakistan (+92)" },
    { code: "+93", label: "Afghanistan (+93)" },
    { code: "+94", label: "Sri Lanka (+94)" },
    { code: "+95", label: "Myanmar (+95)" },
    { code: "+98", label: "Iran (+98)" },
    { code: "+211", label: "South Sudan (+211)" },
    { code: "+212", label: "Morocco (+212)" },
    { code: "+213", label: "Algeria (+213)" },
    { code: "+216", label: "Tunisia (+216)" },
    { code: "+218", label: "Libya (+218)" },
    { code: "+220", label: "Gambia (+220)" },
    { code: "+221", label: "Senegal (+221)" },
    { code: "+222", label: "Mauritania (+222)" },
    { code: "+223", label: "Mali (+223)" },
    { code: "+224", label: "Guinea (+224)" },
    { code: "+225", label: "Ivory Coast (+225)" },
    { code: "+226", label: "Burkina Faso (+226)" },
    { code: "+227", label: "Niger (+227)" },
    { code: "+228", label: "Togo (+228)" },
    { code: "+229", label: "Benin (+229)" },
    { code: "+230", label: "Mauritius (+230)" },
    { code: "+231", label: "Liberia (+231)" },
    { code: "+232", label: "Sierra Leone (+232)" },
    { code: "+233", label: "Ghana (+233)" },
    { code: "+234", label: "Nigeria (+234)" },
    { code: "+235", label: "Chad (+235)" },
    { code: "+236", label: "Central African Republic (+236)" },
    { code: "+237", label: "Cameroon (+237)" },
    { code: "+238", label: "Cape Verde (+238)" },
    { code: "+239", label: "Sao Tome and Principe (+239)" },
    { code: "+240", label: "Equatorial Guinea (+240)" },
    { code: "+241", label: "Gabon (+241)" },
    { code: "+242", label: "Congo (+242)" },
    { code: "+243", label: "Congo (Democratic Republic) (+243)" },
    { code: "+244", label: "Angola (+244)" },
    { code: "+245", label: "Guinea-Bissau (+245)" },
    { code: "+246", label: "Diego Garcia (+246)" },
    { code: "+248", label: "Seychelles (+248)" },
    { code: "+249", label: "Sudan (+249)" },
    { code: "+250", label: "Rwanda (+250)" },
    { code: "+251", label: "Ethiopia (+251)" },
    { code: "+252", label: "Somalia (+252)" },
    { code: "+253", label: "Djibouti (+253)" },
    { code: "+254", label: "Kenya (+254)" },
    { code: "+255", label: "Tanzania (+255)" },
    { code: "+256", label: "Uganda (+256)" },
    { code: "+257", label: "Burundi (+257)" },
    { code: "+258", label: "Mozambique (+258)" },
    { code: "+260", label: "Zambia (+260)" },
    { code: "+261", label: "Madagascar (+261)" },
    { code: "+262", label: "Reunion (+262)" },
    { code: "+263", label: "Zimbabwe (+263)" },
    { code: "+264", label: "Namibia (+264)" },
    { code: "+265", label: "Malawi (+265)" },
    { code: "+266", label: "Lesotho (+266)" },
    { code: "+267", label: "Botswana (+267)" },
    { code: "+268", label: "Eswatini (+268)" },
    { code: "+269", label: "Comoros (+269)" },
    { code: "+290", label: "Saint Helena (+290)" },
    { code: "+291", label: "Eritrea (+291)" },
    { code: "+297", label: "Aruba (+297)" },
    { code: "+298", label: "Faroe Islands (+298)" },
    { code: "+299", label: "Greenland (+299)" },
  ];