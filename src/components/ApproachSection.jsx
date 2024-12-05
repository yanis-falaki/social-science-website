import house from '../images/house.jpg'
import worker from '../images/carpenter.jpg'

const ApproachSection = () => {
  return (
    <div className='py-24 px-12'>
      <h1 className='text-5xl md:text-6xl text-center mb-16'>Our Two-Step Solution to Ending Homelessness</h1>
      
      {/* First Section: Affordable Housing */}
      <div className='flex flex-col md:flex-row items-center gap-12 mb-24'>
        <div className='flex-1'>
          <img 
            src={house} 
            alt="Affordable Housing" 
            className='rounded-lg w-full h-auto object-cover shadow-glow-mtl'
          />
        </div>
        <div className='flex-1'>
          <h2 className='font-bold text-4xl md:text-5xl text-center md:text-right mb-6'>Affordable Housing</h2>
          <p className='text-xl text-center md:text-right mb-6'>
            The city of Montreal has a large homeless community. We're here to help them get affordable housing, and obtain work that can sustain them into the future.
          </p>
          <ul className='list-disc list-inside space-y-2 text-lg'>
            {[
              { label: 'Improved Stability', desc: 'Provides a safe and secure environment for individuals and families.' },
              { label: 'Economic Growth', desc: 'Encourages workforce participation and reduces poverty rates.' },
              { label: 'Health Benefits', desc: 'Reduces stress and improves overall physical and mental health.' },
              { label: 'Community Development', desc: 'Strengthens neighborhoods and fosters a sense of belonging.' },
              { label: 'Reduced Homelessness', desc: 'Offers a pathway out of homelessness and prevents recidivism.' },
              { label: 'Lower Public Costs', desc: 'Reduces the strain on emergency services, shelters, and healthcare systems.' },
              { label: 'Social Equity', desc: 'Promotes inclusion and addresses systemic inequalities in housing access.' }
            ].map((item, index) => (
              <li key={index} className='mb-2'>
                <strong>{item.label}:</strong> {item.desc}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Second Section: Partnered Job Program */}
      <div className='flex flex-col-reverse md:flex-row items-center gap-12'>
        <div className='flex-1'>
          <h2 className='font-bold text-4xl md:text-5xl text-center md:text-left mb-6'>Partnered Job Program</h2>
          <p className='text-xl text-center md:text-left mb-6'>
            We're partnering with local businesses in order to teach employable skills and help our tenants become self-sufficient!
          </p>
          <ul className='list-disc list-inside space-y-2 text-lg'>
            {[
              { label: 'Skill Development', desc: 'Offers training programs to build valuable, in-demand job skills.' },
              { label: 'Job Placements', desc: 'Secures stable employment opportunities through partnerships with local businesses.' },
              { label: 'Mentorship Opportunities', desc: 'Connects participants with industry mentors for guidance and support.' },
              { label: 'Financial Independence', desc: 'Helps participants achieve self-sufficiency through consistent income.' },
              { label: 'Work Experience', desc: 'Provides hands-on experience to build resumes and increase employability.' },
              { label: 'Long-Term Support', desc: 'Offers ongoing coaching and resources to ensure sustained employment success.' },
              { label: 'Boosting Confidence', desc: 'Empowers individuals with the tools to succeed in their careers and beyond.' }
            ].map((item, index) => (
              <li key={index} className='mb-2'>
                <strong>{item.label}:</strong> {item.desc}
              </li>
            ))}
          </ul>
        </div>
        <div className='flex-1'>
          <img 
            src={worker} 
            alt="Partnered Job Program" 
            className='rounded-lg w-full h-auto object-cover shadow-glow-mtl'
          />
        </div>
      </div>
    </div>
  );
};

export default ApproachSection;