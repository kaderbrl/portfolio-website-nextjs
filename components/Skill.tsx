import { IconType } from 'react-icons'
import { HexToRgb } from '@/lib/utils'

interface SkillProps {
	icon: IconType
	label: string
	size?: number
	color: string
}

export const Skill = ({ icon, label, size = 45, color }: SkillProps) => {
	const Icon = icon

	return (
		<div
			className='w-24 h-24 lg:w-32 lg:h-32 rounded-full shadow-md flex flex-col justify-center items-center gap-2 border-4 border-double md:hover:rotate-[360deg] transition-transform ease-out duration-700'
			style={{ backgroundColor: HexToRgb(color, 0.1), borderColor: color }}
			title={label}>
			<Icon size={size} style={{ color: color }} />
			<code className='text-font text-xs lg:text-sm font-light'>{label}</code>
		</div>
	)
}
