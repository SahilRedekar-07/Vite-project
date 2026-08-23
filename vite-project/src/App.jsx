import React from 'react'
import CardUi from './components/CardUi'
import './CardUi.css'
import './App.css'


const jobs = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://cdn.simpleicons.org/amazon",
    posted: "5 days ago",
    title: "Senior UI/UX Designer",
    jobType: "Part-time",
    level: "Senior level",
    salary: "$120/hr",
    location: "Work from Home"
  },
  {
    id: 2,
    company: "Google",
    logo: "https://cdn.simpleicons.org/google",
    posted: "2 days ago",
    title: "Frontend Developer",
    jobType: "Full-time",
    level: "Junior level",
    salary: "$95/hr",
    location: "Bangalore, India"
  },
  {
    id: 3,
    company: "Microsoft",
    logo: "https://cdn.simpleicons.org/microsoft",
    posted: "1 day ago",
    title: "React Developer",
    jobType: "Full-time",
    level: "Mid level",
    salary: "$110/hr",
    location: "Hyderabad, India"
  },
  {
    id: 4,
    company: "Meta",
    logo: "https://cdn.simpleicons.org/meta",
    posted: "4 days ago",
    title: "Software Engineer",
    jobType: "Full-time",
    level: "Senior level",
    salary: "$135/hr",
    location: "Work from Home"
  },
  {
    id: 5,
    company: "Apple",
    logo: "https://cdn.simpleicons.org/apple",
    posted: "3 days ago",
    title: "iOS Developer",
    jobType: "Full-time",
    level: "Mid level",
    salary: "$125/hr",
    location: "Mumbai, India"
  },
  {
    id: 6,
    company: "Netflix",
    logo: "https://cdn.simpleicons.org/netflix",
    posted: "6 days ago",
    title: "UI/UX Designer",
    jobType: "Part-time",
    level: "Junior level",
    salary: "$85/hr",
    location: "Work from Home"
  },
  {
    id: 7,
    company: "Amazon",
    logo: "https://cdn.simpleicons.org/amazon",
    posted: "7 days ago",
    title: "Backend Developer",
    jobType: "Full-time",
    level: "Senior level",
    salary: "$115/hr",
    location: "Pune, India"
  },
  {
    id: 8,
    company: "Google",
    logo: "https://cdn.simpleicons.org/google",
    posted: "2 days ago",
    title: "Data Analyst",
    jobType: "Part-time",
    level: "Junior level",
    salary: "$75/hr",
    location: "Bangalore, India"
  },
  {
    id: 9,
    company: "Microsoft",
    logo: "https://cdn.simpleicons.org/microsoft",
    posted: "5 days ago",
    title: "Cloud Engineer",
    jobType: "Full-time",
    level: "Senior level",
    salary: "$130/hr",
    location: "Chennai, India"
  },
  {
    id: 10,
    company: "Meta",
    logo: "https://cdn.simpleicons.org/meta",
    posted: "3 days ago",
    title: "Product Designer",
    jobType: "Part-time",
    level: "Mid level",
    salary: "$100/hr",
    location: "Work from Home"
  }
];



const App = () => {
  return (
    <div className='Parent'>
 {jobs.map(function(elem)
 { return <CardUi company={elem.company} logo={elem.logo} posted={elem.posted} title={elem.title} jobType={elem.jobType} level={elem.level} salary={elem.salary} location={elem.location}/> }

)}
  
     
      </div>
  )
} 

export default App








{/* <CardUi img="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg" title="Amazon" description="Senior UI/UX Designer" salary="$120/hr"/>
    <CardUi img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1iQY-eq57eJu8wDzsAvmPcYz2eHFXgxRsgYqR0ojp6A&s" title="Google" description="Software Engineer" salary=""/>
    <CardUi img="https://static.dezeen.com/uploads/2021/11/meta-facebook-rebranding-name-news_dezeen_2364_col_hero2-1024x441.jpg" title="Meta" description="Debugger" salary="$50/hr"/>
    <CardUi img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1KsTyTLoXmVKsZIBaY66VAgZG00tzgafH4RzsUYkGzZ_LtbzGno8bJig&s=10" title="Microsoft" description="Product Manager" salary="$100/hr"/> */}