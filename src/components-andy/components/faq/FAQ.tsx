import React, { useState } from "react";

const Faq = () => {
 const accordionData = [
   {
     title: "What is Kusaidia?",
     content:
       "Kusaidia is a secure and user-friendly platform that allows you to send money to any Web3 account seamlessly. It simplifies crypto transactions, making them fast, safe, and hassle-free.",
   },
   {
     title: "How do I send money using Kusaidia?",
     content:
       "To send money, simply connect your Web3 wallet, enter the recipient's wallet address, choose the amount, and confirm the transaction. Our platform ensures quick and secure transfers.",
   },
   {
     title: "Is Kusaidia secure?",
     content:
       "Yes! Security is our top priority. We use blockchain encryption and smart contract technology to ensure your transactions are safe and your funds remain protected.",
   },
   {
     title: "What cryptocurrencies does Kusaidia support?",
     content:
       "Kusaidia supports a wide range of cryptocurrencies, including Ethereum (ETH), USDC, Bitcoin (BTC), and other major digital assets. We continuously add support for more coins based on demand.",
   },
   {
     title: "Are there any fees for using Kusaidia?",
     content:
       "Kusaidia keeps fees minimal. While we don’t charge hidden fees, standard blockchain gas fees may apply depending on the network congestion at the time of your transaction.",
   },
 ];


  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionToggle = (index: any) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  
  return (
    <div className="w-[80vw] mx-auto h-[90vh] mt-20 gap-6 flex flex-row">
      <div className="w-1/2 p-6">
        <h1 className="text-5xl font-bold">We are here to assist you</h1>
        <p className="my-6 text-gray-600">
          For specific shipping-related information and any additional
          questions, refer to our Shipping FAQs or reach out to our customer
          service team.
        </p>
        <div className="mt-6 space-y-4">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <button
                className={`w-full text-left px-4 py-3 font-medium text-black transition-all ${
                  openAccordion === index ? "" : "collapsed"
                }`}
                onClick={() => handleAccordionToggle(index)}
              >
                {item.title}
              </button>
              <div
                className={`transition-all overflow-hidden ${openAccordion === index ? "max-h-40 p-4 bg-gray-100" : "max-h-0"}`}
              >
                <p className="text-gray-700">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center relative">
=        <div
          className="w-[19vw] h-[57vh] bg-cover bg-center rounded-2xl absolute left-[1vw] top-[14vh] -rotate-12 z-10 shadow-lg"
          style={{ backgroundImage: "url('/faq-one.jpg')" }}
        ></div>
        <div
          className="w-[22vw] h-[75vh] bg-cover bg-center rounded-2xl absolute z-0 shadow-md"
          style={{ backgroundImage: "url('/faq-two.jpg')" }}
        ></div>
      </div>
    </div>
  );
};

export default Faq;
