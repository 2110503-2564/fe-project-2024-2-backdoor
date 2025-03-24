import React from "react";
// import line2 from "./line-2.svg";

export const Reserve = (): JSX.Element => {
    return (
        <div className="bg-white flex flex-row justify-center w-full">
            <div className="bg-white overflow-hidden w-[1440px] h-[1024px] relative">
                <div className="absolute w-[428px] top-[115px] left-[506px] [font-family:’Imria_serif-Regular', Helvetica] font-normal text-black text-[64px] text-center tracking[0] leading-[normal]">
                    Reserve
                </div>

                <div className="absolute w-[1530px] h-[82px] top-0 -left-8 bg-black">
                    <div className="inline-flex items-center justify-end gap-[var(--variable-collection-spacing-m)] relative top-3 left-[1210px]">
                        <div className="relative w-fit font-body-text font-[number:var(--body-text-font-weight)] text-white text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] whitespace-nowrap [font-style:var(--body-text-font-style)]">
                            Home
                        </div>

                        <button className="all-[unset] box-border flex px-6 py-3.5 relative flex-[0_0_auto] border-2 border-solid border-black items-center justify-center gap-2 rounded-lg shadow-button-shadow">
                            <div className="relative w-fit mt-[-2.00px] [font-family:’Inter-Medium’, Helvetica] font-medium text-white text-xl tracking-[0] leading-[30px] whitespace-nowrap">
                                Sign-in
                            </div>
                        </button>
                    </div>
                </div>

                {/* <img className="absolute w-[1244px] h-[3px] top-[241px] left-0 object-cover" alt="Line" src={line2} /> */}

                <div className="absolute w-[173px] h-[33px] top-[219px] left-[1255px] [font-family:’Inter-Medium’, Helvetica] font-medium text-black tracking-[0] leading-[30px] whitespace-nowrap">
                    your reservation
                </div>

                <div className="absolute w-[626px] h-[610px] top-[308px] left-[407px]">
                    <div className="flex flex-wrap w-[626px] items-start gap-[var(--variable-collection-spacing-SM)] absolute top-0 left-0">
                        <div className="w-[295px] h-20 flex flex-col items-start gap-2 relative">
                            <div className="relative self-stretch mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-black text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
                                First name
                            </div>

                            <div className="flex-1 grow flex items-start gap-2 px-4 py-3 relative self-stretch w-full bg-white rounded-lg border border-solid border-[#dfdfdf] shadow-button-shadow">
                                <div className="relative flex-1 mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-[#828282] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
                                    Jane
                                </div>
                            </div>
                        </div>

                        <div className="w-[297px] h-20 flex flex-col items-start gap-2 relative">
                            <div className="relative self-stretch mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-black text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
                                Last name
                            </div>

                            <div className="flex-1 grow flex items-start gap-2 px-4 py-3 relative self-stretch w-full bg-white rounded-lg border border-solid border-[#dfdfdf] shadow-button-shadow">
                                <div className="relative flex-1 mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-[#828282] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
                                    Doh
                                </div>
                            </div>
                        </div>

                        <div className="w-[626px] h-20 flex flex-col items-start gap-2 relative">
                            <div className="relative self-stretch mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-black text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
                                Contact Number
                            </div>

                            <div className="flex-1 grow flex items-start gap-2 px-4 py-3 relative self-stretch w-full bg-white rounded-lg border border-solid border-[#dfdfdf] shadow-button-shadow">
                                <div className="relative flex-1 mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-[#828282] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
                                    000-000-0000
                                </div>
                            </div>
                        </div>

                        <div className="w-[626px] h-20 flex flex-col items-start gap-2 relative">
                            <div className="relative self-stretch mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-black text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
                                Date
                            </div>

                            <div className="flex-1 grow flex items-start gap-2 px-4 py-3 relative self-stretch w-full bg-white rounded-lg border border-solid border-[#dfdfdf] shadow-button-shadow">
                                <div className="relative flex-1 mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-[#828282] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
                                    00-00-0000
                                </div>
                            </div>
                        </div>

                        <div className="w-[626px] h-20 flex flex-col items-start gap-2 relative">
                            <div className="relative self-stretch mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-black text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
                                Return date
                            </div>

                            <div className="flex-1 grow flex items-start gap-2 px-4 py-3 relative self-stretch w-full bg-white rounded-lg border border-solid border-[#dfdfdf] shadow-button-shadow">
                                <div className="relative flex-1 mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-[#828282] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
                                    00-00-0000
                                </div>
                            </div>
                        </div>

                        <div className="w-[626px] h-20 flex flex-col items-start gap-2 relative">
                            <div className="relative self-stretch mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-black text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
                                Select car
                            </div>

                            <input
                                className="h-12 px-4 py-3 relative self-stretch w-full bg-white rounded-lg border border-solid border-[#dfdfdf] shadow-button-shadow flex-1 mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-black text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]"
                                placeholder="Enter car"
                                type="string"
                            />
                        </div>
                    </div>

                    <button className="all-[unset] box-border flex w-[626px] px-8 py-4 absolute top-[548px]">
                        <div>Submit</div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Reserve; 
