import React, { useState } from 'react';
import { Building2, Home, Tractor } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'residential',
      title: 'Modern Home Installation',
      location: 'Gorakhpur',
      capacity: '5 kW',
      image: 'https://images.unsplash.com/photo-1691421740425-48ff22b6d442?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwyfHxyb29mdG9wJTIwc29sYXJ8ZW58MHx8fHwxNzY5Mjc2MDg1fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 2,
      category: 'commercial',
      title: 'Factory Rooftop System',
      location: 'Industrial Area, Gorakhpur',
      capacity: '50 kW',
      image: 'https://images.unsplash.com/photo-1617269778723-73a40cf299bd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwzfHxyb29mdG9wJTIwc29sYXJ8ZW58MHx8fHwxNzY5Mjc2MDg1fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 3,
      category: 'rural',
      title: 'Village Solar Installation',
      location: 'Rural Gorakhpur',
      capacity: '3 kW',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxzb2xhciUyMHBhbmVsc3xlbnwwfHx8fDE3NjkyNzYwNzl8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 4,
      category: 'residential',
      title: 'Residential Complex',
      location: 'Gorakhpur City',
      capacity: '10 kW',
      image: 'https://images.pexels.com/photos/9875683/pexels-photo-9875683.jpeg'
    },
    {
      id: 5,
      category: 'commercial',
      title: 'School Building Installation',
      location: 'Gorakhpur',
      capacity: '30 kW',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHw0fHxzb2xhciUyMHBhbmVsc3xlbnwwfHx8fDE3NjkyNzYwNzl8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 6,
      category: 'rural',
      title: 'Farm Solar Pump',
      location: 'Village near Gorakhpur',
      capacity: '5 kW',
      image: 'https://images.pexels.com/photos/356049/pexels-photo-356049.jpeg'
    },
    {
      id: 7,
      category: 'residential',
      title: 'Apartment Building',
      location: 'Gorakhpur',
      capacity: '8 kW',
      image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsc3xlbnwwfHx8fDE3NjkyNzYwNzl8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 8,
      category: 'commercial',
      title: 'Office Complex',
      location: 'City Mall Area, Gorakhpur',
      capacity: '40 kW',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxzb2xhciUyMHBhbmVsc3xlbnwwfHx8fDE3NjkyNzYwNzl8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 9,
      category: 'rural',
      title: 'Village Home Solar',
      location: 'Rural Area',
      capacity: '2 kW',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: null },
    { id: 'residential', label: 'Residential', icon: <Home size={18} /> },
    { id: 'commercial', label: 'Commercial', icon: <Building2 size={18} /> },
    { id: 'rural', label: 'Rural', icon: <Tractor size={18} /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="container">
          <h1 className="heading-1">Our Projects</h1>
          <p className="body-large">
            Explore our successful solar installations across Gorakhpur and surrounding areas
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section">
        <div className="container">
          <div className="filter-buttons">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.icon}
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <span className="project-category">{project.category}</span>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="heading-3">{project.title}</h3>
                  <p className="body-small">{project.location}</p>
                  <div className="project-capacity">
                    <span className="capacity-badge">{project.capacity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <p className="body-large">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
