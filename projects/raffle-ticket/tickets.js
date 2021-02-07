$(document).ready(() => {
    $('.numTickets').on('change', event =>{
        updateOrder();
    })

    $('.plus-button').on('click', event=>{
        amount=$(event.currentTarget).siblings('.numTickets').val();
        amount++;
        $(event.currentTarget).siblings('.numTickets').val(amount);
        updateOrder();

    })
    $('.minus-button').on('click', event=>{
        amount=$(event.currentTarget).siblings('.numTickets').val();
        if (amount >=1){
            amount--;
            $(event.currentTarget).siblings('.numTickets').val(amount);
        }
        else{
            console.log("NO NEGATIVE TICKETS!!!");
        }
        updateOrder();
    })
    
    //updating amount + description
    var updateOrder = () => {
        var total= 
        Number($('#1ticket').val()*5)
        +Number($('#5ticket').val()*20)
        +Number($('#15ticket').val()*50)
        +Number($('#25ticket').val()*80)
        +Number($('#35ticket').val()*100);
        $('#amount').val(total);

        var tickets = 
        Number($('#1ticket').val()*1)
        +Number($('#5ticket').val()*5)
        +Number($('#15ticket').val()*15)
        +Number($('#25ticket').val()*25)
        +Number($('#35ticket').val()*35)
        + ' tickets for $'
        +total;
        var description = tickets;
        $('#UMdescription').val(description);
    }

});

var keyedsalecommand = 'api/v2/transactions';
var cors ='https://cors-anywhere.herokuapp.com/'
var url='https://sandbox.usaepay.com/';
var endpoint =cors+url+keyedsalecommand;
//Basic Auth: u/pw : _V87Qtb513Cd3vabM7RC0TbtJWeSo8p7 / 123456
//using the test credentials from the API documentation https://help.usaepay.info/developer/rest-api/


var testSaleData = 
    {
    "command": "cc:sale",
    "amount": "5.00",
    "amount_detail": {
        "tax": "1.00",
        "tip": "0.50"
    },
    "creditcard": {
        "cardholder": "Chichi Rodriguez",
        "number": "4000100011112224",
        "expiration": "0221",
        "cvc": "123",
        "avs_street": "1234 Main",
        "avs_zip": "12345"
    },
    "invoice": "12356"
    }


const paymentButton = document.querySelector('#paymentButton');
const responseField = document.querySelector('#responseField');

const addFormData = ()=>{
  const amount =Number(document.getElementById('amount').value);
  const cardNumber =document.getElementById('cardNumber').value;
  const expirationDate =document.getElementById('expirationDate').value;
  const cvc =document.getElementById('cvc').value;

  testSaleData.amount = amount;
  testSaleData.creditcard.number = cardNumber;
  testSaleData.creditcard.expiration = expirationDate;
  testSaleData.creditcard.cvc = cvc;
  console.log(testSaleData);
}

const makePayment = () => {
  addFormData();
  //const paymentData=paymentInput.Value;
  const data= JSON.stringify(testSaleData);
console.log('making payment')
  fetch(endpoint,
    {
      method:'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Basic X1Y4N1F0YjUxM0NkM3ZhYk03UkMwVGJ0SldlU284cDc6czIvYWJjZGVmZ2hpamtsbW5vcC9iNzRjMmZhOTFmYjBhMDk3NTVlMzc3ZWU4ZTIwYWE4NmQyYjkyYzNkMmYyNzcyODBkYjU5NWY2MzZiYjE5MGU2'
        },
      body: data
    })
  .then(response=>{
     if (response.ok){
          return response.json();
          console.log('payment response')

      }
      throw new Error('Request failed!');
  }, (networkError) =>{
      console.log(networkError.message);
    })
    .then(jsonResponse => {
      renderResponse(jsonResponse);
    })

}

//event listeners
const displayPayment = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  makePayment();
}
paymentButton.addEventListener('click', displayPayment);


//codecademy helper functions

// Manipulates responseField to render a formatted and appropriate message
const renderResponse = (res) => {
  // Displays either message depending on results
  var date= new Date();
  var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  console.log(res);
    responseField.innerHTML = 
    `<h3>Transaction Status: ${res.result}</h3>
    <p>Amount: $${res.auth_amount} </p>
    <p>Auth Code: ${res.authcode} </p>
    <p>Date: ${weekDays[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}</p>
    <p><small>*See console for full response [ Option + ⌘ + J (macOS), or Shift + CTRL + J (Windows/Linux) ]</small></p>`;
  
}

