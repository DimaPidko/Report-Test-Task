const salaries1 = {
	Manager: { salary: 1000, tax: '10%' },
	Designer: { salary: 600, tax: '30%' },
	Artist: { salary: 1500, tax: '15%' },
}
const team1 = [
	{ name: 'Misha', specialization: 'Manager' },
	{ name: 'Max', specialization: 'Designer' },
	{ name: 'Vova', specialization: 'Designer' },
	{ name: 'Leo', specialization: 'Artist' },
]

const salaries2 = {
	TeamLead: { salary: 1000, tax: '99%' },
	Architect: { salary: 9000, tax: '34%' },
}
const team2 = [
	{ name: 'Alexander', specialization: 'TeamLead' },
	{ name: 'Gaudi', specialization: 'Architect' },
	{ name: 'Koolhas', specialization: 'Architect' },
	{ name: 'Foster', specialization: 'Architect' },
	{ name: 'Napoleon', specialization: 'General' },
]

const calculateTeamFinanceReport = (salaries, team) => {
	const Report = {}
	const orderedKeys = Object.keys(salaries).sort()
	let totalBudgetTeam = 0

	for (let i = 0; i < orderedKeys.length; i++) {
		Report[`totalBudget${orderedKeys[i]}`] = 0
	}

	for (let i = 0; i < team.length; i++) {
		if (team[i].specialization in salaries) {
			const tax =
				(parseFloat(salaries[team[i].specialization].tax) / 100) *
				salaries[team[i].specialization].salary
			totalBudgetTeam += salaries[team[i].specialization].salary - tax
			if (team[i].specialization in salaries) {
				const specializationKey = `totalBudget${team[i].specialization}`
				Report[specializationKey] +=
					salaries[team[i].specialization].salary - tax
			}
		}
	}

	Report.totalBudgetTeam = totalBudgetTeam

	return Report
}

const financeReport1 = calculateTeamFinanceReport(salaries1, team1)
console.log(JSON.stringify(financeReport1))
const financeReport2 = calculateTeamFinanceReport(salaries2, team2)
console.log(JSON.stringify(financeReport2))
