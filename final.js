let li = document.getElementsByTagName('ul') [0];
let purchaseBox = document.getElementById("Purchases");
let purchaseButton = document.getElementById("addPurchase");
let purchases = document.getElementById("purchaseList");
var income = document.getElementById("Income");
var incomeButton = document.getElementById("addIncome");
let totalIncome = " ";
let parentIncome = document.getElementById("totalIncome");
let editIncome = document.createElement('button');
let fullIncome = 0;
let editbox = document.createElement('input');
editbox.type = "text";
editIncome.className = 'btn btn-danger';
var donateButton = document.getElementById("donateIncome");

// above are the vars that I will be utilizing alongisde the ID's I created in my HTML in order to create a graph and to add the numbers the user has input into the text bars which I created in my HTML.

class BudgetingTool {
    constructor() {
        this.user = new ToolUser();
    }
    storeUserIncome() {
        totalincome = income.value;
        fullIncome = fullIncome + Number.parseInt(totalIncome);
        parentIncome.textContent = fullIncome;
        parentIncome.appendChild(editIncome).textContent = "Edit Income";

    }
    editIncome(){
        parentIncome.removeChild(editIncome);
        parentIncome.appendChild(incomeButton);
        parentIncome.appendChild(income);
        income.value = "";

    }
    storeUserPurchases(){
        let list = document.createElement('li');
        purchaseBox.textContent = "";
        list.textContent = purchaseBox.value;
        purchases.appendChild(list);

    }
    graphHistory(){
        let secT = fullIncome- Number.parseInt(purchases.firstElementChild.textContent);
        let thiT = secT - Number.parseInt(purchases.children[1].textContent);
        let fouT = thiT - Number.parseInt(purchases.children[2].textContent);
        let fifT = fouT - Number.parseInt(purchases.children[3].textContent);

                var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // This variable is set to the type of chart I want to create
    type: 'line',

    // The var below will collect data that the user has put into their account history and a graph will apear using the data collected from their input.
    data: {
        labels: ['Starting Income', 'Second Transacton', 'Third Transacton', 'Fourth Transacton', 'Fifth Transacton'],
        datasets: [{
            label: 'Account History',


            backgroundColor: 'rgb(100, 100, 200)',
            borderColor: 'rgb(10, 10, 200)',
            data: [ fullIncome, secT, thiT , fouT, fifT ]

        }]
    },

    // Configuration options go here
    options: {}
});
    }

}

class ToolUser {
    constructor(){
    }
}

let bt = new BudgetingTool();


editIncome.addEventListener('click', () => {
    bt.editIncome();
     totalIncome = "";
});


incomeButton.addEventListener('click', () => {
    bt.storeUserIncome();
});


purchaseButton.addEventListener('click', () => {
    bt.storeUserPurchases();
})

let graphingButton = document.getElementById("graphing");

graphingButton.addEventListener('click', () => {
    bt.graphHistory();

})




