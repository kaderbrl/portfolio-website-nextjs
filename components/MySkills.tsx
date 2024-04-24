'use client'
import {
	FaBootstrap,
	FaCss3Alt,
	FaFigma,
	FaGithub,
	FaGitlab,
	FaHtml5,
	FaReact,
	FaSass,
} from 'react-icons/fa'
import {
	SiJest,
	SiJira,
	SiJquery,
	SiNextdotjs,
	SiRedux,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io5'

import { Skill, Title } from '@/components'

export const MySkills = () => {
	return (
		<section id='my-skills'>
			<Title name='My Skills' />

			<div className='flex flex-row flex-wrap justify-center gap-x-5 md:gap-x-12 gap-y-5 md:gap-y-8'>
				<Skill icon={FaHtml5} label='HTML5' color='#E54C21' />
				<Skill icon={FaCss3Alt} label='CSS3' color='#2465F1' />
				<Skill icon={IoLogoJavascript} label='JavaScript' color='#F7E018' />
				<Skill icon={SiJquery} label='JQuery' color='#78CFF5' />
				<Skill icon={FaReact} label='React JS' color='#149ECA' />
				<Skill icon={SiRedux} label='Redux' color='#764ABC' />
				<Skill icon={SiNextdotjs} label='Next JS' color='#000000' />
				<Skill icon={SiTypescript} label='TypeScript' color='#3178C6' size={35} />
				<Skill icon={FaBootstrap} label='Bootstrap' color='#8812FC' />
				<Skill icon={SiTailwindcss} label='Tailwind' color='#38BDF8' />
				<Skill icon={FaSass} label='SASS' color='#CF649A' />
				<Skill icon={SiJest} label='Jest' color='#9C4860' />
				<Skill icon={FaGithub} label='GitHub' color='#010409' />
				<Skill icon={FaGitlab} label='GitLab' color='#E24329' />
				<Skill icon={FaFigma} label='Figma' color='#A259FF' size={35} />
				<Skill icon={SiJira} label='Jira' color='#2684FF' size={35} />
			</div>
		</section>
	)
}
