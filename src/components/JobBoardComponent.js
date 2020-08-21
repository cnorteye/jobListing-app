import React from 'react';


const JobBoardComponent = ({  
    job: {
    company, 
    logo,
    isNew,
    featured, 
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
} 
}) => {
        const tags = [role, level];

        if(languages) {
            tags.push(...languages);
        }

        if(tools) {
            tags.push(...tools);
        }

        return(
        <div className='flex bg-white shadow-lg m-4 p-6 rounded'> 
        <div>
        <img src={logo} alt={company} />
        </div>
        <div className="flex flex-col justify-between ml-2">
          <h3 className="font-bold text-teal-500">{company} {isNew && (
           <span className='bg-teal-500 text-teal-100 font-bold m-2 py-1 px-2 rounded-full'>New</span>)} 
          {isNew && (
          <span className='bg-gray-900 text-white font-bold py-1 px-2 rounded-full'>Featured</span>)}</h3>
          <h2 className='font-bold text-xl'>{position}</h2>
          <p className='text-gray-700'>
              {postedAt} · {contract} · {location}
          </p>
         </div>
        
        <div className='flex items-center ml-auto'>
            {tags ? tags.map((tag) => <span className='text-teal-500 bg-teal-100 font-bold m-2 p-2 rounded'>{tag}</span>) : ''}
        </div>
        </div>   
        )
   
    }

export default JobBoardComponent;