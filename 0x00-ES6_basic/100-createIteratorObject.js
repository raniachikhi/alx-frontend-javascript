export default function* createIteratorObject(report) {
	for (const department in report) {
		for (const employee in report[department]) {
			yield employee;
		}
	}
}
