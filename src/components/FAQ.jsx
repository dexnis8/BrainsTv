/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from "react-accessible-accordion";
// import "react-accessible-accordion/dist/fancy-example.css";
import "./FaqStyles.css";

const faqs = [
  {
    id: 1,
    header: " What is FlexiPay?",
    text: ` FlexiPay is an e-commerce platform that allows users to purchase items and pay for them in convenient instalments.`,
  },
  {
    id: 2,
    header: "How does FlexiPay's instalment payment system work?",
    text: `Customers can buy products and make payments in instalments. Goods are delivered when the customer pays up to 50% of the product cost, provided they've paid promptly and haven't missed any payments.`,
  },
  {
    id: 3,
    header: "What happens if I miss payments?",
    text: ` If you accumulate up to seven days of missed payments, you won't receive the product at the midpoint of the instalments. You'll need to complete the full payment before receiving the product.
    `,
  },
  {
    id: 4,
    header: "What if I can't make payments after receiving the product? ",
    text: ` If you're unable to make payments after receiving the product, you're expected to return it to FlexiPay before accumulating seven days of missed payments.
    `,
  },
  {
    id: 5,
    header: `Can I use funds from cancelled subscriptions for other products? `,
    text: `Yes, funds from cancelled subscriptions can be used to subscribe to another product. Alternatively, you can request a refund, which will be processed after 30 days from the time of the request.
    `,
  },
  {
    id: 6,
    header: `How do I cancel my subscription?`,
    text: ` You can cancel your subscription at any time, but please note that cancellations come at a charge. You need to accept the cancellation charge before the cancellation is completed.
    `,
  },
  {
    id: 7,
    header: `Can I withdraw funds from my wallet?`,
    text: `No, funds in your wallet are not withdrawable. You can only use them to subscribe to a product.
    `,
  },
  {
    id: 8,
    header: ` How is the delivery process managed?`,
    text: `Customers must be available at their registered and verified address to receive the product during delivery. Delivery is done only after customer verification.
    `,
  },
];

const AccordionItem = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  return (
    <section className="rc-accordion-card" id="faq">
      <div className="rc-accordion-header">
        <div
          className={`rc-accordion-toggle p-3 ${active === id ? "active" : ""}`}
          onClick={() => handleToggle(id)}
        >
          <h5 className="rc-accordion-title">{header}</h5>
          <i className="fa fa-chevron-down rc-accordion-icon"></i>
        </div>
      </div>
      <div
        ref={contentEl}
        className={` text-[#474747] rc-collapse ${active === id ? "show" : ""}`}
        style={
          active === id
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="rc-accordion-body">
          <p className="mb-0">{text}</p>
        </div>
      </div>
    </section>
  );
};
const NewFAQs = ({ faqRef }) => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <>
      <div className="container rounded-lg shadow w-full lg:w-[1000px] font-Poppins mx-auto bg-white">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h4
                  className="capitalize font-DarkerGrotesque font-bold text-2xl text-primary-800  sm:text-4xl my-4 mx-2"
                  ref={faqRef}
                >
                  Frequently Asked Questions (FAQs)
                </h4>
                {faqs.map((faq, index) => {
                  return (
                    <AccordionItem
                      key={index}
                      active={active}
                      id={faq.id}
                      handleToggle={handleToggle}
                      faq={faq}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const FAQs = () => {
  return <NewFAQs />;
  //   return <OldFAQs />;
};

export default FAQs;

// function OldFAQs() {
//   return (
//     <div className="bg-white rounded-md pt-2">
//       <p className="capitalize font-medium text-sm  sm:text-lg my-4 mx-2">
//         Frequently Asked Questions (FAQs)
//       </p>
//       <Accordion allowZeroExpanded>
//         {faqs.map((item) => (
//           <AccordionItem key={item.uuid}>
//             <AccordionItemHeading>
//               <AccordionItemButton>{item.heading}</AccordionItemButton>
//             </AccordionItemHeading>
//             <AccordionItemPanel>
//               <p className="text-grey-1300">{item.content}</p>
//             </AccordionItemPanel>
//           </AccordionItem>
//         ))}
//       </Accordion>
//       <p className="text-center text-xs sm:text-sm text-grey-1300 py-3">
//         If you have additional questions or encounter any issues, you can reach
//         out to FlexiPay's customer support for assistance.
//       </p>
//     </div>
//   );
// }
