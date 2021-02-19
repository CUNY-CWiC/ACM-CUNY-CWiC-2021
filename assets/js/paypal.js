paypal.Buttons({
    style:{
        color:'blue',
        shape: 'pill'
    },
    createOrder: function(data, actions){
        return actions.order.create({
            purchase_units:[{
                amount: {
                    value: '10.00'
                }
            }]
        });
    },
    onApprove: function(data, actions){
        return actions.order.capture().then(function(details) {
            alert(details.payer.name.given_name + ", your transaction is completed");
            window.location.replace(href = "success.html")
        })
    },
    onCancel:function(data){
        window.location.replace(href = "")
    }
}).render('#paypal-payment-button');




// paypal.Buttons({
//     createOrder: function(data, actions) {
//       return actions.order.create({
//         purchase_units: [{
//           amount: {
//             value: '200.00'
//           }
//         }]
//       });
//     },
//     onApprove: function(data, actions) {
//       return actions.order.capture().then(function(details) {
//         alert('Transaction completed by ' + details.payer.name.given_name);
//       });
//     }
//   }).render('#paypal-payment-button');