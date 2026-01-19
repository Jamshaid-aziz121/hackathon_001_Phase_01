import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Module 1: ROS 2',
    description: (
      <>
        Learn about Robot Operating System 2, the backbone of modern robotics.
        Understand communication patterns, publishers, subscribers, and services.
      </>
    ),
    to: '/docs/module-1-ros2/core-concepts',
  },
  {
    title: 'Module 2: Simulation',
    description: (
      <>
        Explore Gazebo and Unity simulation environments for testing robotics concepts.
        Master physics modeling and environment design.
      </>
    ),
    to: '/docs/module-2-simulation/core-concepts',
  },
  {
    title: 'Module 3: AI Perception',
    description: (
      <>
        Understand NVIDIA Isaac tools for robot perception and navigation.
        Learn about sensor fusion and AI-driven decision making.
      </>
    ),
    to: '/docs/module-3-ai-perception/core-concepts',
  },
  {
    title: 'Module 4: VLA Systems',
    description: (
      <>
        Discover how robots can understand and respond to human commands.
        Explore vision-language-action models and human-robot interaction.
      </>
    ),
    to: '/docs/module-4-vla/core-concepts',
  },
];

function Feature({title, description, to}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={to} className="button button--primary">
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}