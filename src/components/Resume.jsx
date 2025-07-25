import { useTheme } from './ThemeContext';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import '../assets/styles/style.css';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ArticleIcon from '@mui/icons-material/Article';

function Resume() {
  const { theme } = useTheme();

  return (
    <section id='resume' className='resume-section'>
      <h2 className={`page-header page-header-${theme}`}>Experience</h2>
      <div className='resume__container'>
        <VerticalTimeline
          animateOnce={false}
          lineColor={theme === 'dark' ? 'var(--white)' : 'var(--charcoal)'}>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={{
              background: 'var(--pop-green)',
              color: theme === 'dark' ? 'var(--white)' : 'var(--footer-dark)',
            }}
            contentArrowStyle={{ borderRight: '7px solid  var(--pop-green)' }}
            date='2020 - present'
            iconStyle={{
              background: 'var(--pop-green)',
              color: '#fff',
              border:
                theme === 'dark'
                  ? '1px solid var(--white)'
                  : '1px solid var(--charcoal)',
            }}
            icon={<WorkIcon />}>
            <h3 className='vertical-timeline-element-title'>
              Application Developer
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Blue Bell, PA
            </h4>
            <p>
              User Application Development | API Integration | Workflow
              Automation | Efficiency Optimization | Geospatial Mapping
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={{
              background: 'var(--pop-green)',
              color: theme === 'dark' ? 'var(--white)' : 'var(--footer-dark)',
            }}
            contentArrowStyle={{ borderRight: '7px solid  var(--pop-green)' }}
            date='2019 - 2020'
            iconStyle={{
              background: 'var(--pop-green)',
              color: '#fff',
              border:
                theme === 'dark'
                  ? '1px solid var(--white)'
                  : '1px solid var(--charcoal)',
            }}
            icon={<WorkIcon />}>
            <h3 className='vertical-timeline-element-title'>
              Jr. Software Developer
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Fort Washington, PA
            </h4>
            <p>
              Web App Launch | Database Design | Workflow Optimization | Task
              Automation | Client Consulting
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            contentStyle={{
              background: 'var(--edu-blue)',
              color: theme === 'dark' ? 'var(--white)' : 'var(--footer-dark)',
            }}
            contentArrowStyle={{ borderRight: '7px solid  var(--edu-blue)' }}
            iconStyle={{
              background: 'var(--edu-blue)',
              color: '#fff',
              border:
                theme === 'dark'
                  ? '1px solid var(--white)'
                  : '1px solid var(--charcoal)',
            }}
            icon={<SchoolIcon />}>
            <h3 className='vertical-timeline-element-title'>
              New York Code & Design Academy
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Completed 720+ hours of intensive training covering full-stack
              technologies, OOP, TDD, pair-programming, AGILE, and SCRUM.
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            contentStyle={{
              background: 'var(--edu-blue)',
              color: theme === 'dark' ? 'var(--white)' : 'var(--footer-dark)',
            }}
            contentArrowStyle={{ borderRight: '7px solid  var(--edu-blue)' }}
            iconStyle={{
              background: 'var(--edu-blue)',
              color: '#fff',
              border:
                theme === 'dark'
                  ? '1px solid var(--white)'
                  : '1px solid var(--charcoal)',
            }}
            icon={<SchoolIcon />}>
            <h3 className='vertical-timeline-element-title'>
              Walnut Hill College
            </h3>
            <p>Bachelor of Science in Culinary Arts - Summa Cum Laude</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            contentStyle={{
              background: 'rgb(233, 30, 99)',
              color: theme === 'dark' ? 'var(--white)' : 'var(--footer-dark)',
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
            iconStyle={{
              background: 'rgb(233, 30, 99)',
              color: '#fff',
              border:
                theme === 'dark'
                  ? '1px solid var(--white)'
                  : '1px solid var(--charcoal)',
            }}
            icon={<ArticleIcon />}>
            <h3 className='vertical-timeline-element-title'>My Resume</h3>
            <div style={{ textAlign: 'center' }}>
              <p>
                <a
                  href='/rodriguez_angel_resume_2025.pdf'
                  download='rodriguez_angel_resume_2025.pdf'
                  className='resume-download-button'>
                  Download My Resume
                  <PictureAsPdfIcon style={{ marginLeft: '8px' }} />
                </a>
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{
              background: 'var(--pop-green)',
              color: '#fff',
              border:
                theme === 'dark'
                  ? '1px solid var(--white)'
                  : '1px solid var(--charcoal)',
            }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Resume;
