import React from 'react';
import TeamMemberCard from '../components/MeetTheTeam/TeamMemberCard';
import { TEAM_MEMBERS } from '../assets/TEAM_LIST';

function MeetTheTeam() {
    return (
        <div className='w-10/12 flex flex-col items-center mx-auto'>
            <p className='text-purple-400 mt-4 font-semibold text-[12px]'>
                MEET THE TEAM
            </p>
            <div className='mt-12'>
                {/* <TeamMemberCard
                    fullName="Elizabeth Hileman"
                    title="Regional Advisor"
                    // image={rishabh}
                    instagramLink="https://www.instagram.com/rishabhk.exe/"
                    description="Hello Heartland HOSA! I am so excited to serve as your regional President for the 2022-2023 year. Nothing makes me more excited about HOSA than meeting you, hearing your stories, your dreams, and your goals. Please reach out to me if you ever have any questions."
                /> */}
            </div>
            <div class='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2'>
                {TEAM_MEMBERS.map((member) => (
                    <TeamMemberCard member={member} />
                ))}
            </div>
        </div>
    );
}

export default MeetTheTeam;
