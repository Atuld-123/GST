function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  const data = e.parameter;

  sheet.appendRow([
    data.name,
    data.email,
    data.phone,
    data.message,
    new Date()
  ]);

  // Send WhatsApp message using CallMeBot
  const message = `🚛 New Website Lead!\n\n👤 Name: ${data.name}\n📧 Email: ${data.email}\n📞 Phone: ${data.phone}\n💬 Message: ${data.message}`;
  const phone = '917300681149'; // Your WhatsApp number with country code
  const apikey = 'YOUR_CALLMEBOT_API_KEY'; // Get from callmebot.com

  const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(message)}&apikey=${apikey}`;
  UrlFetchApp.fetch(url);

  return ContentService.createTextOutput("Success");
}
