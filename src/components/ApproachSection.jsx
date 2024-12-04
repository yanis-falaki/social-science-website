import house from '../images/house.jpg'
import worker from '../images/carpenter.jpg'

const ApproachSection = () => {
  return (
    <div className='pt-12 mx-12 h-screen'>
      <h1 className='text-6xl'>Our Two-Step Solution to Ending Homelessness</h1>
      <div className='flex flex-row mt-36'>
        <div className='flex-1'>
          <img src={house} className='rounded-lg h-auto'/>
        </div>
        <div className='mt-2 text-xl flex-1'>
          <div className='ml-20'>
            <h1 className='b font-bold text-5xl text-right'>Affordable Housing</h1>
            <p className='text-right mt-6 text-2xl'>The city of Montreal has a large homeless community, We're here to help them get affordable housing, and obtain work that can sustain them into the future.</p>
            <ul className='list-disc list-inside mt-6'>
              <li className='mb-2'><strong>Improved Stability:</strong> Provides a safe and secure environment for individuals and families.</li>
              <li className='mb-2'><strong>Economic Growth:</strong> Encourages workforce participation and reduces poverty rates.</li>
              <li className='mb-2'><strong>Health Benefits:</strong> Reduces stress and improves overall physical and mental health.</li>
              <li className='mb-2'><strong>Community Development:</strong> Strengthens neighborhoods and fosters a sense of belonging.</li>
              <li className='mb-2'><strong>Reduced Homelessness:</strong> Offers a pathway out of homelessness and prevents recidivism.</li>
              <li className='mb-2'><strong>Lower Public Costs:</strong> Reduces the strain on emergency services, shelters, and healthcare systems.</li>
              <li><strong>Social Equity:</strong> Promotes inclusion and addresses systemic inequalities in housing access.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex flex-row mt-36'>
        <div className='text-xl flex-1'>
          <div className=''>
          <h1 className='b font-bold text-5xl'>Partnered Job Program</h1>
          <p className='mt-6 text-2xl'>We're partnering with local businesses in order to teach employable skills and help our tenants become self-sufficient!</p>
          <ul className='list-disc list-inside mt-6'>
            <li className='mb-2'><strong>Skill Development:</strong> Offers training programs to build valuable, in-demand job skills.</li>
            <li className='mb-2'><strong>Job Placements:</strong> Secures stable employment opportunities through partnerships with local businesses.</li>
            <li className='mb-2'><strong>Mentorship Opportunities:</strong> Connects participants with industry mentors for guidance and support.</li>
            <li className='mb-2'><strong>Financial Independence:</strong> Helps participants achieve self-sufficiency through consistent income.</li>
            <li className='mb-2'><strong>Work Experience:</strong> Provides hands-on experience to build resumes and increase employability.</li>
            <li className='mb-2'><strong>Long-Term Support:</strong> Offers ongoing coaching and resources to ensure sustained employment success.</li>
            <li className='mb-2'><strong>Boosting Confidence:</strong> Empowers individuals with the tools to succeed in their careers and beyond.</li>
          </ul>
          </div>
        </div>
        <div className='flex-1'>
          <img src={worker} className='rounded-lg h-auto ml-20'/>
        </div>
      </div>
    </div>
  );
};

export default ApproachSection;