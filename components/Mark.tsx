import { IconType } from 'react-icons'

interface MarkProps {
	icon: IconType
	label: string
	size?: number
}

export const Mark = ({ icon, label, size = 25 }: MarkProps) => {
	const Icon = icon

	return (
		<mark className='flex items-center flex-wrap gap-2 bg-grey/10 dark:bg-white text-black/80 font-medium rounded-full shadow-md pl-2 pr-3 py-1'>
			<Icon size={size} />
			<span className='text-xs'>{label}</span>
		</mark>
	)
}
