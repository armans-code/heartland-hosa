import React from 'react';

function Resources() {
    return (
        <div className="w-10/12 mx-auto flex flex-col items-center">
            <p className="text-purple-400 font-semibold text-[12px] mt-4">
                DATES / RESOURCES
            </p>


            <div class="mt-12 shadow-xl overflow-hidden bg-white lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
                <div class="lg:w-1/2">
                    <img
                        className="h-64 bg-cover lg:h-full"
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt=""
                    />
                </div>

                <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                    <h2 class="text-2xl font-bold text-gray-800 md:text-3xl">
                        HOSA Heartland{' '}
                        <span class="text-blue-500">Regionals</span>
                    </h2>

                    <h4 class="font-semibold mt-3">February 4rd, 2024</h4>

                    <p class="mt-4 text-gray-500">
                        Heartland's regional conference will take place at Winter Haven High School from 8:30AM to 4:00 PM this year. You will not be required to have any digital uploads. The competitor must bring all items to be judged at the event!
                    </p>

                    <div class="inline-flex w-full mt-6 sm:w-auto">
                        <div class="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-400 rounded-lg">
                            Approaching...
                        </div>
                    </div>
                </div>
            </div>

            <div class="h-full mt-12 shadow-xl bg-white lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
                <div class="lg:w-1/2">
                    <img
                        className="h-64 bg-cover lg:h-full lg:rounded-l-xl"
                        src="https://images.unsplash.com/photo-1626125345510-4603468eedfb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />
                </div>

                <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                    <h2 class="text-2xl font-bold text-gray-800 md:text-3xl">
                        Florida{' '}
                        <span class="text-blue-500">
                            State Leadership Conference
                        </span>
                    </h2>

                    <h4 class="font-semibold mt-3">April 4th - 6th, 2024</h4>

                    <p class="mt-4 text-gray-500">
                        Florida's State Leadership Conference (SLC) is the largest Florida HOSA event of the year, with
                        thousands of students from all over the state competing in
                        a variety of events. This year, the conference will be
                        held in Orlando, Florida.
                    </p>

                    <div class="inline-flex w-full mt-6 sm:w-auto">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.flhosa.org/conferences/state-leadership-conference-slc/"
                            class="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>


            
            </div>        
    );
}

export default Resources;
