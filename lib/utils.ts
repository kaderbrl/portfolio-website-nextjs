// Hex to RGB conversion
export const HexToRgb = (hex: string, alpha: number) => {
	var r = parseInt(hex.slice(1, 3), 16),
		g = parseInt(hex.slice(3, 5), 16),
		b = parseInt(hex.slice(5, 7), 16)

	if (alpha) {
		return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'
	} else {
		return 'rgb(' + r + ', ' + g + ', ' + b + ')'
	}
}

// Formatted Date
export const formatDate = (dateString: string) => {
	var parts = dateString.split('-')

	var monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	]

	var day = parseInt(parts[0], 10)
	var monthIndex = parseInt(parts[1], 10) - 1
	var year = parseInt(parts[2], 10)

	var formattedDate = monthNames[monthIndex] + ' ' + day + ', ' + year

	return formattedDate
}
