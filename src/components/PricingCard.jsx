import React from "react";

const PricingCard = () => {
  return (
    <>
      <div className="w-full lg:w-[1200px] mx-auto text-center">
        <div>
          <h1 className="text-2xl md:text-5xl text-primary-800 font-bold w-[60%] mx-auto">
            75% Discount! Exclusive to JVZOO! No Monthly Recurring Fees
          </h1>
          <h4 className="text-lg mt-2 mb-5 md:text-3xl">
            (Please select your package below)
          </h4>
        </div>
        <div className="cards-container p-2 sm:p-12 flex flex-col gap-6 lg:grid lg:grid-cols-2 rounded-lg bg-primar-800 pricing ">
          {/* Card starts here */}
          {[1, 2].map((item) => (
            <div className="card hover:scale-[1.05] cursor-pointer transition-transform duration-500 bg-white py-8 px-5">
              <h2 className="text-2xl sm:text-4xl font-semibold text-primary-800">
                Odogwu A.I <br /> Starter Level
              </h2>
              <h4 className="text-lg sm:text-xl font-semibold">
                Writing 30 blogs per month
              </h4>
              <del className="my-3 font-Poppins text-grey-200">
                Regular Price $297
              </del>
              <h4 className="font-Poppins text-xl w-[60%] mx-auto">
                $39 One off payment Launch price special
              </h4>

              <ul className="font-Poppins text-left list-outside list-disc p-4 text-base text-grey-200 flex flex-col gap-2 mt-4">
                <li>Access over 100,000+ prompts built into the software</li>
                <li>
                  ‘1 Click’ Direct access into Jv Zoo, Clickbank and Warrior
                  Affiliate market places
                </li>
                <li>Access over 100,000+ prompts built into the software</li>
                <li>
                  ‘1 Click’ Direct access into Jv Zoo, Clickbank and Warrior
                  Affiliate market places
                </li>
                <li>Access over 100,000+ prompts built into the software</li>
                <li>
                  ‘1 Click’ Direct access into Jv Zoo, Clickbank and Warrior
                  Affiliate market places
                </li>
              </ul>
              <div className="w-full md:w-[90%] rounded-lg overflow-hidden mx-auto h-[200px] bg-slate-600 mt-5 mg:mt-8"></div>
            </div>
          ))}
          {/* Card ends here */}
        </div>
      </div>
    </>
  );
};

export default PricingCard;
