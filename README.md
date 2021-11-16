# Sample Logistics
This app simulates an in-person payment experience on order fulfillment. A dispatch rider delivers the customer's items, ask the customer for their QR code or offline reference which is used as an input on the Paystack Terminal.
The customer reviews the payment details on the Terminal, slots in their card and makes payment.

## Prerequisite
1. **Terminal**
    
    You need a Paystack Terminal to complete the payment flow of this app. Kindly make a request via support@paystack.com

2. **Netlify account**

    Netlify functions was used for all API calls to Paystack. If you want to deploy your copy of this site, you should create s Netlify account.
    
    [<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify">](https://app.netlify.com/start/deploy?repository=https://github.com/PaystackOSS/sample-logistics)
    

## 🚀 Getting started

1.  **Clone  the project**

    ```shell
    git clone git@github.com:PaystackOSS/sample-logistics.git
    ```

2.  **Start developing**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd sample-logistics/
    yarn
    yarn dev
    ```

3.  **Open the code and start customizing!**

    Your site should be running at http://localhost:3000!
    
    You should add your environment variable in your `.env` file. Kindly check the `.env.sample` file  for the required environment variables. 
