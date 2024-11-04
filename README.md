**Customer-Payment-Application**

A simple web application built using HTML, CSS, and JavaScript that allows a shop vendor to view customer payments through a table. 
Each payment record can be viewed in detail by clicking a "View" button, which triggers a modal to display additional payment information. 
The application retrieves data from the provided API endpoints.

**Features**

Display Payment Data: Payments are displayed in a table format on page load.
View Detailed Payment Information: Each payment row has a "View" button that triggers a modal popup with detailed information about the payment.
API Integration: Fetch payment data using the provided API. Data is filtered by StartDate and EndDate query parameters.
API Endpoints
Retrieve Payment History

**API ENDPOINTS**
URL: https://spes.pscgh.com:442/sales-api/api/Payments
Method: GET

Query Parameters:
StartDate: Start date for payment history retrieval.
EndDate: End date for payment history retrieval.
View Payment Details

URL: https://spes.pscgh.com:442/sales-api/api/Payments/{paymentId}
Method: GET
Parameters:
paymentId: The ID of the specific payment you want to view details for.


**Project Structure**

/customer-payments-app
│
├── index.html              # Main HTML file
├── style.css               # Styles for the table and modal
├── customerPayment.js      # Main JavaScript file handling API calls and UI interactions
└── README.md               # Project readme


**Setup and Installation**

Clone the repository:
git clone https://github.com/your-username/customer-payments.git


Navigate to the project directory:
cd customer-payment
Open index.html in your browser: Simply open the index.html file in a web browser to see the app in action.

**Usage**
Upon loading, the application fetches payment data from the API and displays it in a table format.
Use the "View" button next to each payment to see detailed payment information in a modal popup.
The modal will retrieve the payment details from the API based on the payment's ID.


**Technologies Used**
HTML5: Structure of the web application.
CSS3: Styling the table and modal.
JavaScript (Vanilla): Handling API requests and DOM manipulation.


**Potential Issues**

CORS Errors: Depending on your browser and the server setup, you may encounter CORS (Cross-Origin Resource Sharing) issues when fetching data from the API.
Ensure the server is properly configured to allow cross-origin requests.


**Future Enhancements**
Search and Filter: Implement a feature to search or filter payments based on criteria such as date range, amount, etc.

Pagination: Add pagination to handle large data sets efficiently. 

Enhanced Error Handling: Provide more user-friendly error messages when API requests fail.
Contributing
If you wish to contribute to this project, feel free to fork the repository and submit pull requests.

