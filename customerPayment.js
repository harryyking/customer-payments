

document.addEventListener('DOMContentLoaded', ()=> {
    const paymentTableBody = document.querySelector("#paymentTable tbody");
    const paymentModal = document.getElementById('paymentModal');   
    const closeModalButton = document.querySelector('.close-btn');
    const paymentDetails = document.getElementById('paymentDetails')


// On page load, fetch payments
fetchPayments();


async function fetchPayments() {
    try {
        const startDate = '1970-01-01';  
        const endDate = '1970-11-04';    
        const url = `https://spes.pscgh.com:442/sales-api/api/Payments?StartDate=${startDate}&EndDate=${endDate}`;
        
        console.log("Fetching url:", url);

        const response = await fetch(url);


        if(!response.ok){
            throw new Error(`HTTP Error status: ${response.status}`);
        }

        const data = await response.json();
        populateTable(data);
    } catch (error) {
        console.error('Error fetching payments:', error);
    }
}

// populate Table and include button to fetch payment
function populateTable(payments){
    paymentTableBody.innerHTML ='';

    payments.forEach(payment => {
        const row = document.createElement('tr');
        row.innerHTML = `
                 <td>${payment.PaymentId}</td>
               <td>${payment.PaymentNumber}</td>
                <td>${payment.CustomerId}</td>
               <td>${payment.Customer}</td>
              <td>${payment.Amount}</td>
                <td>${payment.PaymentDate}</td>
                
                <td><button class="view-btn" data-id="${payment.PaymentId}">View</button></td>
            `;
            paymentTableBody.appendChild(row);
    });

    paymentTableBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-btn')) {
            const paymentId = e.target.getAttribute('data-id');
            fetchPaymentDetails(paymentId);
        }
    });
}


// fetch payment details 
async function fetchPaymentDetails(paymentId){
    try {
        const url =  `https://spes.pscgh.com:442/sales-api/api/Payments/${paymentId}`;
        const response = await fetch(url);
        const payment = await response.json();
        displayPaymentDetails(payment);
    } catch (error) {
        console.error('Error fetching payment details:', error)
        
    }
}

// display payment details in modal 
function displayPaymentDetails(payment){
    document.getElementById("item-1").innerHTML = `
    <h3>Payment Id:</h3>
    <p>${payment.Id}</p>
    `;

    document.getElementById("item-2").innerHTML = `
    <h3>Payment Number:</h3>
    <p>${payment.PaymentNumber}</p>
     `;

    document.getElementById("item-3").innerHTML = `
    <h3>Payment Number:</h3>
    <p>${payment.AmountPaid}</p>
    `;

    document.getElementById("item-4").innerHTML = `
    <h3>Amount Paid:</h3>
    <p>${payment.CustomerId}</p>
    `;

    document.getElementById("item-5").innerHTML = `
    <h3>Amount Paid:</h3>
    <p>${payment.UserId}</p>
    `;

    document.getElementById("item-6").innerHTML = `
    <h3>Amount Paid:</h3>
    <p>${payment.Customer}</p>
    `;

    document.getElementById("item-7").innerHTML = `
    <h3>Amount Paid:</h3>
    <p>${payment.Remarks}</p>
    `;

    document.getElementById("item-8").innerHTML = `
    <h3>Amount Paid:</h3>
    <p>${payment.onAccount}</p>
    `;

    document.getElementById("item-9").innerHTML = `
    <h3>Amount Paid:</h3>
    <p>${payment.CreatedAt}</p>
    `;
    document.getElementById("item-10").innerHTML = `
    <h3>Amount Paid:</h3>
    <p>${payment.Status}</p>
`;

// Check if payee, mode of payments and invoices exists before

if (payment.ModeOfPayments) {
    const payDisplay = document.getElementById("pay-display").querySelector("tr");
    payDisplay.innerHTML = `
        <td>${payment.ModeOfPayments.ModeOfPayment || 'N/A'}</td>
        <td>${payment.ModeOfPayments.Amount || 'N/A'}</td>
        <td>${payment.ModeOfPayments.AccountId || 'N/A'}</td>
        <td>${payment.ModeOfPayments.BankId || 'N/A'}</td>
        <td>${payment.ModeOfPayments.Account || 'N/A'}</td>
        <td>${payment.ModeOfPayments.Bank || 'N/A'}</td>
        <td>${payment.ModeOfPayments.Reference || 'N/A'}</td>
    `;
}


if (payment.invoices) {
    const invDisplay = document.getElementById("inv-display").querySelector("tr");
    invDisplay.innerHTML = `
        <td>${payment.invoices.Id || 'N/A'}</td>
        <td>${payment.invoices.InvoiceNumber || 'N/A'}</td>
        <td>${payment.invoices.TotalAmount || 'N/A'}</td>
        <td>${payment.invoices.Outstanding || 'N/A'}</td>
        <td>${payment.invoices.InvoiceDate || 'N/A'}</td>
        <td>${payment.invoices.InvoiceStatus || 'N/A'}</td>
    `;
}


if (payment.Payee) {
    const yeeDisplay = document.getElementById("yee-display").querySelector("tr");
    yeeDisplay.innerHTML = `
        <td>${payment.Payee.FullName || 'N/A'}</td>
        <td>${payment.Payee.Phone || 'N/A'}</td>
        <td>${payment.Payee.Email || 'N/A'}</td>
        <td>${payment.Payee.Address || 'N/A'}</td>
    `;
}
        paymentModal.style.display = 'block';

}


// Close modal when close button is clicked 
closeModalButton.addEventListener('click', () => {
    paymentModal.style.display = 'none';
});



// close modal when clicking outside the modal 
window.addEventListener('click', (e) => {
    if(e.target == paymentModal){
        paymentModal.style.display = 'none';
    }
}
)

// sorting / filtering 


})
