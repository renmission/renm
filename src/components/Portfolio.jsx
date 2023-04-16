import React from 'react'
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {portfolio?.map((project, i) => (
          <PortfolioItem 
            key={i}
            title={project.title}
            imgUrl={project.imgUrl}
            stack={project.stack}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default Portfolio
