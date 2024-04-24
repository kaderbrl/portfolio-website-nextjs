interface TitleProps {
	name: string
}

export const Title = ({ name }: TitleProps) => {
	return (
		<h1
			className={`text-2xl md:text-3xl lg:text-4xl text-center tracking-[1px] text-primary underline decoration-1 decoration-secondary underline-offset-8 decoration-double pb-12 lg:pb-16`}
			style={{
				WebkitTextStrokeWidth: '1px',
				WebkitTextFillColor: 'transparent',
			}}>
			<code>{`<${name}/>`}</code>
		</h1>
	)
}
