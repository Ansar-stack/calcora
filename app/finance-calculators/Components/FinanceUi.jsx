import React from "react";
import ToolCard from "@/app/components/ToolCard";

const FinanceUi = () => {
  const cards = [
    {
      title: "House Loan EMI Calculator",
      desc: "Calculate your home loan EMI with down payment, interest rate, and tenure. Plan your housing budget accurately.",
      path: "housing-loan-emi-calculator",
    },
    {
      title: "PayPal Commission Calculator",
      desc: "Calculate PayPal fees instantly. See exact amounts received after transaction fees for different payment types.",
      path: "paypal-commission-calculator",
    },
    {
      title: "Rule of 72 Calculator",
      desc: "Calculate years to double your investment based on interest rate. Smart tool for investment planning.",
      path: "rule-of-72-calculator",
    },
    {
      title: "Student Loan Calculator",
      desc: "Calculate student loan repayments and interest. Plan your education debt payoff strategy effectively.",
      path: "student-loan-repayment-calculator",
    },
     {
      title: "Credit Card Payoff Calculator",
      desc: "Calculate credit card payoff timeline and total interest. Plan your debt-free journey strategically.",
      path: "credit-card-payoff-calculator",
    },
    {
      title: "Fixed Deposit Calculator",
      desc: "Calculate FD maturity amount and interest earnings. Plan your fixed deposit investments accurately.",
      path: "fixed-deposit-calculator",
    },
    {
      title: "Retirement Withdrawal Calculator",
      desc: "Calculate sustainable retirement withdrawals. Plan your retirement fund distribution strategy.",
      path: "retirement-savings-withdrawal-calculator",
    },
     {
      title: "Ecommerce Profit Margin",
      desc: "Calculate ecommerce profit margins including costs, fees, and discounts. Optimize your online business pricing.",
      path: "ecommerce-profit-margin-calculator",
    },
     {
      title: "401k Match Calculator",
      desc: "Calculate 401k contributions with employer matching. Plan your retirement savings growth effectively.",
      path: "401k-match-calculator",
    },
    {
      title: "Profit and Loss Calculator",
      desc: "Calculate business profits, losses, and margins. Track financial performance with instant results.",
      path: "profit-and-loss-calculator",
    },
    {
      title: "Credit Card Minimum Payment",
      desc: "Calculate minimum credit card payments and interest. Understand your payment obligations clearly.",
      path: "credit-card-minimum-payment-calculator",
    },
     {
      title: "Coffee Profit Margin Calculator",
      desc: "Calculate coffee shop profit margins. Optimize your café pricing and cost management strategies.",
      path: "coffee-profit-margin-calculator",
    },
  ];
  return (
  <>
    <h2 className="text-[5vw] border-b-[2.5px] ms-5 mt-20 mb-10 border-blue-700 self-start md:text-[3vw] font-semibold tracking-tighter text-blue-700">Finance Calculators</h2>
    <div 
    id="financeCalculators"
    className="max-w-[1200px] px-5 grid grid-cols-1 md:grid-cols-2 
    lg:grid-cols-3 xl:grid-cols-4 place-items-center-safe xl:gap-12 lg:gap-5 gap-5"
    >
      {cards.map((card, index) => (
        <ToolCard
          title={card.title}
          desc={card.desc}
          path={`/finance-calculators/${card.path}`}
          key={index}
        />
      ))}
    </div>
  </>
  );
};

export default FinanceUi;